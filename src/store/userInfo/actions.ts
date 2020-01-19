import { APP_NAME } from "src/constants/env"
import { EquipmentId } from "src/domain/model/Equipment"
import actionCreatorFactory from "typescript-fsa"

export const ActionTypes = {
  changeStockNum: "userInfo/changeStockNum",
  resetAllStockNums: "userInfo/resetAllStockNums",
} as const

const create = actionCreatorFactory(APP_NAME)

export const changeStockNum = create<{
  equipmentId: EquipmentId
  stockNum: number
}>(ActionTypes.changeStockNum)

export const resetAllStockNums = create(ActionTypes.resetAllStockNums)
