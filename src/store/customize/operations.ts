import * as actions from "./actions"

// import { AppThunkAction } from "src/types/reduxUtils"
// export const addTodo = (payload: { label: string }): AppThunkAction => {
//   return async (dispatch) => {
//     console.log(dispatch)
//     console.log(actions.TODO)
//   }
// }

export const addRow = actions.addRow

export const copyRow = actions.copyRow

export const deleteRow = actions.deleteRow

export const selectEquipmentCell = actions.selectEquipmentCell

export const selectEquipment = actions.selectEquipment
