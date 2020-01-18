/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { CellProps } from "react-table"
import { CastAny } from "src/types/tsUtils"

type OwnProps = {
  children?: never
} & CellProps<CastAny>

export const PreWrapCell: React.FC<OwnProps> = ({ cell }) => {
  return <span css={root}>{cell.value}</span>
}

const root = css`
  white-space: pre-wrap;
`
