import { ItemsTableRow } from "src/components/organisms/ItemsTable/Table"
import { Equipment } from "src/domain/model/Equipment"

export const convertToItemsTable = (
  data: readonly Equipment[],
  stockNums: Record<string, number>
): ItemsTableRow[] => {
  return data.map((d) => {
    return {
      ...d,
      specialEffectsText: d.specialEffects.map((s) => s.rawText).join(","),
      stockNum: stockNums[d.id] || 0,
    }
  })
}
