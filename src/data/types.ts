export type FacetKey = 'nature' | 'history' | 'culture'

export type Lang = 'zh' | 'en' | 'ja'

/** 三语文案 */
export interface L10n {
  zh: string
  en: string
  ja: string
}

/**
 * 只收公有领域与允许再利用的 CC 许可。
 * 刻意不包含 NC（禁商用）与 ND（禁改动，而我们要裁剪成 3:2），误填会直接编译失败。
 */
export type ImageLicense =
  | 'Public domain'
  | 'CC0'
  | 'CC BY 2.0'
  | 'CC BY 3.0'
  | 'CC BY 4.0'
  | 'CC BY-SA 2.0'
  | 'CC BY-SA 3.0'
  | 'CC BY-SA 4.0'

/** 署名信息：作者原文照抄，不翻译 */
export interface ImageCredit {
  author: string
  license: ImageLicense
  /** Commons 文件页（.../wiki/File:xxx），不要用 upload.wikimedia.org 直链 */
  sourceUrl: string
  licenseUrl?: string
  /** 是否做过裁剪/缩放。CC BY-SA 要求标示改动 */
  modified?: boolean
}

export interface Photo {
  /** 由 src/data/photos.ts 静态 import 得到，构建期即校验文件存在 */
  src: string
  /** 原始像素尺寸，用于预留版位避免布局跳动 */
  width: number
  height: number
  /** 替代文本，三语必填 */
  alt: L10n
  caption?: L10n
  credit: ImageCredit
}

/** 分语言的外链目标。维基条目覆盖不均，三个都可选 */
export interface LocalizedHref {
  zh?: string
  en?: string
  ja?: string
}

export interface RefLink {
  label: L10n
  href: LocalizedHref
  /** 来源站点名，如「维基百科」 */
  source?: L10n
}

export interface Facet {
  /** 看点：这一维度下值得看/值得讲的内容 */
  highlights: L10n[]
  /** 意义：为什么重要 */
  meaning?: L10n
  /** 正文，按自然段分条 */
  story?: L10n[]
  /** 该维度的配图，插在正文段落之间 */
  photo?: Photo
}

export interface RiverLocation {
  id: string
  name: L10n
  /** 一句话定位 */
  subtitle: L10n
  /** 真实经纬度 */
  lon: number
  lat: number
  /** 标签相对节点的方位 */
  labelSide: 'top' | 'bottom'
  /** 标签水平偏移（屏幕像素），用于避开河道 */
  labelDx?: number
  /** 不在干流上的节点（如三星堆、都江堰），画一条细连接线到水系锚点 */
  anchor?: { lon: number; lat: number }
  facets: Partial<Record<FacetKey, Facet>>
  /** 首图：与标签页无关，固定显示在正文顶部 */
  hero?: Photo
  /** 延伸阅读 */
  links?: RefLink[]
}

export type EventCategory = '治水史' | '工程史' | '文明史' | '战争史'

export interface RiverEvent {
  id: string
  /** 公元纪年，公元前为负数 */
  year: number
  /** 时代跨度事件的结束年（可选） */
  endYear?: number
  title: L10n
  locationId: string
  category: EventCategory
  /** 一句话导语 */
  description: L10n
  /** 正文，按自然段分条 */
  story?: L10n[]
  photo?: Photo
  links?: RefLink[]
}

export interface Era {
  name: L10n
  start: number
  end: number
}
