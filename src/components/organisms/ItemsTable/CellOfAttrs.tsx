/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { CellProps } from "react-table"
import { getAttrComponent } from "src/components/atoms/Attributes"
import { ItemsTableRow } from "src/components/organisms/ItemsTable/Table"

type OwnProps = {
  children?: never
} & CellProps<ItemsTableRow>

export const CellOfAttrs: React.FC<OwnProps> = ({ row }) => {
  const Attr = getAttrComponent(row.original.attribute)

  return (
    <div css={root}>
      <Attr />
    </div>
  )
}

const root = css`
  text-align: center;
`
