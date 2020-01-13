/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { CellProps } from "react-table"
import { getAttrComponent } from "src/components/atoms/Attributes"
import { CustomizeRecord } from "src/domain/model/CustomizeRecord"

type OwnProps = CellProps<CustomizeRecord> & {
  children?: never
}

export const CellOfAttrs: React.FC<OwnProps> = ({ row }) => {
  return (
    <div css={root}>
      {row.original.mixedAttributes.map((attr) => {
        const Attr = getAttrComponent(attr)
        return <Attr key={attr} />
      })}
    </div>
  )
}

const root = css``
