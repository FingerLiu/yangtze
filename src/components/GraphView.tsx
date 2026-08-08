import { useEffect, useMemo, useRef, useState } from 'react'
import {
  forceCollide,
  forceSimulation,
  type Simulation,
  type SimulationLinkDatum,
  type SimulationNodeDatum,
} from 'd3-force'
import { select } from 'd3-selection'
import { zoom, zoomIdentity, type ZoomTransform } from 'd3-zoom'
import kgUrl from '../data/kg.json?url'
import { KIND_COLORS, KIND_LABELS, REL_LABELS, REL_LABELS_IN } from '../data/kgLabels'
import { kgName, type KgData, type KgEdge, type KgNode } from '../data/kgTypes'
import { UI, useLang } from '../i18n'

interface SimNode extends SimulationNodeDatum {
  id: string
  node: KgNode
  degree: number
  r: number
}
type SimLink = SimulationLinkDatum<SimNode> & { rel: KgEdge[1] }

/** 边的视觉权重：骨架边（干流顺序、事件归属）要看得出来，nearSite / duringEra 是背景织物 */
const EDGE_ALPHA: Partial<Record<KgEdge[1], number>> = {
  downstream: 0.85,
  succeeds: 0.7,
  happenedAt: 0.45,
  setAt: 0.5,
  authorOf: 0.4,
  flowsInto: 0.3,
  nearSite: 0,
  duringEra: 0,
}

function cssVar(name: string, fallback: string): string {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return v || fallback
}

