import { ItemsTableRow } from "src/components/organisms/ItemsTable/Table"
import {
  Equipment,
  EquipmentIdToStockNumPair,
} from "src/domain/model/Equipment"

export const convertToItemsTable = (
  data: readonly Equipment[],
  stockNums: EquipmentIdToStockNumPair,
  currentEquippedNums: EquipmentIdToStockNumPair,
  isCurrentRowCheckStock: boolean
): ItemsTableRow[] => {
  return data.map((d) => {
    // ユーザー入力の所持数
    const stockNum = stockNums[d.id] || 0

    // 所持チェックありの場合、数が超えてないかチェック
    let canEquip = true
    if (isCurrentRowCheckStock) {
      const currNum = currentEquippedNums[d.id] || 0
      // 装備できる = 「編成の装備済み数」より「ユーザー所持数」が多い
      canEquip = currNum < stockNum
    }

    return {
      ...d,
      specialEffectsText: d.specialEffects.map((s) => s.rawText).join(","),
      stockNum,
      canEquip,
    }
  })
}
