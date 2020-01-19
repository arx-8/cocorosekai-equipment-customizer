import {
  CellIndex,
  CustomizeRecord,
  calcCustomizeRecord,
} from "src/domain/model/CustomizeRecord"
import {
  Equipment,
  EquipmentId,
  findEquipmentStrict,
} from "src/domain/model/Equipment"
import { RootState } from "src/store/store"

export const getCustomizeRecords = (
  rootState: RootState
): CustomizeRecord[] => {
  const state = rootState.customizeState

  const recList = state.records.map((r) => {
    // 存在するものだけで、CustomizeRecord を生成
    const eqList = r.equippedIds
      .filter((eId): eId is EquipmentId => eId != null)
      .map((eId) => findEquipmentStrict(eId))
    const record = calcCustomizeRecord(eqList)

    return {
      ...record,
      // state 内の値と data の結合
      equippedIds: r.equippedIds,
    }
  })

  return recList
}

export const getCurrentSelectedCellIndex = (
  rootState: RootState
): CellIndex => {
  const state = rootState.customizeState
  return state.selectedCell
}

export const getCurrentSelectedCellEquipment = (
  rootState: RootState
): Equipment | undefined => {
  const state = rootState.customizeState

  const record = state.records[state.selectedCell.rowIndex]
  // 行削除で選択位置が消えている場合があるため
  if (record == null) {
    return
  }

  const eId = record.equippedIds[state.selectedCell.colIndex]
  // 未装備の欄の場合があるため
  if (eId == null) {
    return
  }

  return findEquipmentStrict(eId)
}
