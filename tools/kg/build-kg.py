#!/usr/bin/env python3
"""从 Wikidata 构建长江知识图谱，产出 src/data/kg.json。

只在需要刷新数据时手动跑，`npm run build` 不碰网络 —— kg.json 是提交进仓库的。
原始 SPARQL 响应缓存在 .cache/（已 gitignore），删掉即可强制重新抓取。

    python3 tools/kg/build-kg.py            # 有缓存就用缓存
    python3 tools/kg/build-kg.py --refresh  # 重新查 Wikidata

数据来自 Wikidata，许可 CC0（公有领域，无需署名）。
"""
import argparse
import collections
import gzip
import json
import math
import pathlib
import re
import sys
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[2]
HERE = pathlib.Path(__file__).parent
CACHE = HERE / '.cache'
OUT = ROOT / 'src' / 'data' / 'kg.json'
ENDPOINT = 'https://query.wikidata.org/sparql'
UA = 'yangtze-river-site/1.0 (https://yangtze.xunxiang.store) build-time KG extraction'

# 长江流域大致范围，用于筛掉全国性图层里跑到流域外的条目
BBOX = (90.0, 123.0, 24.0, 35.0)
YANGTZE = 'Q5413'

# 与站点 18 个地点关联的最大距离（公里）。放到 400 会把秦始皇陵、
# 丝绸之路这类离长江很远的遗产判成"靠近三峡"，读起来荒唐；收到 220。
NEAR_KM = 220

LABELS = '''OPTIONAL{?x rdfs:label ?zh FILTER(lang(?zh)="zh")}
OPTIONAL{?x rdfs:label ?en FILTER(lang(?en)="en")}
OPTIONAL{?x rdfs:label ?ja FILTER(lang(?ja)="ja")}
OPTIONAL{?x rdfs:label ?ht FILTER(lang(?ht)="zh-hant")}
OPTIONAL{?x wdt:P625 ?coord}'''

# 与长江有关的诗人 / 人物（手工挑选，避免把全唐诗作者都拉进来）
PEOPLE = ('wd:Q7071 wd:Q33772 wd:Q198048 wd:Q198211 wd:Q204077 wd:Q313324 wd:Q313327 '
          'wd:Q313330 wd:Q319618 wd:Q381822 wd:Q464470 wd:Q715570 wd:Q1069914 '
          'wd:Q1155987 wd:Q1367171 wd:Q696721 wd:Q6538730')

