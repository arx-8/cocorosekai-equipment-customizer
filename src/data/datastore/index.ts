import { data2_4 } from "src/data/datastore/data2_4"
import { data5 } from "src/data/datastore/data5"
import { Equipment } from "src/domain/model/Equipment"

export const dataSrc: readonly Equipment[] = data2_4
  .concat(data5)
  .sort((l, r) => {
    if (l.id < r.id) return -1
    if (l.id > r.id) return 1

    throw new Error(
      `Unexpected ID conflict: ${l.id}:${l.rawName}, ${r.id}:${r.rawName}`
    )
  })
