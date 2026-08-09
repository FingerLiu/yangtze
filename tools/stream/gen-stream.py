#!/usr/bin/env python3
"""把各主题的调研产物合成 src/data/stream.ts（江上万象的弹幕条目）。

用法：把 *.json 放进 tools/stream/content/，然后
    python3 tools/stream/gen-stream.py
"""
import json
import pathlib
import sys

HERE = pathlib.Path(__file__).parent
ROOT = HERE.parents[1]
CONTENT = HERE / 'content'
OUT = ROOT / 'src' / 'data' / 'stream.ts'

LANGS = ('zh', 'en', 'ja')
CATS = {'landform', 'ecology', 'discovery', 'academic', 'ethnic', 'heritage', 'trend', 'visual'}
SITES = set('''tuotuohe tongtianhe jinshajiang hutiaoxia panxi sanxingdui dujiangyan baihetan
chongqing sanxia yichang-jingzhou dongting wuhan poyang nanjing guazhou jiangnan shanghai'''.split())


def js(s):
    return json.dumps(s, ensure_ascii=False)


def l10n(obj, where):
    missing = [k for k in LANGS if not (obj.get(k) or '').strip()]
    if missing:
        raise SystemExit(f'{where}: 缺少语言 {missing} —— 三语必填，否则构建会失败')
    return f'l({js(obj["zh"])}, {js(obj["en"])}, {js(obj["ja"])})'


def main():
    files = sorted(CONTENT.glob('*.json'))
    if not files:
        raise SystemExit(f'{CONTENT} 下没有内容文件')

    items, seen = [], set()
    for path in files:
        data = json.loads(path.read_text(encoding='utf-8'))
        for it in data.get('items', []):
            iid = it['id']
            if iid in seen:
                print(f'  跳过重复 id: {iid}', file=sys.stderr)
                continue
            seen.add(iid)
            if it['cat'] not in CATS:
                raise SystemExit(f'{iid}: 未知分类 {it["cat"]}')
            site = it.get('siteId')
            if site and site not in SITES:
                print(f'  {iid}: siteId "{site}" 不在 18 个地点里，已丢弃', file=sys.stderr)
                site = None
            items.append({**it, 'siteId': site, 'src': path.name})

    # 按权重降序，同权重按 id，保证产物稳定
    items.sort(key=lambda x: (-int(x.get('weight', 3)), x['id']))

    lines = [
        '// 由 tools/stream/gen-stream.py 生成 —— 「江上万象」的弹幕条目。',
        '// 内容依据实际抓取的来源撰写，调研产物留档在 tools/stream/content/。',
        "import { l } from '../i18n'",
        "import type { StreamItem } from './streamTypes'",
        '',
        'export const streamItems: StreamItem[] = [',
    ]
    for it in items:
        lines.append('  {')
        lines.append(f'    id: {js(it["id"])},')
        lines.append(f'    cat: {js(it["cat"])},')
        lines.append(f'    title: {l10n(it["title"], it["id"] + ".title")},')
        lines.append(f'    text: {l10n(it["text"], it["id"] + ".text")},')
        lines.append(f'    weight: {int(it.get("weight", 3))},')
        if it.get('year') is not None:
            lines.append(f'    year: {int(it["year"])},')
        if it.get('siteId'):
            lines.append(f'    siteId: {js(it["siteId"])},')
        links = [r for r in (it.get('links') or [])
                 if any((r.get('href') or {}).get(k) for k in LANGS)]
        if links:
            lines.append('    links: [')
            for r in links:
                href = {k: v for k, v in r['href'].items() if k in LANGS and v}
                hs = ', '.join(f'{k}: {js(v)}' for k, v in href.items())
                lines.append('      {')
                lines.append(f'        label: {l10n(r["label"], it["id"] + ".link")},')
                lines.append(f'        href: {{ {hs} }},')
                lines.append('      },')
            lines.append('    ],')
        lines.append('  },')
    lines.append(']')
    lines.append('')

    OUT.write_text('\n'.join(lines), encoding='utf-8')
    by_cat = {}
    for it in items:
        by_cat[it['cat']] = by_cat.get(it['cat'], 0) + 1
    print(f'写入 {OUT.relative_to(ROOT)}：{len(items)} 条')
    print('  分类:', dict(sorted(by_cat.items(), key=lambda kv: -kv[1])))
    print('  有关联地点:', sum(1 for i in items if i.get('siteId')),
          '/ 有外链:', sum(1 for i in items if i.get('links')))


if __name__ == '__main__':
    main()
