import { OptionsObject } from "notistack"
import { APP_NAME } from "src/constants/env"
import { AppNotification } from "src/domain/model/AppNotification"
import actionCreatorFactory from "typescript-fsa"

/**
 * @see https://iamhosseindhv.com/notistack/demos#redux-/-mobx-example
 */
export const ActionTypes = {
  enqueueNotification: "notice/enqueueNotification",
  closeNotification: "notice/closeNotification",
  removeNotification: "notice/removeNotification",
} as const

const create = actionCreatorFactory(APP_NAME)

export const enqueueNotification = create<AppNotification>(
  ActionTypes.enqueueNotification
)

export const closeNotification = create<{
  dismissAll: boolean
  key: OptionsObject["key"]
}>(ActionTypes.closeNotification)

/**
 * @param key
 */
export const removeNotification = create<Required<OptionsObject>["key"]>(
  ActionTypes.removeNotification
)
