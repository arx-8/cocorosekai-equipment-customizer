import { range, toggleValues } from "./arrayUtils"

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

describe("toggleValues", () => {
  it("増える", () => {
    // ## Arrange ##
    // ## Act ##
    const result = toggleValues([], "value")
    // ## Assert ##
    expect(result).toStrictEqual(["value"])
  })

  it("増える 2", () => {
    // ## Arrange ##
    // ## Act ##
    const result = toggleValues(["value"], "value2")
    // ## Assert ##
    expect(result).toStrictEqual(["value", "value2"])
  })

  it("減る", () => {
    // ## Arrange ##
    // ## Act ##
    const result = toggleValues(["value"], "value")
    // ## Assert ##
    expect(result).toStrictEqual([])
  })

  it("減る 2", () => {
    // ## Arrange ##
    // ## Act ##
    const result = toggleValues(["v1", "v2", "v3"], "v2")
    // ## Assert ##
    expect(result).toStrictEqual(["v1", "v3"])
  })
})