export function GraphView({ onOpenSite }: { onOpenSite: (siteId: string) => void }) {
  const { lang, t } = useLang()
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [data, setData] = useState<KgData | null>(null)
  const [failed, setFailed] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  // 图谱数据是独立的静态资源，首屏不加载；打开这个视图才取
  useEffect(() => {
    let alive = true
    fetch(kgUrl)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d: KgData) => alive && setData(d))
      .catch(() => alive && setFailed(true))
    return () => {
      alive = false
    }
  }, [])

  const graph = useMemo(() => {
    if (!data) return null
    const degree = new Map<string, number>()
    for (const [a, , b] of data.edges) {
      degree.set(a, (degree.get(a) ?? 0) + 1)
      degree.set(b, (degree.get(b) ?? 0) + 1)
    }
    const nodes: SimNode[] = data.nodes.map((n) => {
      const d = degree.get(n.i) ?? 0
      const base = n.k === 'site' ? 9 : n.k === 'era' ? 8 : n.k === 'event' ? 6.5 : 4.5
      return { id: n.i, node: n, degree: d, r: base + Math.min(6, Math.sqrt(d) * 1.1) }
    })
    const byId = new Map(nodes.map((n) => [n.id, n]))
    const links: SimLink[] = data.edges
      .filter(([a, , b]) => byId.has(a) && byId.has(b))
      .map(([a, rel, b]) => ({ source: a, target: b, rel }))
    const neighbors = new Map<string, { rel: KgEdge[1]; other: string; out: boolean }[]>()
    for (const [a, rel, b] of data.edges) {
      if (!neighbors.has(a)) neighbors.set(a, [])
      if (!neighbors.has(b)) neighbors.set(b, [])
      neighbors.get(a)!.push({ rel, other: b, out: true })
      neighbors.get(b)!.push({ rel, other: a, out: false })
    }
    return { nodes, links, byId, neighbors }
  }, [data])

  const matched = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q || !graph) return null
    const hit = new Set<string>()
    for (const n of graph.nodes) {
      if (n.node.n.some((s) => s.toLowerCase().includes(q))) hit.add(n.id)
    }
    return hit
  }, [query, graph])

  const simRef = useRef<Simulation<SimNode, SimLink> | null>(null)
  const transformRef = useRef<ZoomTransform>(zoomIdentity)
  const stateRef = useRef({ selected, hovered, matched, lang })
  stateRef.current = { selected, hovered, matched, lang }

  useEffect(() => {
    if (!graph || !canvasRef.current || !wrapRef.current) return
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    const ctx = canvas.getContext('2d')!

    let width = wrap.clientWidth
    let height = wrap.clientHeight
    const resize = () => {
      width = wrap.clientWidth
      height = wrap.clientHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const colors = {
      bg: cssVar('--bg', '#f3ecdb'),
      text: cssVar('--text', '#3a3226'),
      dim: cssVar('--text-dim', '#8a7c66'),
      line: cssVar('--border-line', '#d8cdb4'),
      halo: cssVar('--panel', '#fdfaf2'),
    }
    const kindColor: Record<string, string> = {}
    for (const [k, v] of Object.entries(KIND_COLORS)) {
      kindColor[k] = v.startsWith('var(') ? cssVar(v.slice(4, -1), '#888') : v
    }

    // 布局是算出来的，不是让力学自己找的。每个节点都恰好有一条 nearSite，
    // 所以这本质上是一棵树：干流 → 18 个地点 → 各自的卫星。把卫星排在自己那一站
    // 正下方，位置本身就说明了"它在江的哪一段"，也就不需要再画 nearSite 的边。
    // 力学只留碰撞，用来消掉重叠，不参与找位置。
    const layout = () => {
      const sites = graph.nodes.filter((n) => n.node.k === 'site' && n.node.c)
      const eras = graph.nodes.filter((n) => n.node.k === 'era')
      const padX = Math.max(70, width * 0.05)
      const span = Math.max(1, width - padX * 2)
      const lons = sites.map((s) => s.node.c![0])
      const lon0 = Math.min(...lons)
      const lon1 = Math.max(...lons)
      const railY = height * 0.2
      sites.forEach((s) => {
        s.fx = padX + ((s.node.c![0] - lon0) / (lon1 - lon0 || 1)) * span
        s.fy = railY
      })
      eras.sort((a, b) => Number(a.node.y ?? 0) - Number(b.node.y ?? 0))
      eras.forEach((e, i) => {
        e.fx = padX + (i / Math.max(1, eras.length - 1)) * span
        e.fy = height * 0.94
      })

      // 每个节点归到它的 nearSite；没有的（诗文、人物）跟着 setAt / authorOf 走
      const homeOf = new Map<string, string>()
      for (const [a, rel, b] of (data?.edges ?? [])) {
        if (rel === 'nearSite' || rel === 'happenedAt' || rel === 'setAt') homeOf.set(a, b)
      }
      for (const [a, rel, b] of (data?.edges ?? [])) {
        if (rel === 'authorOf' && !homeOf.has(b) && homeOf.has(a)) homeOf.set(b, homeOf.get(a)!)
        if (rel === 'authorOf' && !homeOf.has(a) && homeOf.has(b)) homeOf.set(a, homeOf.get(b)!)
      }

      const buckets = new Map<string, SimNode[]>()
      const orphans: SimNode[] = []
      for (const n of graph.nodes) {
        if (n.node.k === 'site' || n.node.k === 'era') continue
        const home = homeOf.get(n.id)
        if (home && graph.byId.get(home)?.node.k === 'site') {
          if (!buckets.has(home)) buckets.set(home, [])
          buckets.get(home)!.push(n)
        } else {
          orphans.push(n)
        }
      }

      const KIND_ORDER = ['event', 'city', 'heritage', 'battle', 'work', 'person',
                          'dam', 'bridge', 'river', 'lake', 'place']
      const colW = span / Math.max(1, sites.length)
      const cols = Math.max(2, Math.floor(colW / 22))
      const top = railY + 62
      const bottom = height * 0.88
      for (const site of sites) {
        const list = (buckets.get(site.id) ?? []).sort(
          (a, b) => KIND_ORDER.indexOf(a.node.k) - KIND_ORDER.indexOf(b.node.k) || b.degree - a.degree)
        const rows = Math.ceil(list.length / cols) || 1
        const rowGap = Math.min(26, (bottom - top) / Math.max(1, rows))
        list.forEach((n, i) => {
          const col = i % cols
          const row = Math.floor(i / cols)
          n.fx = site.fx! + (col - (cols - 1) / 2) * 21
          n.fy = top + row * rowGap
        })
      }
      orphans.forEach((n, i) => {
        n.fx = padX + ((i % 26) / 25) * span
        n.fy = height * 0.86 - Math.floor(i / 26) * 20
      })
    }
    layout()
    const ro = new ResizeObserver(() => {
      resize()
      layout()
      simRef.current?.alpha(0.25).restart()
    })
    ro.observe(wrap)

    // 位置已经定好，力学只做碰撞松弛
    const sim = forceSimulation(graph.nodes)
      .force('collide', forceCollide<SimNode>((d) => d.r + 2).iterations(1))
      .alphaDecay(0.06)
    simRef.current = sim

    // 力学本身没有边界，节点会一路漂出画布。每 tick 夹一次，比加一堆力更可控。
    const draw = () => {
      const { selected: sel, hovered: hov, matched: match, lang: lg } = stateRef.current
      const tr = transformRef.current
      const focus = hov ?? sel
      const focusSet = new Set<string>()
      if (focus) {
        focusSet.add(focus)
        for (const nb of graph.neighbors.get(focus) ?? []) focusSet.add(nb.other)
      }

      ctx.save()
      ctx.fillStyle = colors.bg
      ctx.fillRect(0, 0, width, height)
      ctx.translate(tr.x, tr.y)
      ctx.scale(tr.k, tr.k)

      // 两条轴的导引线：让"上面是地理、下面是时间"一眼看得出来
      ctx.globalAlpha = 0.5
      ctx.setLineDash([2 / tr.k, 7 / tr.k])
      ctx.lineWidth = 1 / tr.k
      ctx.strokeStyle = colors.line
      for (const y of [height * 0.2]) {
        ctx.beginPath()
        ctx.moveTo(-width, y)
        ctx.lineTo(width * 2, y)
        ctx.stroke()
      }
      ctx.setLineDash([])

      // 边
      ctx.lineWidth = 1 / tr.k
      for (const link of graph.links) {
        const s = link.source as SimNode
        const tgt = link.target as SimNode
        if (s.x == null || tgt.x == null) continue
        let alpha = EDGE_ALPHA[link.rel] ?? 0.22
        if (focus) alpha = focusSet.has(s.id) && focusSet.has(tgt.id) ? 0.75 : alpha * 0.22
        else if (match) alpha *= 0.3
        ctx.globalAlpha = alpha
        ctx.strokeStyle = link.rel === 'downstream' ? kindColor.site : colors.line
        ctx.lineWidth = (link.rel === 'downstream' ? 2 : 1) / tr.k
        ctx.beginPath()
        ctx.moveTo(s.x!, s.y!)
        ctx.lineTo(tgt.x!, tgt.y!)
        ctx.stroke()
      }

      // 节点
      for (const n of graph.nodes) {
        if (n.x == null) continue
        let alpha = 1
        if (focus) alpha = focusSet.has(n.id) ? 1 : 0.16
        else if (match) alpha = match.has(n.id) ? 1 : 0.14
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(n.x!, n.y!, n.r, 0, Math.PI * 2)
        ctx.fillStyle = kindColor[n.node.k] ?? colors.dim
        ctx.fill()
        if (n.id === sel || (match && match.has(n.id))) {
          ctx.lineWidth = 2.5 / tr.k
          ctx.strokeStyle = colors.halo
          ctx.stroke()
        }
      }

      // 标签：缩放越大显示越多，避免糊成一片
      const minDegree = tr.k > 2.2 ? 0 : tr.k > 1.4 ? 3 : 8
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      // 地理轴上 18 个地点按经度排，中游几站挨得很近，标签必须上下错开才读得出
      const siteOrder = new Map<string, number>()
      graph.nodes.filter((n) => n.node.k === 'site')
        .sort((a, b) => (a.fx ?? 0) - (b.fx ?? 0))
        .forEach((n, i) => siteOrder.set(n.id, i))
      for (const n of graph.nodes) {
        if (n.x == null) continue
        const kind = n.node.k
        const important = kind === 'site' || kind === 'era'
        const show = important || n.degree >= minDegree ||
          n.id === sel || n.id === hov || (match?.has(n.id) ?? false)
        if (!show) continue
        let alpha = 1
        if (focus) alpha = focusSet.has(n.id) ? 1 : 0.12
        else if (match) alpha = match.has(n.id) ? 1 : 0.1
        ctx.globalAlpha = alpha
        const size = (important ? 14 : 12) / tr.k
        ctx.font = `${size}px "Kaiti SC", "STKaiti", "Songti SC", serif`
        const label = kgName(n.node, lg)
        // 朝代标签放在圆点上方，否则会被左下角的操作提示压住
        let y: number
        if (kind === 'era') {
          y = n.y! - n.r - size * 0.85
        } else if (kind === 'site') {
          // 下游几站经度接近，标签必须分两层错开
          const tier = (siteOrder.get(n.id) ?? 0) % 2
          y = n.y! - n.r - size * (tier === 0 ? 0.85 : 2.15)
        } else {
          y = n.y! + n.r + size * 0.95
        }
        ctx.lineWidth = 3.5 / tr.k
        ctx.strokeStyle = colors.bg
        ctx.strokeText(label, n.x!, y)
        ctx.fillStyle = important ? colors.text : colors.dim
        ctx.fillText(label, n.x!, y)
      }
      ctx.restore()
    }

    sim.on('tick', draw)

    const svgSel = select<HTMLCanvasElement, unknown>(canvas)

    const pick = (ev: MouseEvent): SimNode | null => {
      const rect = canvas.getBoundingClientRect()
      const tr = transformRef.current
      const x = (ev.clientX - rect.left - tr.x) / tr.k
      const y = (ev.clientY - rect.top - tr.y) / tr.k
      let best: SimNode | null = null
      let bestD = Infinity
      for (const n of graph.nodes) {
        if (n.x == null) continue
        const d = (n.x! - x) ** 2 + (n.y! - y) ** 2
        const hit = (n.r + 6) ** 2
        if (d < hit && d < bestD) {
          best = n
          bestD = d
        }
      }
      return best
    }

    let downAt: { x: number; y: number } | null = null
    const onDown = (ev: MouseEvent) => {
      downAt = { x: ev.clientX, y: ev.clientY }
    }
    const onClick = (ev: MouseEvent) => {
      // 拖动地图之后不应该顺手选中一个节点
      const moved = downAt ? Math.hypot(ev.clientX - downAt.x, ev.clientY - downAt.y) : 0
      downAt = null
      if (moved > 4) return
      const n = pick(ev)
      setSelected(n ? n.id : null)
    }
    const onMove = (ev: MouseEvent) => {
      const n = pick(ev)
      canvas.style.cursor = n ? 'pointer' : 'grab'
      setHovered((prev) => (prev === (n?.id ?? null) ? prev : n?.id ?? null))
    }
    // 必须在 zoom 之前注册：d3-zoom 的 mousedown 处理器会 stopImmediatePropagation，
    // 之后注册的同元素监听器一律收不到事件。选中改用 click，它不在 d3 的拦截范围内。
    canvas.addEventListener('mousedown', onDown)
    canvas.addEventListener('click', onClick)
    canvas.addEventListener('mousemove', onMove)

    const behavior = zoom<HTMLCanvasElement, unknown>()
      .scaleExtent([0.25, 6])
      .on('zoom', (ev) => {
        transformRef.current = ev.transform
        draw()
      })
    svgSel.call(behavior)
    svgSel.on('dblclick.zoom', null)

    draw()
    return () => {
      sim.stop()
      ro.disconnect()
      svgSel.on('.zoom', null)
      canvas.removeEventListener('mousedown', onDown)
      canvas.removeEventListener('click', onClick)
      canvas.removeEventListener('mousemove', onMove)
    }
  }, [graph])

  // 状态变了要重画（力学已经静止时不会再有 tick）
  useEffect(() => {
    simRef.current?.alpha(0.02).restart()
  }, [selected, hovered, matched, lang])

  const selectedNode = selected && graph ? graph.byId.get(selected)?.node ?? null : null
  const selectedNeighbors = selected && graph ? (graph.neighbors.get(selected) ?? []) : []

  return (
    <div className="graph-wrap" ref={wrapRef}>
      <canvas ref={canvasRef} className="graph-canvas" />

      <div className="graph-search">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t(UI.kgSearch)}
          aria-label={t(UI.kgSearch)}
        />
        {matched && <span className="graph-count">{matched.size}</span>}
      </div>

      {!data && !failed && <div className="graph-status">{t(UI.kgLoading)}</div>}
      {failed && <div className="graph-status">{t(UI.kgFailed)}</div>}

      {selectedNode && (
        <aside className="graph-card">
          <button className="close" onClick={() => setSelected(null)} aria-label={t(UI.close)}>
            ✕
          </button>
          <span className="graph-kind" style={{ color: KIND_COLORS[selectedNode.k] }}>
            {t(KIND_LABELS[selectedNode.k])}
          </span>
          <h3>{kgName(selectedNode, lang)}</h3>
          <NodeFacts node={selectedNode} />
          {selectedNode.k === 'site' && (
            <button className="graph-jump" onClick={() => onOpenSite(selectedNode.i)}>
              {t(UI.kgOpenSite)} →
            </button>
          )}
          {selectedNeighbors.length > 0 && (
            <>
              <div className="graph-rel-title">{t(UI.kgRelated)}</div>
              <ul className="graph-rels">
                {selectedNeighbors.slice(0, 40).map((nb, i) => {
                  const other = graph?.byId.get(nb.other)?.node
                  if (!other) return null
                  return (
                    <li key={i}>
                      <span className="rel">{t((nb.out ? REL_LABELS[nb.rel] : REL_LABELS_IN[nb.rel]) ?? REL_LABELS[nb.rel])}</span>
                      <button onClick={() => setSelected(nb.other)}>{kgName(other, lang)}</button>
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </aside>
      )}
    </div>
  )
}

function NodeFacts({ node }: { node: KgNode }) {
  const { lang } = useLang()
  const facts: string[] = []
  const y = node.y ?? node.b
  if (y) {
    const n = parseInt(y, 10)
    if (!Number.isNaN(n)) {
      facts.push(n < 0
        ? (lang === 'en' ? `${-n} BCE` : lang === 'ja' ? `紀元前 ${-n} 年` : `公元前 ${-n} 年`)
        : (lang === 'en' ? `${n} CE` : `${n} 年`))
    }
  }
  if (node.l) facts.push(`${node.l} km`)
  if (node.h) facts.push(`${node.h} m`)
  if (node.p) facts.push(`${node.p} MW`)
  if (node.P) facts.push(`${(node.P / 10000).toFixed(0)} 万人`)
  if (facts.length === 0) return null
  return <p className="graph-facts">{facts.join(' · ')}</p>
}
