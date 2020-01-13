/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { CellProps } from "react-table"
import { CustomizeResult } from "src/domain/model/CustomizeResult"

type OwnProps = CellProps<CustomizeResult> & {
  children?: never
}

export const CellOfSpecialEffects: React.FC<OwnProps> = ({ row }) => {
  const v = row.original.mixedSpecialEffects
  return (
    <div css={root}>
      {v.map((e) => (
        <div key={e.rawText}>{e.rawText}</div>
      ))}
    </div>
  )
}

const root = css``
