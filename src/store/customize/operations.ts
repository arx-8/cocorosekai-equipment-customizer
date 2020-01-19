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
    if (customizeSelectors.isProtectedRow(getState(), rowIndex)) {
      return
    }
    dispatch(actions.deleteRow(rowIndex))
  }
}

export const toggleProtectRow = actions.toggleProtectRow

export const selectEquipmentCell = actions.selectEquipmentCell

export const selectEquipment = (equipmentId: EquipmentId): AppThunkAction => {
  return (dispatch, getState) => {
    const rootState = getState()
    const state = rootState.customizeState

    // 保護
    if (
      customizeSelectors.isProtectedRow(rootState, state.selectedCell.rowIndex)
    ) {
      return
    }
    dispatch(actions.selectEquipment(equipmentId))
  }
}

export const removeEquipment = (cellIndex: CellIndex): AppThunkAction => {
  return (dispatch, getState) => {
    // 保護
    if (customizeSelectors.isProtectedRow(getState(), cellIndex.rowIndex)) {
      return
    }
    dispatch(actions.removeEquipment(cellIndex))
  }
}

export const toggleIsMinimizedEquipmentDetailModal =
  actions.toggleIsMinimizedEquipmentDetailModal

export const onChangeCustomizeMemo = (
  rowIndex: number,
  customizeMemo: string
): AppThunkAction => {
  return (dispatch, getState) => {
    // 保護
    if (customizeSelectors.isProtectedRow(getState(), rowIndex)) {
      return
    }
    dispatch(
      actions.onChangeCustomizeMemo({
        rowIndex,
        customizeMemo,
      })
    )
  }
}
