#!/usr/bin/env python3
"""把 content/*.json 合成 src/data/stories.ts（地点与事件的长文、延伸阅读）。

用法：编辑 tools/stories/content/*.json，然后
    python3 tools/stories/gen-stories.py

约定：
  content/<locationId>.json     地点：{locationId, facets:{<facet>:{story:[L10n]}}, links:[...]}
  content/ev-<eventId>.json     事件：{eventId, story:[L10n], links:[...]}
"""
import json
import pathlib
import sys

HERE = pathlib.Path(__file__).parent
ROOT = HERE.parents[1]
CONTENT = HERE / "content"
OUT = ROOT / "src" / "data" / "stories.ts"

LANGS = ("zh", "en", "ja")
FACETS = ("nature", "history", "culture")


def js(s):
    """JSON 转义在 TS 双引号字符串里同样合法"""
    return json.dumps(s, ensure_ascii=False)


def l10n(obj, where):
    missing = [k for k in LANGS if not (obj.get(k) or "").strip()]
    if missing:
        raise SystemExit(f"{where}: 缺少语言 {missing} —— 三语必填，否则构建会失败")
    return f"l({js(obj['zh'])}, {js(obj['en'])}, {js(obj['ja'])})"


def links_ts(links, where, indent):
    if not links:
        return None
    pad = " " * indent
    out = []
    for i, r in enumerate(links):
        href = {k: v for k, v in (r.get("href") or {}).items() if k in LANGS and v}
        if not href:
            print(f"  跳过 {where} 第{i+1}条链接：没有任何可用地址", file=sys.stderr)
            continue
        parts = [f"{pad}  {{"]
        parts.append(f"{pad}    label: {l10n(r['label'], where + ' link.label')},")
        hs = ", ".join(f"{k}: {js(v)}" for k, v in href.items())
        parts.append(f"{pad}    href: {{ {hs} }},")
        if r.get("source"):
            parts.append(f"{pad}    source: {l10n(r['source'], where + ' link.source')},")
        parts.append(f"{pad}  }},")
        out.append("\n".join(parts))
    if not out:
        return None
    return f"[\n" + "\n".join(out) + f"\n{pad}]"


def main():
    loc_files = sorted(p for p in CONTENT.glob("*.json") if not p.name.startswith("ev-"))
    ev_files = sorted(CONTENT.glob("ev-*.json"))

    header = [
        "// 由 scratchpad/gen_stories.py 从各条目的调研产物生成 —— 长文与延伸阅读。",
        "// 与 locations.ts / events.ts 按 id 关联，在那两个文件末尾合并进 Facet.story 等字段。",
        # 仓库开了 noUnusedLocals：内容为空时不能留下没用到的 l
        *(["import { l } from '../i18n'"] if (loc_files or ev_files) else []),
        "import type { FacetKey, L10n, RefLink } from './types'",
    ]
    lines = [
        *header,
        "",
        "export interface LocationStory {",
        "  facets: Partial<Record<FacetKey, L10n[]>>",
        "  links?: RefLink[]",
        "}",
        "",
        "export const LOCATION_STORIES: Record<string, LocationStory> = {",
    ]

    n_par = 0
    for p in loc_files:
        d = json.loads(p.read_text(encoding="utf-8"))
        key = d["locationId"]
        lines.append(f"  {js(key)}: {{")
        lines.append("    facets: {")
        for f in FACETS:
            block = (d.get("facets") or {}).get(f)
            if not block or not block.get("story"):
                continue
            lines.append(f"      {f}: [")
            for i, para in enumerate(block["story"]):
                lines.append(f"        {l10n(para, f'{key}.{f}[{i}]')},")
                n_par += 1
            lines.append("      ],")
        lines.append("    },")
        lk = links_ts(d.get("links"), key, 4)
        if lk:
            lines.append(f"    links: {lk},")
        lines.append("  },")
    lines.append("}")
    lines.append("")
    lines.append("export const EVENT_STORIES: Record<string, { story: L10n[]; links?: RefLink[] }> = {")
    for p in ev_files:
        d = json.loads(p.read_text(encoding="utf-8"))
        key = d["eventId"]
        lines.append(f"  {js(key)}: {{")
        lines.append("    story: [")
        for i, para in enumerate(d.get("story") or []):
            lines.append(f"      {l10n(para, f'ev-{key}[{i}]')},")
            n_par += 1
        lines.append("    ],")
        lk = links_ts(d.get("links"), "ev-" + key, 4)
        if lk:
            lines.append(f"    links: {lk},")
        lines.append("  },")
    lines.append("}")
    lines.append("")

    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"写入 {OUT}")
    print(f"  地点 {len(loc_files)} 条 / 事件 {len(ev_files)} 条 / 段落合计 {n_par}（×3 语言）")


if __name__ == "__main__":
    main()
