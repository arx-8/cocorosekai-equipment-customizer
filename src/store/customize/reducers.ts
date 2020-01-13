import produce from "immer"
import {
  CellIndex,
  MAX_EQUIPMENTS_NUM,
  SelectedEquipmentIds,
} from "src/domain/model/CustomizeRecord"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import * as actions from "./actions"

type Record = {
  equippedIds: SelectedEquipmentIds
}

export type State = Readonly<{
  records: Record[]
  selectedCell: CellIndex
}>

const initRecord: Record = {
  equippedIds: [undefined, undefined, undefined, undefined, undefined],
}

export const initialState: State = {
  records: [initRecord],
  selectedCell: {
    rowIndex: 0,
    colIndex: 0,
  },
}

export const reducer = reducerWithInitialState(initialState)
  .case(actions.addRow, (state) => {
    return produce(state, (draft) => {
      draft.records.push(initRecord)
    })
  })
  .case(actions.copyRow, (state, payload) => {
    return produce(state, (draft) => {
      draft.records.push(draft.records[payload])
    })
  })
  .case(actions.deleteRow, (state, payload) => {
    return produce(state, (draft) => {
      // 必ず 1 件は残す
      if (draft.records.length === 1) {
        return
      }

      draft.records = draft.records.filter((_, index) => index !== payload)
    })
  })
  .case(actions.selectEquipmentCell, (state, payload) => {
    return produce(state, (draft) => {
      draft.selectedCell = payload
    })
  })
  .case(actions.selectEquipment, (state, payload) => {
    return produce(state, (draft) => {
      draft.records[draft.selectedCell.rowIndex].equippedIds[
        draft.selectedCell.colIndex
      ] = payload

      // 連続選択しやすくするため、隣のセルに移動させる
      if (draft.selectedCell.colIndex !== MAX_EQUIPMENTS_NUM) {
        draft.selectedCell.colIndex += 1
      }
    })
  })
  .case(actions.removeEquipment, (state, payload) => {
    return produce(state, (draft) => {
      draft.records[payload.rowIndex].equippedIds[payload.colIndex] = undefined

      // 連続選択しやすくするため、削除したセルに移動させる
      draft.selectedCell = payload
    })
  })
  .build()
