import * as operations from "./operations"
import { State, reducer } from "./reducers"
import * as selectors from "./selectors"

export const userInfoOperations = operations
export const userInfoReducer = reducer
export const userInfoSelectors = selectors
export type UserInfoState = State
