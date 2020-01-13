import { findEquipmentStrict } from "src/assets/data"
import {
  calcCustomizeRecord,
  CustomizeRecord,
} from "src/domain/model/CustomizeRecord"
import { EquipmentId } from "src/domain/model/Equipment"
import { RootState } from "src/store/store"

export const getCustomizeRecords = (
  rootState: RootState
): CustomizeRecord[] => {
  const state = rootState.customizeState

  const recList = state.records.map((r) => {
    // 存在するものだけで、CustomizeRecord を生成
    const eqList = r.equippedIds
      .filter((eId): eId is EquipmentId => !!eId)
      .map((eId) => findEquipmentStrict(eId))
    const record = calcCustomizeRecord(eqList)

    // 未入力 (undefined) の順番保持のため
    record.equippedIds = r.equippedIds
    return record
  })

  return recList
}
