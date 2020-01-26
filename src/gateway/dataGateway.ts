import { ItemsTableRow } from "src/components/organisms/ItemsTable/Table"
import {
  Equipment,
  EquipmentIdToStockNumPair,
} from "src/domain/model/Equipment"

export const convertToItemsTable = (
  data: readonly Equipment[],
  stockNums: EquipmentIdToStockNumPair
): ItemsTableRow[] => {
  return data.map((d) => {
    return {
      ...d,
      specialEffectsText: d.specialEffects.map((s) => s.rawText).join(","),
      stockNum: stockNums[d.id] || 0,
    }
  })
}