QUERIES = {
    'river': f'SELECT ?x ?zh ?en ?ja ?ht ?coord ?into ?len WHERE{{?x wdt:P403+ wd:{YANGTZE} . OPTIONAL{{?x wdt:P403 ?into}}OPTIONAL{{?x wdt:P2043 ?len}}{LABELS}}}',
    'dam': f'SELECT ?x ?zh ?en ?ja ?ht ?coord ?into ?y ?pw ?hg WHERE{{?x wdt:P31/wdt:P279* wd:Q12323 . {{?x wdt:P206 wd:{YANGTZE}}}UNION{{?x wdt:P206 ?r . ?r wdt:P403+ wd:{YANGTZE}}}OPTIONAL{{?x wdt:P206 ?into}}OPTIONAL{{?x wdt:P571 ?y}}OPTIONAL{{?x wdt:P2109 ?pw}}OPTIONAL{{?x wdt:P2048 ?hg}}{LABELS}}}',
    'bridge': f'SELECT ?x ?zh ?en ?ja ?ht ?coord ?y ?len WHERE{{?x wdt:P177 wd:{YANGTZE} . OPTIONAL{{?x wdt:P571 ?y}}OPTIONAL{{?x wdt:P2043 ?len}}{LABELS}}}',
    'city': f'SELECT ?x ?zh ?en ?ja ?ht ?coord ?pop WHERE{{?x wdt:P206 wd:{YANGTZE};wdt:P31/wdt:P279* wd:Q515 . OPTIONAL{{?x wdt:P1082 ?pop}}{LABELS}}}',
    'lake': f'SELECT ?x ?zh ?en ?ja ?ht ?coord WHERE{{{{?x wdt:P201 wd:{YANGTZE}}}UNION{{?x wdt:P200 wd:{YANGTZE}}}{LABELS}}}',
    'heritage': f'SELECT ?x ?zh ?en ?ja ?ht ?coord ?y WHERE{{?x wdt:P1435 wd:Q9259;wdt:P17 wd:Q148 . OPTIONAL{{?x wdt:P571 ?y}}{LABELS}}}',
    'battle': f'SELECT ?x ?zh ?en ?ja ?ht ?coord ?t WHERE{{?x wdt:P31/wdt:P279* wd:Q178561;wdt:P17 wd:Q148;wdt:P625 ?c2 . OPTIONAL{{?x wdt:P585 ?t}}{LABELS}}}',
    'person': f'SELECT ?x ?zh ?en ?ja ?ht ?coord ?b ?d ?rel ?place WHERE{{VALUES ?x{{{PEOPLE}}}OPTIONAL{{?x wdt:P569 ?b}}OPTIONAL{{?x wdt:P570 ?d}}OPTIONAL{{VALUES(?p ?rel){{(wdt:P19 "birthPlace")(wdt:P20 "deathPlace")(wdt:P937 "workedAt")}}?x ?p ?place}}{LABELS}}}',
    # 同时把作者卒年 ?dd 选出来：诗作本身没有年份也没有坐标，
    # 只有借作者的年代才能落进朝代脊线，否则 150 首诗会碎成一堆两节点小岛
    'work': f'SELECT ?x ?zh ?en ?ja ?ht ?coord ?au ?dd WHERE{{?au wdt:P106 wd:Q49757;wdt:P570 ?dd . FILTER(YEAR(?dd)<1912)?au wdt:P27 ?c . VALUES ?c{{wd:Q148 wd:Q7462 wd:Q9683 wd:Q8733 wd:Q7204 wd:Q11750 wd:Q45957}}?x wdt:P50 ?au . ?x rdfs:label ?zh2 FILTER(lang(?zh2)="zh")?x rdfs:label ?ja2 FILTER(lang(?ja2)="ja"){LABELS}}}',
}


