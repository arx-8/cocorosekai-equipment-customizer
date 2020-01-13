import {
  EquipCost,
  Equipment,
  EquipmentId,
  HitPointNum,
  MagicAttackNum,
  MagicDefenseNum,
  PhysicalAttackNum,
  PhysicalDefenseNum,
} from "src/domain/model/Equipment"
import { calcCustomizeRecord } from "."

describe("calcCustomizeRecord", () => {
  it("list length 0", () => {
    // ## Arrange ##
    const equipments: Equipment[] = []

    // ## Act ##
    const result = calcCustomizeRecord(equipments)

    // ## Assert ##
    expect(result).toMatchSnapshot()
  })

  it("list length 1", () => {
    // ## Arrange ##
    const equipments: Equipment[] = [
      {
        id: 0 as EquipmentId,
        name: "羊飼いの杖",
        rawName: "羊飼いの杖",
        attribute: "light",
        statuses: {
          hp: 72 as HitPointNum,
          magicAtk: 43 as MagicAttackNum,
          magicDef: 0 as MagicDefenseNum,
          physicalAtk: 14 as PhysicalAttackNum,
          physicalDef: 0 as PhysicalDefenseNum,
        },
        enhancementsNum: 0,
        equipCost: 12 as EquipCost,
        imageUrl: "https://example.com/",
        specialEffects: [
          {
            rawText: "受ける魔法ダメージ5%軽減",
          },
        ],
      },
    ]

    // ## Act ##
    const result = calcCustomizeRecord(equipments)

    // ## Assert ##
    expect(result).toMatchSnapshot()
  })

  it("list some length", () => {
    // ## Arrange ##
    const equipments: Equipment[] = [
      {
        id: 1 as EquipmentId,
        name: "dummy1",
        rawName: "dummy+",
        attribute: "darkness",
        statuses: {
          hp: 1 as HitPointNum,
          magicAtk: 10 as MagicAttackNum,
          magicDef: 100 as MagicDefenseNum,
          physicalAtk: 1_000 as PhysicalAttackNum,
          physicalDef: 10_000 as PhysicalDefenseNum,
        },
        enhancementsNum: 1,
        equipCost: 100_000 as EquipCost,
        imageUrl: null,
        specialEffects: [
          {
            rawText: "effect 1",
          },
        ],
      },
      {
        id: 20 as EquipmentId,
        name: "dummy2",
        rawName: "dummy++",
        attribute: "light",
        statuses: {
          hp: 20 as HitPointNum,
          magicAtk: 200 as MagicAttackNum,
          magicDef: 2_000 as MagicDefenseNum,
          physicalAtk: 20_000 as PhysicalAttackNum,
          physicalDef: 200_000 as PhysicalDefenseNum,
        },
        enhancementsNum: 2,
        equipCost: 2_000_000 as EquipCost,
        imageUrl: null,
        specialEffects: [],
      },
      {
        id: 300 as EquipmentId,
        name: "dummy3",
        rawName: "dummy++",
        attribute: "darkness",
        statuses: {
          hp: 300 as HitPointNum,
          magicAtk: 3_000 as MagicAttackNum,
          magicDef: 30_000 as MagicDefenseNum,
          physicalAtk: 300_000 as PhysicalAttackNum,
          physicalDef: 3_000_000 as PhysicalDefenseNum,
        },
        enhancementsNum: 2,
        equipCost: 30_000_000 as EquipCost,
        imageUrl: "https://example.com/",
        specialEffects: [
          {
            rawText: "effect 300",
          },
        ],
      },
    ]

    // ## Act ##
    const result = calcCustomizeRecord(equipments)

    // ## Assert ##
    expect(result).toMatchSnapshot()
  })
})
