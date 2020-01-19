/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { CellProps } from "react-table"
import { CustomizeRecord } from "src/domain/model/CustomizeRecord"
import { customizeOperations } from "src/store/customize"
import { RootState } from "src/store/store"

type OwnProps = CellProps<CustomizeRecord> & {
  children?: never
}

export const CellOfMemo: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()
  const customizeMemo = useSelector(
    (state: RootState) => state.customizeState.records[row.index].customizeMemo
  )

  return (
    <textarea
      css={root}
      value={customizeMemo}
      onChange={(e) => {
        dispatch(
          customizeOperations.onChangeCustomizeMemo({
            customizeMemo: e.target.value,
            rowIndex: row.index,
          })
        )
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
