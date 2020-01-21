import { dataSrc } from "src/data/datastore"

const pp = (src: string): number => parseInt(src, 10)

describe("dataSrc", () => {
  it("sorted by id", () => {
    // 適当な代表値をテスト
    expect(dataSrc[0].id < dataSrc[1].id).toStrictEqual(true)
    expect(dataSrc[3].id < dataSrc[4].id).toStrictEqual(true)
    expect(dataSrc[10].id < dataSrc[11].id).toStrictEqual(true)
    expect(dataSrc[100].id < dataSrc[101].id).toStrictEqual(true)
  })
})
