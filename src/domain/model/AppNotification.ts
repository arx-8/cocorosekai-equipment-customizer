import { OptionsObject, SnackbarMessage } from "notistack"

export type AppNotification = {
  dismissed?: boolean
  key: Required<OptionsObject>["key"]
  message: SnackbarMessage
  options?: OptionsObject
}
