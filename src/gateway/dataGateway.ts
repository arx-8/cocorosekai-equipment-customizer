import { ItemsTableRow } from "src/components/organisms/ItemsTable/Table"
import { Equipment } from "src/domain/model/Equipment"

export const convertToItemsTable = (data: Equipment[]): ItemsTableRow[] => {
  return data.map((d) => {
    return {
      ...d,
      specialEffectsText: d.specialEffects.map((s) => s.rawText).join(","),
    }
  })
}
