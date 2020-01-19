import { APP_NAME } from "src/constants/env"
import actionCreatorFactory from "typescript-fsa"

export const ActionTypes = {
  addRow: "userInfo/addRow",
} as const

const create = actionCreatorFactory(APP_NAME)

export const addRow = create(ActionTypes.addRow)
