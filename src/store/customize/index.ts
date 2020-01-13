import * as operations from "./operations"
import { reducer, State } from "./reducers"
import * as selectors from "./selectors"

export const customizeOperations = operations
export const customizeReducer = reducer
export const customizeSelectors = selectors
export type CustomizeState = State
