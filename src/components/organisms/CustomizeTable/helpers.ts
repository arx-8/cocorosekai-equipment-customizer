import { CustomizeRecord } from "src/domain/model/CustomizeRecord"

/**
 * このコンポーネントが render されるべきかの判定のため。
 * 今の実装では、以下に合致する値だけ監視すればよい
 * - 導出される値”ではない”値
 * - ユーザー入力される値
 *
 * 予期せぬ再 render ブロックになる可能性があるが、
 * 装備欄の選択、空削除などの再 render を抑止できるため、（今のところ）有用である
 *
 * @returns true: no update | false: should component update
 */
export const isEqualData = (
  prev: CustomizeRecord[],
  next: CustomizeRecord[]
): boolean => {
  if (prev.length !== next.length) {
    return false
  }

  return prev.every((p, pIdx) => {
    return (
      p.equippedIds.length === next[pIdx].equippedIds.length &&
      p.equippedIds.every(
        (pId, piIdx) => next[pIdx].equippedIds[piIdx] === pId
      ) &&
      p.customizeMemo === next[pIdx].customizeMemo
    )
  })
}
