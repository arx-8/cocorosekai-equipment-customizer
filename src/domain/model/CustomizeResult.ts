import {
  Attribute,
  EquipCost,
  EquipmentId,
  HitPointNum,
  MagicAttackNum,
  MagicDefenseNum,
  PhysicalAttackNum,
  PhysicalDefenseNum,
  SpecialEffect,
} from "src/domain/model/Equipment"
import { Brand } from "src/types/tsUtils"

export type CustomizeResult = {
  rowNo: CustomizeResultRowNo
  equippedIds: EquipmentId[]
  totalSpecValue: number
  totalEquipCost: EquipCost
  mixedAttributes: Attribute[]
  totalStatuses: {
    hp: HitPointNum
    magicAtk: MagicAttackNum
    magicDef: MagicDefenseNum
    physicalAtk: PhysicalAttackNum
    physicalDef: PhysicalDefenseNum
  }
  mixedSpecialEffects: SpecialEffect[]
}

type CustomizeResultRowNo = Brand<number, "CustomizeResultRowNo">
