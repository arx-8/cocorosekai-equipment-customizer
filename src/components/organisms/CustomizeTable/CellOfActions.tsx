/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { CellProps } from "react-table"
import { CustomizeRecord } from "src/domain/model/CustomizeRecord"

type OwnProps = CellProps<CustomizeRecord> & {
  children?: never
}

export const CellOfActions: React.FC<OwnProps> = ({ row }) => {
  // TODO この値で正しくその位置特定できる？
  const v = row.index
  return (
    <div css={root}>
      <button
        onClick={() => {
          console.log(v)
        }}
      >
        削除
      </button>
      <button
        onClick={() => {
          console.log(v)
        }}
      >
        コピー
      </button>
    </div>
  )
}

const root = css`
  display: flex;
  justify-content: space-around;
`
