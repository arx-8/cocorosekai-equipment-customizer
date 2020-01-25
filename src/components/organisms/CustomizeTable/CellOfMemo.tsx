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

export const CellOfMemo: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()
  const { isProtected } = useSelector((state: RootState) =>
    customizeSelectors.getRowStatuses(state, row.index)
  )

  const { customizeMemo: initialValue } = row.original

  // We need to keep and update the state of the cell normally
  const [tempValue, setTempValue] = React.useState(initialValue)

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setTempValue(initialValue)
  }, [initialValue])

  return (
    <textarea
      css={[root, isProtected && disabledCss]}
      disabled={isProtected}
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
