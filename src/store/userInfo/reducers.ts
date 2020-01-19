import produce from "immer"
import { reducerWithInitialState } from "typescript-fsa-reducers"

import * as actions from "./actions"

export type State = Readonly<{}>

export const initialState: State = {}

export const reducer = reducerWithInitialState(initialState)
  .case(actions.addRow, (state) => {
    return produce(state, (draft) => {
      // TODO
      console.log(draft)
    })
  })
  .build()
