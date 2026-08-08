// 由 scratchpad/gen_stories.py 从各条目的调研产物生成 —— 长文与延伸阅读。
// 与 locations.ts / events.ts 按 id 关联，在那两个文件末尾合并进 Facet.story 等字段。
import type { FacetKey, L10n, RefLink } from './types'

export interface LocationStory {
  facets: Partial<Record<FacetKey, L10n[]>>
  links?: RefLink[]
}

export const LOCATION_STORIES: Record<string, LocationStory> = {
}

export const EVENT_STORIES: Record<string, { story: L10n[]; links?: RefLink[] }> = {
}
