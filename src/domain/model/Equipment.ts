import { dataSrc } from "src/data/datastore"
import { Brand, CastAny } from "src/types/tsUtils"

export type Equipment = {
  attribute: Attribute
  // image:
  /** 強化回数 (+ の数) */
  enhancementsNum: 0 | 1 | 2
  equipCost: EquipCost
  id: EquipmentId
  imageUrl: string | null
  name: string
  rawName: string
  specialEffects: SpecialEffect[]
  statuses: {
    hp: HitPointNum
    magicAtk: MagicAttackNum
    magicDef: MagicDefenseNum
    physicalAtk: PhysicalAttackNum
    physicalDef: PhysicalDefenseNum
  }
}

/** 装備 ID (内部ロジック用) */
export type EquipmentId = Brand<number, "EquipmentId">

/**
 * key is `EquipmentId`
 */
export type EquipmentIdToStockNumPair = Record<number, number>

export const countEquipmentIdToStockNumPairReducer = (
  acc: EquipmentIdToStockNumPair,
  curr: EquipmentId
): EquipmentIdToStockNumPair => {
  const maybeNum: undefined | number = acc[curr] as CastAny
  acc[curr] = maybeNum == null ? 1 : maybeNum + 1
  return acc
}

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

export const AttributeValues: Readonly<Record<Attribute, Attribute>> = {
  void: "void",
  fire: "fire",
  water: "water",
  wind: "wind",
  light: "light",
  darkness: "darkness",
}

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
  const found = dataSrc.find((e) => e.id === equipmentId)
  if (found == null) {
    throw new Error(`Logic failure. equipmentId: ${equipmentId} not found.`)
  }
  return found
}
