import { CellIndex } from "src/domain/model/CustomizeRecord"
import { EquipmentId } from "src/domain/model/Equipment"
import { customizeSelectors } from "src/store/customize"
import { AppThunkAction } from "src/types/reduxUtils"

import * as actions from "./actions"

export const addRow = actions.addRow

export const copyRow = actions.copyRow

export const deleteRow = (rowIndex: number): AppThunkAction => {
  return (dispatch, getState) => {
    // 保護
    if (customizeSelectors.getRowStatuses(getState(), rowIndex).isProtected) {
      return
    }
    dispatch(actions.deleteRow(rowIndex))
  }
}

export const toggleProtectRow = actions.toggleProtectRow

export const toggleCheckStock = actions.toggleCheckStock

export const sortAllCustomizedEquipments = actions.sortAllCustomizedEquipments

export const selectEquipmentCell = actions.selectEquipmentCell

export const selectEquipment = (equipmentId: EquipmentId): AppThunkAction => {
  return (dispatch, getState) => {
    const rootState = getState()
    const state = rootState.customizeState

    // 保護
    if (
      customizeSelectors.getRowStatuses(rootState, state.selectedCell.rowIndex)
        .isProtected
    ) {
      return
    }
    dispatch(actions.selectEquipment(equipmentId))
  }
}

export const removeEquipment = (cellIndex: CellIndex): AppThunkAction => {
  return (dispatch, getState) => {
    // 保護
    if (
      customizeSelectors.getRowStatuses(getState(), cellIndex.rowIndex)
        .isProtected
    ) {
      return
    }
    dispatch(actions.removeEquipment(cellIndex))
  }
}

export const toggleIsMinimizedEquipmentDetailModal =
  actions.toggleIsMinimizedEquipmentDetailModal

export const changeCustomizeMemo = (
  rowIndex: CellIndex["rowIndex"],
  customizeMemo: string
): AppThunkAction => {
  return (dispatch, getState) => {
    // 保護
    if (customizeSelectors.getRowStatuses(getState(), rowIndex).isProtected) {
      return
    }
    dispatch(
      actions.changeCustomizeMemo({
        rowIndex,
        customizeMemo,
      })
    )
  }
}
