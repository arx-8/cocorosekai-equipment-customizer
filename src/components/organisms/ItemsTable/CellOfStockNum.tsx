/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { CellProps } from "react-table"
import { ItemsTableRow } from "src/components/organisms/ItemsTable/Table"
import { userInfoOperations } from "src/store/userInfo"

type OwnProps = {
  children?: never
} & CellProps<ItemsTableRow>

/**
 * 負数は 0 にして返す
 * 正数はそのまま返す
 */
const preventMinus = (num: number): number => {
  return num < 0 ? 0 : num
}

export const CellOfStockNum: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()

  const { id, stockNum: initialValue } = row.original

  // We need to keep and update the state of the cell normally
  const [tempValue, setTempValue] = React.useState(initialValue)

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setTempValue(initialValue)
  }, [initialValue])

  return (
    <span css={root}>
      <input
        css={[inputCss, tempValue && hasValue]}
        value={tempValue}
        type="number"
        onFocus={(e) => e.target.select()}
        onChange={(e) => {
          const next = e.target.value || "0"
          setTempValue(preventMinus(parseInt(next, 10)))
        }}
        // We'll only update the external data when the input is blurred
        onBlur={() => {
          dispatch(
            userInfoOperations.changeStockNum({
              equipmentId: id,
              stockNum: tempValue,
            })
          )
        }}
      />
    </span>
  )
}

const root = css`
  width: inherit;
`

const inputCss = css`
  width: 80%;
  margin: 2px;
`

const hasValue = css`
  background: yellow;
`
