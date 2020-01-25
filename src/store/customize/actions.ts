import { APP_NAME } from "src/constants/env"
import { CellIndex } from "src/domain/model/CustomizeRecord"
import { EquipmentId } from "src/domain/model/Equipment"
import actionCreatorFactory from "typescript-fsa"

export const ActionTypes = {
  addRow: "customize/addRow",
  copyRow: "customize/copyRow",
  deleteRow: "customize/deleteRow",
  toggleProtectRow: "customize/toggleProtectRow",
  toggleCheckStock: "customize/toggleCheckStock",
  sortAllCustomizedEquipments: "customize/sortAllCustomizedEquipments",
  selectEquipmentCell: "customize/selectEquipmentCell",
  selectEquipment: "customize/selectEquipment",
  removeEquipment: "customize/removeEquipment",
  toggleIsMinimizedEquipmentDetailModal:
    "customize/toggleIsMinimizedEquipmentDetailModal",
  changeCustomizeMemo: "customize/changeCustomizeMemo",
} as const

const create = actionCreatorFactory(APP_NAME)

export const addRow = create(ActionTypes.addRow)

/**
 * @param payload row index
 */
export const copyRow = create<number>(ActionTypes.copyRow)

/**
 * @param payload row index
 */
export const deleteRow = create<number>(ActionTypes.deleteRow)

/**
 * @param payload row index
 */
export const toggleProtectRow = create<number>(ActionTypes.toggleProtectRow)

/**
 * @param payload row index
 */
export const toggleCheckStock = create<number>(ActionTypes.toggleCheckStock)

export const sortAllCustomizedEquipments = create(
  ActionTypes.sortAllCustomizedEquipments
)

export const selectEquipmentCell = create<CellIndex>(
  ActionTypes.selectEquipmentCell
)

export const selectEquipment = create<EquipmentId>(ActionTypes.selectEquipment)

export const removeEquipment = create<CellIndex>(ActionTypes.removeEquipment)

export const toggleIsMinimizedEquipmentDetailModal = create(
  ActionTypes.toggleIsMinimizedEquipmentDetailModal
)

export const changeCustomizeMemo = create<{
  customizeMemo: string
  rowIndex: CellIndex["rowIndex"]
}>(ActionTypes.changeCustomizeMemo)