def sparql(name, query, refresh):
    """查 WDQS，结果缓存到 .cache/<name>.json。"""
    CACHE.mkdir(exist_ok=True)
    cached = CACHE / f'{name}.json'
    if cached.exists() and not refresh:
        return json.loads(cached.read_text(encoding='utf-8'))['results']['bindings']
    url = ENDPOINT + '?' + urllib.parse.urlencode({'query': query})
    req = urllib.request.Request(url, headers={
        'Accept': 'application/sparql-results+json', 'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=180) as r:
        body = r.read().decode('utf-8')
    cached.write_text(body, encoding='utf-8')
    return json.loads(body)['results']['bindings']


def qid_of(binding):
    return binding['value'].rsplit('/', 1)[1]


def parse_point(value):
    m = re.match(r'Point\(([-\d.]+) ([-\d.]+)\)', value)
    return [round(float(m.group(1)), 3), round(float(m.group(2)), 3)] if m else None


def haversine(a, b):
    """两点大圆距离，公里"""
    (lon1, lat1), (lon2, lat2) = a, b
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp, dl = p2 - p1, math.radians(lon2 - lon1)
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(h))


def read_site_locations():
    """从 locations.ts 读 18 个地点的 id / 三语名 / 经纬度"""
    src = (ROOT / 'src' / 'data' / 'locations.ts').read_text(encoding='utf-8')
    out = []
    pat = re.compile(
        r"id: '([\w-]+)',\s*\n\s*name: l\('([^']*)', '([^']*)', '([^']*)'\)"
        r"(?:.|\n)*?lon: ([-\d.]+),\s*\n\s*lat: ([-\d.]+),")
    for m in pat.finditer(src):
        out.append({'id': m.group(1), 'n': [m.group(2), m.group(3), m.group(4)],
                    'c': [float(m.group(5)), float(m.group(6))]})
    return out


def read_site_events():
    """从 events.ts 读 18 个事件的 id / 三语标题 / 年份 / 所属地点 / 类别"""
    src = (ROOT / 'src' / 'data' / 'events.ts').read_text(encoding='utf-8')
    out = []
    pat = re.compile(
        r"id: '([\w-]+)',\s*\n\s*year: (-?\d+),(?:\s*\n\s*endYear: -?\d+,)?\s*\n"
        r"\s*title: l\(\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',?\s*\),\s*\n"
        r"\s*locationId: '([\w-]+)',\s*\n\s*category: '([^']*)',")
    for m in pat.finditer(src):
        out.append({'id': 'ev-' + m.group(1), 'y': m.group(2),
                    'n': [m.group(3), m.group(4), m.group(5)],
                    'site': m.group(6), 'cat': m.group(7)})
    return out


def read_eras():
    src = (ROOT / 'src' / 'data' / 'eras.ts').read_text(encoding='utf-8')
    pat = re.compile(r"name: l\('([^']*)', '([^']*)', '([^']*)'\), start: (-?\d+), end: (-?\d+)")
    return [{'id': f'era-{i}', 'n': [m.group(1), m.group(2), m.group(3)],
             'start': int(m.group(4)), 'end': int(m.group(5))}
            for i, m in enumerate(pat.finditer(src))]


def year_of(node):
    """取节点年份。注意公元前是负数，不能按固定长度截断字符串
    —— '-3300'[:4] 会变成 '-330'，良渚会被归错一千年。"""
    for key in ('y', 'd', 'b'):
        if key not in node:
            continue
        m = re.match(r'(-?\d+)', str(node[key]).lstrip('+'))
        if m:
            return int(m.group(1))
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--refresh', action='store_true', help='忽略缓存，重新查 Wikidata')
    args = ap.parse_args()

    nodes, edges = {}, set()
    for kind, query in QUERIES.items():
        rows = sparql(kind, query, args.refresh)
        print(f'  {kind:9} {len(rows):5d} 行')
        for r in rows:
            qid = qid_of(r['x'])
            n = nodes.setdefault(qid, {'i': qid, 'k': kind})
            for k in ('zh', 'en', 'ja', 'ht'):
                if k in r:
                    n[k] = r[k]['value']
            if 'coord' in r:
                c = parse_point(r['coord']['value'])
                if c:
                    n['c'] = c
            for src, dst, cast in (('len', 'l', lambda v: round(float(v))),
                                   ('pop', 'P', lambda v: int(float(v))),
                                   ('pw', 'p', lambda v: round(float(v), 1)),
                                   ('hg', 'h', lambda v: round(float(v), 1))):
                if src in r:
                    try:
                        n[dst] = cast(r[src]['value'])
                    except ValueError:
                        pass
            for src, dst in (('y', 'y'), ('b', 'b'), ('d', 'd'), ('t', 'y')):
                if src in r:
                    n[dst] = r[src]['value'][:5].lstrip('+')
            if 'into' in r:
                edges.add((qid, 'flowsInto' if kind == 'river' else 'builtOn', qid_of(r['into'])))
            if 'place' in r:
                edges.add((qid, r['rel']['value'], qid_of(r['place'])))
            if 'au' in r:
                edges.add((qid_of(r['au']), 'authorOf', qid))
                if 'dd' in r:
                    # 作者卒年记在诗作上，后面据此归入朝代
                    n['ad'] = r['dd']['value'][:5].lstrip('+')

    def trilingual(n):
        return bool(n.get('zh') and n.get('en') and (n.get('ja') or n.get('ht')))

    def keep(n):
        # 日文标签覆盖率与知名度强相关，缺 ja 时退回 zh-hant：
        # 汉字专名在日文里字形相同，这样能救回一批而不是硬丢
        if not trilingual(n):
            return False
        if n['k'] in ('heritage', 'battle'):
            c = n.get('c')
            return bool(c) and BBOX[0] <= c[0] <= BBOX[1] and BBOX[2] <= c[1] <= BBOX[3]
        if n['k'] == 'river' and not n.get('ja') and (n.get('l') or 0) < 100:
            return False
        return True

    kept = {k: v for k, v in nodes.items() if keep(v)}

    # 闭包：被筛掉但仍是某条边端点的实体，补回成普通 place 节点。
    # 不做这一步，边会大量指向不存在的节点，图直接散架。
    need = sorted(({e[0] for e in edges} | {e[2] for e in edges} | {YANGTZE}) - set(kept))
    for i in range(0, len(need), 150):
        chunk = ' '.join('wd:' + x for x in need[i:i + 150])
        rows = sparql(f'closure-{i//150}',
                      f'SELECT ?x ?zh ?en ?ja ?ht ?coord WHERE{{VALUES ?x{{{chunk}}}{LABELS}}}',
                      args.refresh)
        for r in rows:
            qid = qid_of(r['x'])
            n = kept.setdefault(qid, {'i': qid, 'k': 'place'})
            for k in ('zh', 'en', 'ja', 'ht'):
                if k in r:
                    n[k] = r[k]['value']
            if 'coord' in r:
                c = parse_point(r['coord']['value'])
                if c:
                    n['c'] = c
    kept = {k: v for k, v in kept.items() if trilingual(v)}

    # 手工补充：日文标签（大坝只有 2/19 有 ja）、工程谱系、诗作与地点的关联
    supp_path = HERE / 'supplement.json'
    supp = json.loads(supp_path.read_text(encoding='utf-8')) if supp_path.exists() else {}
    for qid, ja in (supp.get('jaLabels') or {}).items():
        if qid in kept:
            kept[qid]['ja'] = ja

    out_nodes = [{'i': v['i'], 'k': v['k'],
                  'n': [v['zh'], v['en'], v.get('ja') or v['ht']],
                  **{x: v[x] for x in ('c', 'y', 'b', 'd', 'l', 'p', 'h', 'P') if x in v}}
                 for v in kept.values()]
    out_edges = [list(e) for e in sorted(edges) if e[0] in kept and e[2] in kept]

    # ---- 站点自身的骨架：18 个地点 + 18 个事件 + 9 个朝代 ----
    # 站内数据本来就是三语齐全、有年份、有归属的，把它作为骨架比只导入 Wikidata 更实在：
    # 图谱因此成为站点内容的超集，而不是一份挂在旁边的外来数据。
    sites = read_site_locations()
    site_events = read_site_events()
    eras = read_eras()
    out_nodes += [{'i': s['id'], 'k': 'site', 'n': s['n'], 'c': s['c']} for s in sites]
    out_nodes += [{'i': e['id'], 'k': 'era', 'n': e['n'], 'y': str(e['start'])} for e in eras]
    site_by_id = {s['id']: s for s in sites}
    for ev in site_events:
        loc = site_by_id.get(ev['site'])
        out_nodes.append({'i': ev['id'], 'k': 'event', 'n': ev['n'], 'y': ev['y'],
                          **({'c': loc['c']} if loc else {})})
        out_edges.append([ev['id'], 'happenedAt', ev['site']])

    # 干流顺序：locations.ts 里就是从源头到入海口排的，直接连成一条链，
    # 18 个地点从此是一条有上下游方向的脊线，而不是 18 个散点
    for a, b in zip(sites, sites[1:]):
        out_edges.append([a['id'], 'downstream', b['id']])

    # ---- 派生边：这是把 94 座孤岛缝成一张图的关键 ----
    near = 0
    for n in out_nodes:
        # event 已经有 happenedAt 指向自己的地点，不用再连一条同义的 nearSite
        if n['k'] in ('site', 'era', 'event') or 'c' not in n:
            continue
        best, dist = None, 1e9
        for s in sites:
            d = haversine(n['c'], s['c'])
            if d < dist:
                best, dist = s['id'], d
        if best and dist <= NEAR_KM:
            out_edges.append([n['i'], 'nearSite', best])
            near += 1

    era_edges = 0
    for n in out_nodes:
        if n['k'] in ('site', 'era'):
            continue
        y = year_of(n)
        if y is None:
            continue
        for e in eras:
            if e['start'] <= y < e['end']:
                out_edges.append([n['i'], 'duringEra', e['id']])
                era_edges += 1
                break

    # 诗作没有坐标也没有年份，只靠 authorOf 连着作者，会飘成一堆两三个节点的小岛。
    # 两条补救：跟着作者的卒年归入朝代；诗题里点到的地名连回站内地点。
    # 作者卒年只用来定朝代，不必占产物体积，所以从 kept 里查而不是从已精简的节点里查
    work_ad = {v['i']: v['ad'] for v in kept.values() if 'ad' in v}
    work_era = 0
    for n in out_nodes:
        if n['k'] != 'work' or n['i'] not in work_ad:
            continue
        try:
            y = int(str(work_ad[n['i']])[:4])
        except ValueError:
            continue
        for e in eras:
            if e['start'] <= y < e['end']:
                out_edges.append([n['i'], 'duringEra', e['id']])
                work_era += 1
                break

    aliases = supp.get('aliases') or {}
    setat = 0
    for n in out_nodes:
        if n['k'] != 'work':
            continue
        title = n['n'][0]
        for site_id, words in aliases.items():
            if site_id in site_by_id and any(w in title for w in words):
                out_edges.append([n['i'], 'setAt', site_id])
                setat += 1
                break

    ids_now = {n['i'] for n in out_nodes}
    for a, b in (supp.get('lineage') or []):
        if a in ids_now and b in ids_now:
            out_edges.append([a, 'succeeds', b])

    # work 这一层抽出来的并不全是诗：《隋书》《四書》《梦溪笔谈》这类典籍
    # 同样挂在「1912 年前的中国文人」名下，但它们与长江毫无关系，留着就是噪音。
    # 只保留两种：诗题点到了站内地名的，以及出自我们手工挑选的那批人物的。
    curated = {q[3:] for q in PEOPLE.split()}
    linked_works = {a for a, rel, _ in out_edges if rel == 'setAt'}
    for a, rel, b in out_edges:
        if rel == 'authorOf' and a in curated:
            linked_works.add(b)
    drop_works = {n['i'] for n in out_nodes if n['k'] == 'work' and n['i'] not in linked_works}
    out_nodes = [n for n in out_nodes if n['i'] not in drop_works]
    out_edges = [e for e in out_edges if e[0] not in drop_works and e[2] not in drop_works]

    # 度为 0 的节点对图没有贡献，只会在画布上散成噪点；站点骨架一律保留
    degree = collections.Counter()
    for a, _, b in out_edges:
        degree[a] += 1
        degree[b] += 1
    pruned = [n for n in out_nodes if degree[n['i']] or n['k'] in ('site', 'era')]
    dropped = len(out_nodes) - len(pruned)
    out_nodes = pruned

    out = {'nodes': out_nodes, 'edges': out_edges}
    text = json.dumps(out, ensure_ascii=False, separators=(',', ':'))
    OUT.write_text(text, encoding='utf-8')

    # ---- 报告 ----
    ids = {n['i'] for n in out_nodes}
    touched = {e[0] for e in out_edges} | {e[2] for e in out_edges}
    adj = collections.defaultdict(set)
    for a, _, b in out_edges:
        adj[a].add(b)
        adj[b].add(a)
    seen, comps = set(), []
    for start in ids:
        if start in seen:
            continue
        stack, comp = [start], set()
        while stack:
            x = stack.pop()
            if x in comp:
                continue
            comp.add(x)
            stack.extend(adj[x] - comp)
        seen |= comp
        comps.append(len(comp))
    comps.sort(reverse=True)

    print()
    print('节点:', dict(collections.Counter(n['k'] for n in out_nodes).most_common()))
    print('边  :', dict(collections.Counter(e[1] for e in out_edges).most_common()))
    print(f'派生: nearSite {near}, duringEra {era_edges}(+作者卒年 {work_era}), '
          f'诗题地名 setAt {setat}；剪掉 {dropped} 个孤点')
    print(f'孤立节点 {len(ids - touched)} / {len(ids)}；连通分量 {len(comps)} 个，最大 {comps[0]}')
    print(f'写入 {OUT.relative_to(ROOT)}  {len(text.encode())/1024:.1f} KB raw / '
          f'{len(gzip.compress(text.encode()))/1024:.1f} KB gzip')
    if len(comps) > 1:
        print(f'注意：仍有 {len(comps)-1} 个游离分量', file=sys.stderr)


if __name__ == '__main__':
    main()
