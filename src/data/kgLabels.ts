import { l } from '../i18n'
import type { L10n } from './types'
import type { KgKind, KgRelation } from './kgTypes'

export const KIND_LABELS: Record<KgKind, L10n> = {
  site: l('沿江地点', 'River stop', '川沿いの地点'),
  event: l('事件', 'Event', '出来事'),
  era: l('朝代', 'Era', '時代'),
  river: l('支流', 'Tributary', '支流'),
  lake: l('湖泊', 'Lake', '湖'),
  city: l('城市', 'City', '都市'),
  bridge: l('桥梁', 'Bridge', '橋'),
  dam: l('水利枢纽', 'Dam', 'ダム'),
  battle: l('战役', 'Battle', '戦役'),
  heritage: l('世界遗产', 'World Heritage', '世界遺産'),
  person: l('人物', 'Person', '人物'),
  work: l('诗文', 'Work', '詩文'),
  place: l('地点', 'Place', '地名'),
}

/** 节点配色：沿用站点既有的 CSS 变量，图谱与地图是同一套颜色语言 */
export const KIND_COLORS: Record<KgKind, string> = {
  site: 'var(--node-active)',
  event: 'var(--accent)',
  era: 'var(--map-note)',
  river: 'var(--tributary)',
  lake: 'var(--lake-edge)',
  city: 'var(--cat-civ)',
  bridge: 'var(--cat-eng)',
  dam: 'var(--cat-eng)',
  battle: 'var(--cat-war)',
  heritage: 'var(--cat-civ)',
  person: 'var(--culture)',
  work: 'var(--history)',
  place: 'var(--map-note)',
}

export const REL_LABELS: Record<KgRelation, L10n> = {
  downstream: l('下游是', 'flows down to', '下流は'),
  happenedAt: l('发生在', 'happened at', '起きた場所'),
  nearSite: l('靠近', 'near', '近い'),
  duringEra: l('所属年代', 'during', '時代'),
  flowsInto: l('汇入', 'flows into', '注ぐ先'),
  builtOn: l('建于', 'built on', '建設地'),
  authorOf: l('作者', 'wrote', '作者'),
  setAt: l('写的是', 'set at', '詠まれた地'),
  birthPlace: l('出生于', 'born at', '生誕地'),
  deathPlace: l('卒于', 'died at', '没地'),
  workedAt: l('任职于', 'worked at', '在任地'),
  succeeds: l('后继工程', 'succeeded by', '後継'),
}

/**
 * 反向关系的说法。边本身有方向，但节点卡片两头都要列，
 * 不区分方向会出现"重庆 下游是 三峡"同时"三峡 下游是 重庆"这种自相矛盾。
 */
export const REL_LABELS_IN: Partial<Record<KgRelation, L10n>> = {
  downstream: l('上游是', 'flows down from', '上流は'),
  succeeds: l('前身工程', 'succeeds', '前身'),
  authorOf: l('作者', 'written by', '作者'),
  happenedAt: l('这里发生', 'saw', 'ここで起きた'),
  setAt: l('被写入', 'written about in', '詠まれた'),
  flowsInto: l('支流', 'tributary', '支流'),
  nearSite: l('附近有', 'nearby', '近くに'),
  builtOn: l('其上有', 'carries', 'そこにある'),
  birthPlace: l('出生地', 'birthplace of', '生誕の地'),
  deathPlace: l('卒于此', 'death place of', '没した地'),
  workedAt: l('任职者', 'workplace of', '在任した'),
  duringEra: l('此时期', 'includes', 'この時代'),
}
