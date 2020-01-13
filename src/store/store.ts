import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux"
import persistState from "redux-localstorage"
import thunkMiddleWare from "redux-thunk"
import { isDevelopment } from "src/constants/env"
import { customizeReducer, CustomizeState } from "src/store/customize"

export type RootState = Readonly<{
  customizeState: CustomizeState
}>

export const configureStore = (
  initialState: Partial<RootState> = {}
): Store<RootState, AnyAction> => {
  const rootReducer = combineReducers<RootState>({
    customizeState: customizeReducer,
  })

  // Connect Chrome Redux DevTools, if installed.
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middleWares = []
  middleWares.push(thunkMiddleWare)
  if (isDevelopment) {
    middleWares.push(require("redux-immutable-state-invariant").default())
    middleWares.push(
      require("@reduxjs/toolkit").createSerializableStateInvariantMiddleware()
    )
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleWares),
      persistState(["customizeState"])
    )
  )
  return store
}
