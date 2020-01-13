import { range } from "./ArrayUtils"

describe("range", () => {
  it("できる", () => {
    // ## Arrange ##
    // ## Act ##
    const result = range(4, 10)
    // ## Assert ##
    expect(result).toStrictEqual([4, 5, 6, 7, 8, 9])
  })

  it("同値", () => {
    // ## Arrange ##
    // ## Act ##
    const result = range(11, 11)
    // ## Assert ##
    expect(result).toStrictEqual([])
  })

  it("to < fromな引数はダメ", () => {
    // ## Arrange ##
    // ## Act ##
    // ## Assert ##
    expect(() => {
      range(3, 2)
    }).toThrow()
  })
})
