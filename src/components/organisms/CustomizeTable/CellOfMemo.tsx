/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CellProps } from "react-table"
import { disabledColor } from "src/components/styles/styles"
import { CustomizeRecord } from "src/domain/model/CustomizeRecord"
import { customizeOperations, customizeSelectors } from "src/store/customize"
import { RootState } from "src/store/store"

type OwnProps = CellProps<CustomizeRecord> & {
  children?: never
}

/**
 * # memo 1
 * customizeMemo の入力による Table 全体の再 render を防ぐため、data の useSelector に equalityFn を実装している
 * そのため Table からは値を受け取れない
 * 最新の値は redux state の中にある
 * Table に最新の値が反映されるのは、Table 全体の再 render が実行された時のみ
 *
 * # memo 2
 * Table には常に古い値しか入らないため、最新の入力値で filter, sort できない
 * よって、このパフォーマンスチューニングのトレードオフで、 filter, sort が実装できない
 */
export const CellOfMemo: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()
  const initialValue = useSelector(
    (state: RootState) => state.customizeState.records[row.index].customizeMemo
  )
  const isProtectedRow = useSelector((state: RootState) =>
    customizeSelectors.isProtectedRow(state, row.index)
  )

  // We need to keep and update the state of the cell normally
  const [tempValue, setTempValue] = React.useState(initialValue)

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setTempValue(initialValue)
  }, [initialValue])

  return (
    <textarea
      css={[root, isProtectedRow && disabledCss]}
      disabled={isProtectedRow}
      value={tempValue}
      onChange={(e) => setTempValue(e.target.value)}
      onBlur={() => {
        dispatch(customizeOperations.changeCustomizeMemo(row.index, tempValue))
      }}
    />
  )
}

const root = css`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  resize: vertical;
`

const disabledCss = css`
  background: ${disabledColor};
`
