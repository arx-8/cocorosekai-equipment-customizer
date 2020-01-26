import produce from "immer"
import { AppNotification } from "src/domain/model/AppNotification"
import { reducerWithInitialState } from "typescript-fsa-reducers"

import * as actions from "./actions"

export type State = Readonly<{
  notifications: AppNotification[]
}>

const initialState: State = {
  notifications: [],
}

export const reducer = reducerWithInitialState(initialState)
  .case(actions.enqueueNotification, (state, payload) =>
    produce(state, (draft) => {
      draft.notifications.push({
        ...payload,
        key: payload.key,
      })
    })
  )
  .case(actions.closeNotification, (state, payload) =>
    produce(state, (draft) => {
      draft.notifications = draft.notifications.map((n) => {
        if (payload.dismissAll || n.key === payload.key) {
          return {
            ...n,
            dismissed: true,
          }
        }
        return n
      })
    })
  )
  .case(actions.removeNotification, (state, payload) =>
    produce(state, (draft) => {
      draft.notifications = draft.notifications.filter((n) => n.key !== payload)
    })
  )
  .build()
