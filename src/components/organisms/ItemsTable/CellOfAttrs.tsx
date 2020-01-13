/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { CellProps } from "react-table"
import { getAttrComponent } from "src/components/atoms/Attributes"
import { Equipment } from "src/domain/model/Equipment"

type OwnProps = CellProps<Equipment> & {
  children?: never
}

export const CellOfAttrs: React.FC<OwnProps> = ({ row }) => {
  const Attr = getAttrComponent(row.original.attribute)

  return (
    <div css={root}>
      <Attr />
    </div>
  )
}

const root = css``
