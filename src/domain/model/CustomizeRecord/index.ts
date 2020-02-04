import {
  Attribute,
  EquipCost,
  Equipment,
  EquipmentId,
  HitPointNum,
  MagicAttackNum,
  MagicDefenseNum,
  PhysicalAttackNum,
  PhysicalDefenseNum,
  SpecialEffect,
} from "src/domain/model/Equipment"
import { toUniq } from "src/utils/arrayUtils"

/**
 * 画面上の選択値は「未選択」の位置もあるため、 undefined able
 */
export type SelectedEquipmentIds = (EquipmentId | undefined)[]

export type CustomizeRecord = {
  customizeMemo: string
  equippedIds: SelectedEquipmentIds
  mixedAttributes: Attribute[]
  mixedSpecialEffects: SpecialEffect[]
  totalEquipCost: EquipCost
  totalSpecValue: number
  totalStatuses: {
    hp: HitPointNum
    magicAtk: MagicAttackNum
    magicDef: MagicDefenseNum
    physicalAtk: PhysicalAttackNum
    physicalDef: PhysicalDefenseNum
  }
}

/**
 * 1 編成あたりに装備できる数は決まっているため
 */
export type CellColIndex = 0 | 1 | 2 | 3 | 4 | 5
export const MAX_EQUIPMENTS_NUM = 6

export type CellIndex = {
  colIndex: CellColIndex
  rowIndex: number
}

export const calcCustomizeRecord = (
  equipments: Equipment[]
): Omit<CustomizeRecord, "equippedIds" | "customizeMemo"> => {
  return equipments.reduce(
    (acc, curr) => {
      return {
        // TODO totalSpecValue の計算ロジックの実装
        mixedAttributes: toUniq([...acc.mixedAttributes, curr.attribute]),
        mixedSpecialEffects: toUniq([
          ...acc.mixedSpecialEffects.map((e) => e.rawText),
          ...curr.specialEffects.map((e) => e.rawText),
        ]).map((rawText) => {
          return { rawText }
        }),
        totalEquipCost: (acc.totalEquipCost + curr.equipCost) as EquipCost,
        totalSpecValue: 0,
        totalStatuses: {
          hp: (acc.totalStatuses.hp + curr.statuses.hp) as HitPointNum,
          magicAtk: (acc.totalStatuses.magicAtk +
            curr.statuses.magicAtk) as MagicAttackNum,
          magicDef: (acc.totalStatuses.magicDef +
            curr.statuses.magicDef) as MagicDefenseNum,
          physicalAtk: (acc.totalStatuses.physicalAtk +
            curr.statuses.physicalAtk) as PhysicalAttackNum,
          physicalDef: (acc.totalStatuses.physicalDef +
            curr.statuses.physicalDef) as PhysicalDefenseNum,
        },
      }
    },
    {
      mixedAttributes: [] as Attribute[],
      mixedSpecialEffects: [] as SpecialEffect[],
      totalEquipCost: 0 as EquipCost,
      totalSpecValue: 0,
      totalStatuses: {
        hp: 0 as HitPointNum,
        magicAtk: 0 as MagicAttackNum,
        magicDef: 0 as MagicDefenseNum,
        physicalAtk: 0 as PhysicalAttackNum,
        physicalDef: 0 as PhysicalDefenseNum,
      },
    }
  )
}
