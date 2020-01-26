import { OptionsObject } from "notistack"
import { AppNotification } from "src/domain/model/AppNotification"
import { AppThunkAction } from "src/types/reduxUtils"

import * as actions from "./actions"

/**
 * enqueue する時、key を指定しなければ自動で発行する
 */
export const enqueueNotification = (
  notification: Omit<AppNotification, "key"> & {
    key?: OptionsObject["key"]
  }
): AppThunkAction => {
  return (dispatch) => {
    dispatch(
      actions.enqueueNotification({
        key: notification.key || new Date().getTime() + Math.random(),
        ...notification,
      })
    )
  }
}

export const closeNotification = (
  key: OptionsObject["key"]
): AppThunkAction => {
  return (dispatch) => {
    dispatch(
      actions.closeNotification({
        // dismiss all if no key has been defined
        dismissAll: !key,
        key,
      })
    )
  }
}
export const removeNotification = actions.removeNotification
