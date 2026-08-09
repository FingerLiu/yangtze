import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { RiverMap } from './components/RiverMap'
import { DetailPanel } from './components/DetailPanel'
import { TimelineBar } from './components/TimelineBar'
import { MobileJourney } from './components/MobileJourney'
import { MobileTimeline } from './components/MobileTimeline'
import { useIsMobile } from './hooks/useIsMobile'
import { locations } from './data/locations'
import { events } from './data/events'
import { eventIntensity, posToYear, yearToPos } from './data/timeScale'
import { UI, useLang, type Lang } from './i18n'
import type { EventCategory, L10n, RiverEvent } from './data/types'

export type ViewMode = 'explore' | 'timeline' | 'graph'

// 图谱视图连同 d3-force 一起单独打包：不打开这个 tab 就不会下载
const GraphView = lazy(() =>
  import('./components/GraphView').then((m) => ({ default: m.GraphView })),
)

export const CATEGORY_COLORS: Record<EventCategory, string> = {
  治水史: 'var(--cat-water)',
  工程史: 'var(--cat-eng)',
  文明史: 'var(--cat-civ)',
  战争史: 'var(--cat-war)',
}

export const CATEGORY_LABELS: Record<EventCategory, L10n> = {
  治水史: UI.catWater,
  工程史: UI.catEng,
  文明史: UI.catCiv,
  战争史: UI.catWar,
}

const LANGS: Array<{ code: Lang; label: string }> = [
  { code: 'zh', label: '中' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日' },
]

export interface ActiveEvent {
  event: RiverEvent
  intensity: number
}

export default function App() {
  const [mode, setMode] = useState<ViewMode>('explore')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [focusEventId, setFocusEventId] = useState<string | null>(null)
  // 手机端默认也用真地图；卡片长页保留为可切换的「列表」模式
  const [listMode, setListMode] = useState(false)
  const [year, setYear] = useState(-256)
  const [playing, setPlaying] = useState(false)
  const rafRef = useRef(0)
  const isMobile = useIsMobile()
  const { lang, setLang, t } = useLang()

  const selected = useMemo(
    () => locations.find((l) => l.id === selectedId) ?? null,
    [selectedId],
  )

  const activeEvents: ActiveEvent[] = useMemo(() => {
    if (mode !== 'timeline') return []
    return events
      .map((event) => ({ event, intensity: eventIntensity(year, event.year, event.endYear) }))
      .filter((a) => a.intensity > 0)
  }, [mode, year])

  // 播放：以时间轴位置匀速前进（非线性比例尺下自动"远古快、近代慢"）
  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    const step = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      setYear((y) => {
        const pos = yearToPos(y) + dt * 0.035
        if (pos >= 1) {
          setPlaying(false)
          return posToYear(1)
        }
        return posToYear(pos)
      })
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [playing])

  /** 选中地点；带 eventId 时，抽屉打开后直接展开那条事件 */
  const selectLocation = useCallback((id: string | null, eventId?: string) => {
    setSelectedId(id)
    setFocusEventId(eventId ?? null)
  }, [])

  const jumpToEvent = useCallback(
    (event: RiverEvent) => {
      setPlaying(false)
      setMode('timeline')
      setYear(event.year)
      setSelectedId(null)
      setFocusEventId(null)
      if (isMobile) {
        setTimeout(() => {
          document.getElementById(`ev-${event.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 120)
      }
    },
    [isMobile],
  )

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <h1>{t(UI.brandTitle)}</h1>
          <span>{t(UI.brandSub)}</span>
        </div>
        <nav className="switcher" aria-label="view switcher">
          <button
            className={mode === 'explore' ? 'active' : ''}
            onClick={() => {
              setMode('explore')
              setPlaying(false)
            }}
          >
            {t(UI.viewMap)}
          </button>
          <button className={mode === 'timeline' ? 'active' : ''} onClick={() => setMode('timeline')}>
            {t(UI.viewTimeline)}
          </button>
          <button
            className={mode === 'graph' ? 'active' : ''}
            onClick={() => {
              setMode('graph')
              setPlaying(false)
            }}
          >
            {t(UI.viewGraph)}
          </button>
        </nav>
        {mode === 'timeline' ? (
          <div className="legend">
            {(Object.keys(CATEGORY_COLORS) as EventCategory[]).map((c) => (
              <span key={c}>
                <i style={{ background: CATEGORY_COLORS[c] }} />
                {t(CATEGORY_LABELS[c])}
              </span>
            ))}
          </div>
        ) : (
          <div className="legend">
            <span>
              <i style={{ background: 'var(--nature)' }} />
              {t(UI.nature)}
            </span>
            <span>
              <i style={{ background: 'var(--history)' }} />
              {t(UI.history)}
            </span>
            <span>
              <i style={{ background: 'var(--culture)' }} />
              {t(UI.culture)}
            </span>
          </div>
        )}
        <nav className="lang-switch" aria-label="language">
          {LANGS.map(({ code, label }) => (
            <button key={code} className={lang === code ? 'active' : ''} onClick={() => setLang(code)}>
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main className="canvas-wrap">
        {mode === 'graph' ? (
          <Suspense fallback={<div className="graph-status">{t(UI.kgLoading)}</div>}>
            <GraphView onOpenSite={(id) => selectLocation(id)} />
            <div className="hint">{t(UI.kgHint)}</div>
          </Suspense>
        ) : isMobile && listMode ? (
          mode === 'explore' ? (
            <MobileJourney onSelect={selectLocation} />
          ) : (
            <MobileTimeline onSelectLocation={selectLocation} />
          )
        ) : (
          <>
            <RiverMap mode={mode} selectedId={selectedId} onSelect={selectLocation} activeEvents={activeEvents} />
            <div className="hint">{mode === 'explore' ? t(UI.hintExplore) : t(UI.hintTimeline)}</div>
          </>
        )}
        {isMobile && mode !== 'graph' && (
          <button className="mobile-view-toggle" onClick={() => setListMode((v) => !v)}>
            {listMode ? t(UI.showMap) : t(UI.showList)}
          </button>
        )}
      </main>

      {mode === 'timeline' && !(isMobile && listMode) && (
        <TimelineBar
          year={year}
          onYearChange={(y) => {
            setPlaying(false)
            setYear(y)
          }}
          playing={playing}
          onTogglePlay={() => setPlaying((p) => !p)}
          activeEvents={activeEvents}
        />
      )}

      <DetailPanel
        location={selected}
        focusEventId={focusEventId}
        onClose={() => selectLocation(null)}
        onJumpToEvent={jumpToEvent}
      />
    </div>
  )
}
