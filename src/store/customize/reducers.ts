import produce from "immer"
import {
  CellIndex,
  MAX_EQUIPMENTS_NUM,
  SelectedEquipmentIds,
} from "src/domain/model/CustomizeRecord"
import { range } from "src/utils/arrayUtils"
import { reducerWithInitialState } from "typescript-fsa-reducers"

import * as actions from "./actions"

type Record = {
  customizeMemo: string
  equippedIds: SelectedEquipmentIds
  isProtected: boolean
}

export type State = Readonly<{
  isMinimizedEquipmentDetailModal: boolean
  records: Record[]
  selectedCell: CellIndex
}>

const initRecord: Record = {
  customizeMemo: "",
  equippedIds: range(0, MAX_EQUIPMENTS_NUM).map((_) => undefined),
  isProtected: false,
}

export const initialState: State = {
  isMinimizedEquipmentDetailModal: false,
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
      const newRecord = produce(draft.records[payload], (record) => {
        record.isProtected = false
      })

      draft.records.push(newRecord)
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
  .case(actions.toggleProtectRow, (state, payload) => {
    return produce(state, (draft) => {
      draft.records[payload].isProtected = !draft.records[payload].isProtected
    })
  })
  .case(actions.selectEquipmentCell, (state, payload) => {
    return produce(state, (draft) => {
      draft.selectedCell = payload
    })
  })
  .case(actions.selectEquipment, (state, payload) => {
    return produce(state, (draft) => {
      const record = draft.records[draft.selectedCell.rowIndex]
      // 行削除で選択位置が消えている場合があるため
      if (record == null) {
        return
      }

      record.equippedIds[draft.selectedCell.colIndex] = payload

      // 連続選択しやすくするため、隣のセルに移動させる
      if (draft.selectedCell.colIndex !== MAX_EQUIPMENTS_NUM - 1) {
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
  .case(actions.toggleIsMinimizedEquipmentDetailModal, (state) => {
    return produce(state, (draft) => {
      draft.isMinimizedEquipmentDetailModal = !draft.isMinimizedEquipmentDetailModal
    })
  })
  .case(actions.onChangeCustomizeMemo, (state, payload) => {
    return produce(state, (draft) => {
      draft.records[payload.rowIndex].customizeMemo = payload.customizeMemo
    })
  })
  .case(actions.sortAllCustomizedEquipments, (state) => {
    return produce(state, (draft) => {
      draft.records.forEach((r) => {
        r.equippedIds.sort()
      })
    })
  })
  .build()
