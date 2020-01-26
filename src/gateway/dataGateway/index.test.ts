import { Equipment } from "src/domain/model/Equipment"
import { CastAny } from "src/types/tsUtils"

import { convertToItemsTable } from "."

const createTestData = (): readonly Equipment[] => {
  return [
    {
      id: 896902,
      imageUrl:
        "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896900.png",
      equipCost: 64,
      name: "鬼灯鼻・じゅんろく",
      rawName: "鬼灯鼻・じゅんろく++",
      enhancementsNum: 2,
      attribute: "void",
      statuses: {
        hp: 0,
        magicAtk: 0,
        magicDef: 0,
        physicalAtk: 258,
        physicalDef: 0,
      },
      specialEffects: [
        {
          rawText: "クリティカル率が35%上昇する。",
        },
      ],
    },
    {
      id: 950000,
      imageUrl:
        "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950000.png",
      equipCost: 10,
      name: "ヴィブロブレード",
      rawName: "ヴィブロブレード",
      enhancementsNum: 0,
      attribute: "void",
      statuses: {
        hp: 30,
        magicAtk: 0,
        magicDef: 0,
        physicalAtk: 48,
        physicalDef: 0,
      },
      specialEffects: [],
    },
    {
      id: 951602,
      imageUrl:
        "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951600.png",
      equipCost: 51,
      name: "傲慢のアラーニェ",
      rawName: "傲慢のアラーニェ++",
      enhancementsNum: 2,
      attribute: "void",
      statuses: {
        hp: 0,
        magicAtk: 326,
        magicDef: 0,
        physicalAtk: 326,
        physicalDef: 0,
      },
      specialEffects: [],
    },
  ] as CastAny
}

describe("convertToItemsTable", () => {
  it("stock 0", () => {
    // ## Arrange ##
    const data = createTestData()
    const stockNums = {}
    const currentEquippedNums = {}
    const isCurrentRowCheckStock = false

    // ## Act ##
    const result = convertToItemsTable(
      data,
      stockNums,
      currentEquippedNums,
      isCurrentRowCheckStock
    )

    // ## Assert ##
    expect(result).toMatchSnapshot()
  })

  it("check ON, stock 0", () => {
    // ## Arrange ##
    const data = createTestData()
    const stockNums = {}
    const currentEquippedNums = {}
    const isCurrentRowCheckStock = true

    // ## Act ##
    const result = convertToItemsTable(
      data,
      stockNums,
      currentEquippedNums,
      isCurrentRowCheckStock
    )

    // ## Assert ##
    expect(result).toMatchSnapshot()
  })

  it("check ON, some stock", () => {
    // ## Arrange ##
    const data = createTestData()
    const stockNums = {
      896902: 1,
      951602: 22,
    }
    const currentEquippedNums = {
      896902: 1,
      951602: 21,
    }
    const isCurrentRowCheckStock = true

    // ## Act ##
    const result = convertToItemsTable(
      data,
      stockNums,
      currentEquippedNums,
      isCurrentRowCheckStock
    )

    // ## Assert ##
    expect(result).toMatchSnapshot()
  })
})
