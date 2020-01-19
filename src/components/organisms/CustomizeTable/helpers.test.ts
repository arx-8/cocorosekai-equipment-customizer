import { isEqualData } from "src/components/organisms/CustomizeTable/helpers"
import { CustomizeRecord } from "src/domain/model/CustomizeRecord"
import { EquipCost, EquipmentId } from "src/domain/model/Equipment"
import { CastAny } from "src/types/tsUtils"

const createObj = (
  override: Partial<CustomizeRecord> | undefined = undefined
): CustomizeRecord => {
  // テスト省略のため、今の実装で監視している値のみ定義し、後は cast any
  return {
    ...override,
    customizeMemo: override?.customizeMemo || "",
    equippedIds: override?.equippedIds || [],
  } as CastAny
}

describe("isEqualData", () => {
  describe("should not update", () => {
    it("empty", () => {
      // ## Arrange ##
      const prev: CustomizeRecord[] = []
      const next: CustomizeRecord[] = []

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(true)
    })

    it("many empty", () => {
      // ## Arrange ##
      const prev = [createObj(), createObj()]
      const next = [createObj(), createObj()]

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(true)
    })

    it("eq inner", () => {
      // ## Arrange ##
      const prev = [
        createObj(),
        createObj({ equippedIds: [1, 2] as EquipmentId[] }),
        createObj(),
      ]
      const next = [
        createObj(),
        createObj({ equippedIds: [1, 2] as EquipmentId[] }),
        createObj(),
      ]

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(true)
    })

    it("eq inner with 0", () => {
      // ## Arrange ##
      const prev = [
        createObj(),
        createObj({ equippedIds: [1, 2, 0] as EquipmentId[] }),
        createObj(),
      ]
      const next = [
        createObj(),
        createObj({ equippedIds: [1, 2, 0] as EquipmentId[] }),
        createObj(),
      ]

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(true)
    })

    it("Unrelated property", () => {
      // ## Arrange ##
      const prev = [
        createObj(),
        createObj({
          totalEquipCost: 11 as EquipCost,
          equippedIds: [1, 2, 0] as EquipmentId[],
        }),
        createObj(),
      ]
      const next = [
        createObj(),
        createObj({
          totalEquipCost: 12 as EquipCost,
          equippedIds: [1, 2, 0] as EquipmentId[],
        }),
        createObj(),
      ]

      // テストデータ自体の確認 (createObj() の動作確認)
      expect(prev[1].totalEquipCost).toStrictEqual(11)
      expect(prev[1].equippedIds).toStrictEqual([1, 2, 0])
      expect(next[1].totalEquipCost).toStrictEqual(12)
      expect(next[1].equippedIds).toStrictEqual([1, 2, 0])

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(true)
    })
  })

  describe("should update", () => {
    it("many empty, diff length", () => {
      // ## Arrange ##
      const prev = [createObj(), createObj()]
      const next = [createObj()]

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(false)
    })

    it("eq length, diff contents (length: prev < next)", () => {
      // ## Arrange ##
      const prev = [
        createObj(),
        createObj({ equippedIds: [1, 2] as EquipmentId[] }),
      ]
      const next = [
        createObj(),
        createObj({ equippedIds: [1, 2, 3] as EquipmentId[] }),
      ]

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(false)
    })

    it("eq length, diff contents (length: prev > next)", () => {
      // ## Arrange ##
      const prev = [
        createObj(),
        createObj({ equippedIds: [1, 2, 3] as EquipmentId[] }),
      ]
      const next = [
        createObj(),
        createObj({ equippedIds: [1, 2] as EquipmentId[] }),
      ]

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(false)
    })

    it("eq length, diff contents (inner order)", () => {
      // ## Arrange ##
      const prev = [
        createObj(),
        createObj({ equippedIds: [1, 2] as EquipmentId[] }),
        createObj(),
      ]
      const next = [
        createObj(),
        createObj({ equippedIds: [2, 1] as EquipmentId[] }),
        createObj(),
      ]

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(false)
    })

    it("many diff", () => {
      // ## Arrange ##
      const prev = [
        createObj({ equippedIds: [0, 1, 2, 3] as EquipmentId[] }),
        createObj(),
        createObj(),
      ]
      const next = [
        createObj(),
        createObj({ equippedIds: [4] as EquipmentId[] }),
        createObj(),
      ]

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(false)
    })

    it("other related property", () => {
      // ## Arrange ##
      const prev = [
        createObj(),
        createObj({
          customizeMemo: "p-1",
          equippedIds: [1, 2, 0] as EquipmentId[],
        }),
        createObj(),
      ]
      const next = [
        createObj(),
        createObj({
          customizeMemo: "p-2",
          equippedIds: [1, 2, 0] as EquipmentId[],
        }),
        createObj(),
      ]

      // テストデータ自体の確認 (createObj() の動作確認)
      expect(prev[1].customizeMemo).toStrictEqual("p-1")
      expect(prev[1].equippedIds).toStrictEqual([1, 2, 0])
      expect(next[1].customizeMemo).toStrictEqual("p-2")
      expect(next[1].equippedIds).toStrictEqual([1, 2, 0])

      // ## Act ##
      // ## Assert ##
      expect(isEqualData(prev, next)).toStrictEqual(false)
    })
  })
})
