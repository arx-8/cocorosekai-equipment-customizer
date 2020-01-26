import * as operations from "./operations"
import { State, reducer } from "./reducers"
import * as selectors from "./selectors"

export const noticeOperations = operations
export const noticeReducer = reducer
export const noticeSelectors = selectors
export type NoticeState = State
