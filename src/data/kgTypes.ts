import type { Lang } from './types'

/** 知识图谱节点类型。与 tools/kg/build-kg.py 产出的 kind 一一对应。 */
export type KgKind =
  | 'site'      // 站内 18 个沿江地点，图谱的骨架
  | 'event'     // 站内 18 个时间轴事件
  | 'era'       // 朝代分段
  | 'river'     // 支流
  | 'lake'
  | 'city'
  | 'bridge'
  | 'dam'
  | 'battle'
  | 'heritage'  // 世界遗产
  | 'person'
  | 'work'      // 诗文
  | 'place'     // 闭包补回的普通地点

export type KgRelation =
  | 'downstream'   // 干流顺序，site → site
  | 'happenedAt'   // 事件 → 地点
  | 'nearSite'     // 任意有坐标的节点 → 最近的站内地点
  | 'duringEra'    // 有年份的节点 → 朝代
  | 'flowsInto'    // 支流 → 汇入的水体
  | 'builtOn'      // 大坝 → 所在河流
  | 'authorOf'     // 人 → 作品
  | 'setAt'        // 作品 → 诗题里点到的地点
  | 'birthPlace'
  | 'deathPlace'
  | 'workedAt'
  | 'succeeds'     // 治水工程谱系，我们的编辑主张

/** 产物用短键，为的是压体积；n 是 [zh, en, ja] */
export interface KgNode {
  i: string
  k: KgKind
  n: [string, string, string]
  /** 经纬度 */
  c?: [number, number]
  /** 年份（公元前为负） */
  y?: string
  b?: string
  d?: string
  /** 长度 km / 装机 MW / 坝高 m / 人口 */
  l?: number
  p?: number
  h?: number
  P?: number
}

export type KgEdge = [string, KgRelation, string]

export interface KgData {
  nodes: KgNode[]
  edges: KgEdge[]
}

const LANG_INDEX: Record<Lang, 0 | 1 | 2> = { zh: 0, en: 1, ja: 2 }

/** 取节点在当前语言下的名字；缺失时回退到中文 */
export function kgName(node: KgNode, lang: Lang): string {
  return node.n[LANG_INDEX[lang]] || node.n[0]
}
