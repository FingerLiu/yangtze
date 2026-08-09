import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { streamItems } from '../data/stream'
import { CAT_COLORS, CAT_LABELS, type StreamCat, type StreamItem } from '../data/streamTypes'
import { locations } from '../data/locations'
import { UI, useLang, resolveHref, formatYear } from '../i18n'
import { useIsMobile } from '../hooks/useIsMobile'

const CAT_ORDER: StreamCat[] = [
  'landform', 'ecology', 'discovery', 'academic', 'ethnic', 'heritage', 'trend', 'visual',
]

const LANG_BADGE: Record<string, string> = { zh: '中', en: 'EN', ja: '日' }

/** 由 id 派生的稳定伪随机数：每次渲染的排布要一致，不能用 Math.random */
function hash01(id: string, salt: number): number {
  let h = 2166136261 ^ salt
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 10000) / 10000
}

export function StreamView({ onOpenSite }: { onOpenSite: (siteId: string) => void }) {
  const { lang, t } = useLang()
  const isMobile = useIsMobile()
  const wrapRef = useRef<HTMLDivElement>(null)
  const [track, setTrack] = useState(1200)
  const [lanesPx, setLanesPx] = useState(600)
  const [active, setActive] = useState<Set<StreamCat>>(new Set())
  const [selected, setSelected] = useState<StreamItem | null>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const measure = () => {
      setTrack(el.clientWidth)
      setLanesPx(el.clientHeight)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const visible = useMemo(
    () => (active.size === 0 ? streamItems : streamItems.filter((i) => active.has(i.cat))),
    [active],
  )

  // 分道：每条弹道内的条目按序错开出发时间，同一道上就不会挤在一起
  const laid = useMemo(() => {
    // 弹道数按可用高度算：道数太少，同一条道上的条目就会追尾
    const laneH = isMobile ? 54 : 62
    const laneCount = Math.max(5, Math.floor((lanesPx - (isMobile ? 76 : 52)) / laneH))
    // 打散：数据本身按权重排过序，直接轮流分道会让相邻弹道内容雷同。
    // 用 id 派生的稳定伪随机排序，看起来随机但每次渲染一致。
    const shuffled = [...visible].sort((a, b) => hash01(a.id, 91) - hash01(b.id, 91))
    const perLane: StreamItem[][] = Array.from({ length: laneCount }, () => [])
    shuffled.forEach((item, i) => perLane[i % laneCount].push(item))

    // 估算条目宽度，用来排出发时间。CJK 一字约一个字宽，西文约 0.55，再加圆点与内边距。
    const widthOf = (item: StreamItem) => {
      const fs = 12.5 + item.weight * 2
      const label = item.title[lang]
      const cjk = (label.match(/[\u3000-\u9fff]/g) ?? []).length
      return cjk * fs + (label.length - cjk) * fs * 0.55 + 52
    }

    return perLane.flatMap((items, lane) => {
      // 同一条弹道统一速度：速度不同的话相对间距会随时间漂移，早晚要撞。
      // 12–18 秒穿屏 —— B 站滚动弹幕约 8 秒，我们的标题更长，稍慢一点才读得完。
      const travel = 12 + hash01(`lane${lane}`, 3) * 6
      const count = items.length
      const maxGap = items.reduce(
        (m, it) => Math.max(m, ((widthOf(it) + 80) / Math.max(1, track)) * travel), 0)
      // 一圈的时长：既要跑得完一趟，又要让同道条目之间留出足够间距。
      // 乘 1.15 是安全余量，多出来的时间条目停在屏幕右侧之外。
      const cycle = Math.max(travel * 1.3, maxGap * count * 1.15)
      // 速度恒定 = track/travel，所以一圈要走的距离按周期等比放大
      const far = track * (cycle / travel)
      const slot = cycle / Math.max(1, count)
      // 出发时间均匀铺满一圈，再在剩余空隙内抖动一下，避免看出节拍
      const jitter = Math.max(0, (slot - maxGap) * 0.45)
      return items.map((item, idx) => ({
        item,
        lane,
        laneCount,
        cycle,
        far,
        delay: -(idx * slot + hash01(item.id, 29) * jitter),
      }))
    })
  }, [visible, isMobile, lanesPx, track, lang])

  const site = selected?.siteId
    ? locations.find((l) => l.id === selected.siteId) ?? null
    : null

  const toggle = (cat: StreamCat) =>
    setActive((prev) => {
      const next = new Set(prev)
      if (next.has(cat)) next.delete(cat)
      else next.add(cat)
      return next
    })

  return (
    <div className="stream-wrap" ref={wrapRef}>
      <div className="stream-filters">
        {CAT_ORDER.map((cat) => (
          <button
            key={cat}
            className={`stream-chip${active.has(cat) ? ' on' : ''}`}
            style={{ '--chip': CAT_COLORS[cat] } as CSSProperties}
            onClick={() => toggle(cat)}
          >
            {t(CAT_LABELS[cat])}
          </button>
        ))}
      </div>

      <div className={`stream-lanes${selected ? ' paused' : ''}`}>
        {laid.map(({ item, lane, laneCount, cycle, delay, far }) => (
          <button
            key={item.id}
            className={`stream-item w${item.weight}`}
            style={{
              top: `${(lane + 0.5) * (100 / laneCount)}%`,
              animationDuration: `${cycle}s`,
              animationDelay: `${delay}s`,
              '--track': `${far}px`,
              '--chip': CAT_COLORS[item.cat],
            } as CSSProperties}
            onClick={() => setSelected(item)}
          >
            <i />
            {t(item.title)}
          </button>
        ))}
      </div>

      {selected && (
        <aside className="stream-card">
          <button className="close" onClick={() => setSelected(null)} aria-label={t(UI.close)}>
            ✕
          </button>
          <span className="stream-cat" style={{ color: CAT_COLORS[selected.cat] }}>
            {t(CAT_LABELS[selected.cat])}
            {selected.year != null && ` · ${formatYear(selected.year, lang)}`}
          </span>
          <h3>{t(selected.title)}</h3>
          <p className="stream-text">{t(selected.text)}</p>
          {site && (
            <button className="stream-jump" onClick={() => onOpenSite(site.id)}>
              {t(site.name)} →
            </button>
          )}
          {selected.links && selected.links.length > 0 && (
            <div className="ref-links">
              {selected.links.map((link, i) => {
                const target = resolveHref(link.href, lang)
                if (!target) return null
                return (
                  <a key={i} href={target.url} hrefLang={target.lang} target="_blank" rel="noopener noreferrer">
                    <span>{t(link.label)}</span>
                    {target.lang !== lang && <span className="lang-badge">{LANG_BADGE[target.lang]}</span>}
                    <span aria-hidden>↗</span>
                  </a>
                )
              })}
            </div>
          )}
        </aside>
      )}
    </div>
  )
}
