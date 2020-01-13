import { toUniq } from "src/utils/arrayUtils"
import { ActionTypes as CustomizeActionTypes } from "./customize/actions"

describe("ActionType", () => {
  it("No duplicate definition", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const original: string[] = [...Object.values(CustomizeActionTypes)]

    // ## Act ##
    const unique = toUniq(original)

    // ## Assert ##
    expect(unique).toHaveLength(original.length)
  })
})
