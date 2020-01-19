import { CustomizeRecord } from "src/domain/model/CustomizeRecord"

/**
 * このコンポーネントが render されるべきかの判定のため。
 * 今の実装では、以下の理由で equippedIds だけ監視すればよい
 * - equippedIds が変われば各値が導出される
 * - CustomizeRecord の各値を直接変更する機能はない
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
      p.equippedIds.every((pId, piIdx) => next[pIdx].equippedIds[piIdx] === pId)
    )
  })
}
