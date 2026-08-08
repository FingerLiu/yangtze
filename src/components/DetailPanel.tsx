import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { events } from '../data/events'
import { UI, useLang, formatYear, resolveHref } from '../i18n'
import type { FacetKey, L10n, Photo, RefLink, RiverEvent, RiverLocation } from '../data/types'

const FACET_META: Record<FacetKey, { label: L10n; color: string; cls: string }> = {
  nature: { label: UI.nature, color: 'var(--nature)', cls: 't-nature' },
  history: { label: UI.history, color: 'var(--history)', cls: 't-history' },
  culture: { label: UI.culture, color: 'var(--culture)', cls: 't-culture' },
}

const FACET_ORDER: FacetKey[] = ['nature', 'history', 'culture']

const LANG_BADGE: Record<string, string> = { zh: '中', en: 'EN', ja: '日' }

function PhotoFigure({ photo, variant }: { photo: Photo; variant?: 'hero' | 'inline' }) {
  const { t } = useLang()
  return (
    <figure className={variant === 'hero' ? 'photo-figure hero-figure' : 'photo-figure'}>
      <img
        src={photo.src}
        width={photo.width}
        height={photo.height}
        alt={t(photo.alt)}
        // 首图在抽屉打开的瞬间就在可视区内，lazy 只会让人先看到一块空白；
        // 正文与事件里的配图在下方，仍然懒加载
        loading={variant === 'hero' ? 'eager' : 'lazy'}
        decoding="async"
      />
      {photo.caption && <figcaption className="photo-caption">{t(photo.caption)}</figcaption>}
      <p className="photo-credit">
        {t(UI.photoBy)}:{' '}
        <a href={photo.credit.sourceUrl} target="_blank" rel="noopener noreferrer">
          {photo.credit.author}
        </a>
        {' · '}
        {photo.credit.licenseUrl ? (
          <a href={photo.credit.licenseUrl} target="_blank" rel="noopener noreferrer">
            {photo.credit.license}
          </a>
        ) : (
          photo.credit.license
        )}
        {photo.credit.modified ? ` ${t(UI.photoEdited)}` : ''}
      </p>
    </figure>
  )
}

function Prose({ paragraphs, lede }: { paragraphs: L10n[]; lede?: boolean }) {
  const { t } = useLang()
  return (
    <div className="prose">
      {paragraphs.map((p, i) => (
        <p key={i} className={lede && i === 0 ? 'lede' : undefined}>
          {t(p)}
        </p>
      ))}
    </div>
  )
}

