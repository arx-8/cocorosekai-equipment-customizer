import * as operations from "./operations"
import { State, reducer } from "./reducers"
import * as selectors from "./selectors"

export const customizeOperations = operations
export const customizeReducer = reducer
export const customizeSelectors = selectors
export type CustomizeState = State
