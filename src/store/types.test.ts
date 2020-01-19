import { toUniq } from "src/utils/arrayUtils"

import { ActionTypes as CustomizeActionTypes } from "./customize/actions"
import { ActionTypes as UserInfoActionTypes } from "./userInfo/actions"

describe("ActionType", () => {
  it("No duplicate definition", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const original: string[] = [
      ...Object.values(CustomizeActionTypes),
      ...Object.values(UserInfoActionTypes),
    ]

    // ## Act ##
    const unique = toUniq(original)

    // ## Assert ##
    expect(unique).toHaveLength(original.length)
  })
})
