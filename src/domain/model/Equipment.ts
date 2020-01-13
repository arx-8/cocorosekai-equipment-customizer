import { data } from "src/assets/data"
import { Brand } from "src/types/tsUtils"

export type Equipment = {
  id: EquipmentId
  name: string
  rawName: string
  equipCost: EquipCost
  attribute: Attribute
  statuses: {
    hp: HitPointNum
    magicAtk: MagicAttackNum
    magicDef: MagicDefenseNum
    physicalAtk: PhysicalAttackNum
    physicalDef: PhysicalDefenseNum
  }
  imageUrl: string | null
  specialEffects: SpecialEffect[]
  // image:
  /** 強化回数 (+ の数) */
  enhancementsNum: 0 | 1 | 2
}

/** 装備 ID (内部ロジック用) */
export type EquipmentId = Brand<number, "EquipmentId">

/** 属性 */
export type Attribute =
  // 無
  | "void"
  // 火
  | "fire"
  // 水
  | "water"
  // 風
  | "wind"
  // 光
  | "light"
  // 闇
  | "darkness"

/** 装備のためのコスト */
export type EquipCost = Brand<number, "Cost">

/** 物理 攻撃 (数値) */
export type PhysicalAttackNum = Brand<number, "PhysicalAttackNum">

/** 魔法 攻撃 (数値) */
export type MagicAttackNum = Brand<number, "MagicAttackNum">

/** 物理 防御 (数値) */
export type PhysicalDefenseNum = Brand<number, "PhysicalDefenseNum">

/** 魔法 防御 (数値) */
export type MagicDefenseNum = Brand<number, "MagicDefenseNum">

/** 体力 (数値) */
export type HitPointNum = Brand<number, "HitPointNum">

/** % */
// type Rate = Brand<number, "Rate">

/** 特殊効果・ステータスに影響を与えるもの */
// type SpecialEffect_EffectStatuses = {
//   name: string
//   rate: Rate
//   rawText: string
// }
/** 特殊効果・ステータスに影響を与えない特殊効果 */
type SpecialEffect_Other = {
  rawText: string
}
/** 特殊効果 */
// type SpecialEffect = SpecialEffect_EffectStatuses | SpecialEffect_Other
export type SpecialEffect = SpecialEffect_Other

/**
 * @throws 装備が存在しなかった場合
 */
export const findEquipmentStrict = (equipmentId: EquipmentId): Equipment => {
  const found = data.find((e) => e.id === equipmentId)
  if (found == null) {
    throw new Error(`Logic failure. equipmentId: ${equipmentId} not found.`)
  }
  return found
}
