import produce from "immer"
import { reducerWithInitialState } from "typescript-fsa-reducers"

import * as actions from "./actions"

export type State = Readonly<{
  /** key is EquipmentId */
  stockNums: Record<string, number>
}>

export const initialState: State = {
  stockNums: {},
}

export const reducer = reducerWithInitialState(initialState)
  .case(actions.changeStockNum, (state, payload) => {
    return produce(state, (draft) => {
      draft.stockNums[payload.equipmentId] = payload.stockNum
    })
  })
  .build()
