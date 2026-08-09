import { l } from '../i18n'
import type { L10n, RefLink } from './types'

/** 弹幕流的内容分类。刻意不只有历史 —— 地貌、生态、考古、学术、民族、非遗、当代话题、影像。 */
export type StreamCat =
  | 'landform'   // 地貌
  | 'ecology'    // 生态与自然发现
  | 'discovery'  // 考古新发现
  | 'academic'   // 学术研究
  | 'ethnic'     // 民族与人文
  | 'heritage'   // 非物质文化遗产
  | 'trend'      // 近年受关注的话题
  | 'visual'     // 影像与摄影

export interface StreamItem {
  id: string
  cat: StreamCat
  title: L10n
  /** 正文，50–90 字 */
  text: L10n
  /** 1–5，决定字号与流动速度 */
  weight: number
  year?: number
  /** 关联到 18 个沿江地点之一 */
  siteId?: string
  links?: RefLink[]
}

export const CAT_LABELS: Record<StreamCat, L10n> = {
  landform: l('地貌', 'Landforms', '地形'),
  ecology: l('生态', 'Ecology', '生態'),
  discovery: l('新发现', 'Discoveries', '新発見'),
  academic: l('学术', 'Research', '研究'),
  ethnic: l('民族', 'Peoples', '民族'),
  heritage: l('非遗', 'Heritage', '無形遺産'),
  trend: l('当代', 'Today', '現代'),
  visual: l('影像', 'On Screen', '映像'),
}

export const CAT_COLORS: Record<StreamCat, string> = {
  landform: 'var(--nature)',
  ecology: 'var(--cat-water)',
  discovery: 'var(--cat-civ)',
  academic: 'var(--cat-eng)',
  ethnic: 'var(--culture)',
  heritage: 'var(--history)',
  trend: 'var(--node-active)',
  visual: 'var(--lake-edge)',
}