function RefLinks({ links, titled }: { links: RefLink[]; titled?: boolean }) {
  const { lang, t } = useLang()
  const resolved = links
    .map((link) => ({ link, target: resolveHref(link.href, lang) }))
    .filter((x): x is { link: RefLink; target: { url: string; lang: typeof lang } } => x.target !== null)
  if (resolved.length === 0) return null
  return (
    <div className="ref-links">
      {titled && <div className="facet-title">{t(UI.furtherRead)}</div>}
      {resolved.map(({ link, target }, i) => (
        <a key={i} href={target.url} hrefLang={target.lang} target="_blank" rel="noopener noreferrer">
          <span>{t(link.label)}</span>
          {target.lang !== lang && <span className="lang-badge">{LANG_BADGE[target.lang]}</span>}
          {link.source && <span className="src">{t(link.source)}</span>}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  )
}

interface Props {
  location: RiverLocation | null
  /** 打开抽屉时直接展开并滚动到这条事件 */
  focusEventId?: string | null
  onClose: () => void
  onJumpToEvent: (event: RiverEvent) => void
}

export function DetailPanel({ location, focusEventId, onClose, onJumpToEvent }: Props) {
  const { lang, t } = useLang()
  const facetKeys = useMemo(
    () => (location ? FACET_ORDER.filter((k) => location.facets[k]) : []),
    [location],
  )
  const [tab, setTab] = useState<FacetKey>('nature')
  const [openEventId, setOpenEventId] = useState<string | null>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const evRefs = useRef(new Map<string, HTMLDivElement>())

  useEffect(() => {
    if (facetKeys.length > 0 && !facetKeys.includes(tab)) setTab(facetKeys[0])
  }, [facetKeys, tab])

  // 换地点或换聚焦事件时同步展开态
  useEffect(() => {
    setOpenEventId(focusEventId ?? null)
  }, [location?.id, focusEventId])

  // 滚动到展开的事件。这里不用 el.scrollIntoView()：抽屉是 position:fixed 且此刻正在
  // translateX 过渡中，scrollIntoView 会连带去滚祖先容器。
  useEffect(() => {
    if (!openEventId || !bodyRef.current) return
    const el = evRefs.current.get(openEventId)
    if (!el) return
    const id = requestAnimationFrame(() => {
      bodyRef.current?.scrollTo({ top: el.offsetTop - 12, behavior: 'smooth' })
    })
    return () => cancelAnimationFrame(id)
  }, [openEventId, location?.id])

  const relatedEvents = useMemo(
    () => (location ? events.filter((e) => e.locationId === location.id) : []),
    [location],
  )

  const open = location !== null
  const facet = location?.facets[tab]
  const meta = FACET_META[tab]

  return (
    <>
      <div className={`drawer-backdrop${open ? ' open' : ''}`} onClick={onClose} />
      <aside className={`drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        {location && (
          <>
            <div className="drawer-head">
              <button className="close" onClick={onClose} aria-label={t(UI.close)}>
                ✕
              </button>
              <h2>{t(location.name)}</h2>
              <p>{t(location.subtitle)}</p>
            </div>
            <div className="tabs">
              {facetKeys.map((k) => (
                <button
                  key={k}
                  className={`${FACET_META[k].cls}${tab === k ? ' active' : ''}`}
                  onClick={() => setTab(k)}
                >
                  {t(FACET_META[k].label)}
                </button>
              ))}
            </div>
            <div className="drawer-body" ref={bodyRef} style={{ '--facet-color': meta.color } as CSSProperties}>
              {/* 首图放在可滚动正文里而非固定头部：430px 宽的全高抽屉里，
                  固定首图会永久占掉约四成竖向空间 */}
              {location.hero && <PhotoFigure photo={location.hero} variant="hero" />}
              {facet && (
                <>
                  <div className="facet-title">{t(UI.highlights)}</div>
                  <ul className="facet-list">
                    {facet.highlights.map((h, i) => (
                      <li key={i}>{t(h)}</li>
                    ))}
                  </ul>
                  {facet.meaning && (
                    <div className="meaning">
                      <em>{t(UI.meaning)}</em>
                      {t(facet.meaning)}
                    </div>
                  )}
                  {facet.story && facet.story.length > 0 && (
                    <>
                      <div className="facet-title">{t(UI.story)}</div>
                      <div className="prose">
                        <p className="lede">{t(facet.story[0])}</p>
                        {facet.photo && <PhotoFigure photo={facet.photo} variant="inline" />}
                        {facet.story.slice(1).map((p, i) => (
                          <p key={i}>{t(p)}</p>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
              {location.links && location.links.length > 0 && <RefLinks links={location.links} titled />}
              {relatedEvents.length > 0 && (
                <div className="loc-events">
                  <h3>{t(UI.eventsHere)}</h3>
                  {relatedEvents.map((e) => {
                    const expanded = openEventId === e.id
                    return (
                      <div
                        key={e.id}
                        className={`ev-item${expanded ? ' open' : ''}`}
                        ref={(n) => {
                          if (n) evRefs.current.set(e.id, n)
                          else evRefs.current.delete(e.id)
                        }}
                      >
                        <button
                          className="ev-row"
                          aria-expanded={expanded}
                          aria-controls={`evd-${e.id}`}
                          onClick={() => setOpenEventId(expanded ? null : e.id)}
                        >
                          <span className="yr">{formatYear(e.year, lang)}</span>
                          <span className="ttl">{t(e.title)}</span>
                          <span className="chev" aria-hidden>
                            ›
                          </span>
                        </button>
                        {expanded && (
                          <div className="ev-detail" id={`evd-${e.id}`} role="region">
                            <p className="ev-desc">{t(e.description)}</p>
                            {e.photo && <PhotoFigure photo={e.photo} variant="inline" />}
                            {e.story && e.story.length > 0 && <Prose paragraphs={e.story} />}
                            {e.links && e.links.length > 0 && <RefLinks links={e.links} />}
                            <button className="ev-jump" onClick={() => onJumpToEvent(e)}>
                              {t(UI.viewOnTimeline)} →
                            </button>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </aside>
    </>
  )
}
