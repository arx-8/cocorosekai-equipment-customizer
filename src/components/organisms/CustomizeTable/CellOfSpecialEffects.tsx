/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { CellProps } from "react-table"
import { CustomizeRecord } from "src/domain/model/CustomizeRecord"

type OwnProps = CellProps<CustomizeRecord> & {
  children?: never
}

export const CellOfSpecialEffects: React.FC<OwnProps> = ({ row }) => {
  const v = row.original.mixedSpecialEffects
  return (
    <div css={root}>
      {v.map((e, index) => (
        // 他にユニーク値がないため
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>{e.rawText}</div>
      ))}
    </div>
  )
}

const root = css``
