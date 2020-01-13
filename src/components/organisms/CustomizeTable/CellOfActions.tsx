/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch } from "react-redux"
import { CellProps } from "react-table"
import { CustomizeRecord } from "src/domain/model/CustomizeRecord"
import { customizeOperations } from "src/store/customize"

type OwnProps = CellProps<CustomizeRecord> & {
  children?: never
}

export const CellOfActions: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()

  return (
    <div css={root}>
      <button
        onClick={() => dispatch(customizeOperations.deleteRow(row.index))}
      >
        削除
      </button>
      <button onClick={() => dispatch(customizeOperations.copyRow(row.index))}>
        コピー
      </button>
    </div>
  )
}

const root = css``
