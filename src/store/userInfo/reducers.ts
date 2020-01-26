import produce from "immer"
import { EquipmentIdToStockNumPair } from "src/domain/model/Equipment"
import { reducerWithInitialState } from "typescript-fsa-reducers"

import * as actions from "./actions"

export type State = Readonly<{
  /** key is EquipmentId */
  stockNums: EquipmentIdToStockNumPair
}>

export const initialState: State = {
  stockNums: {},
}

export const reducer = reducerWithInitialState(initialState)
  .case(actions.changeStockNum, (state, payload) =>
    produce(state, (draft) => {
      draft.stockNums[payload.equipmentId] = payload.stockNum
    })
  )
  .case(actions.resetAllStockNums, (state) =>
    produce(state, (draft) => {
      draft.stockNums = {}
    })
  )
  .build()
