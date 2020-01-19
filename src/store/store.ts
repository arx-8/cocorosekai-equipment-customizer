import {
  AnyAction,
  Store,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux"
import persistState from "redux-localstorage"
import thunkMiddleWare from "redux-thunk"
import { isDevelopment } from "src/constants/env"
import { CustomizeState, customizeReducer } from "src/store/customize"
import { UserInfoState, userInfoReducer } from "src/store/userInfo"

export type RootState = Readonly<{
  customizeState: CustomizeState
  userInfo: UserInfoState
}>

export const configureStore = (
  initialState: Partial<RootState> = {}
): Store<RootState, AnyAction> => {
  const rootReducer = combineReducers<RootState>({
    customizeState: customizeReducer,
    userInfo: userInfoReducer,
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
