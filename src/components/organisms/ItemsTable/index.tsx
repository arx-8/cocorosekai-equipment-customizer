/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { Table } from "src/components/organisms/ItemsTable/Table"

type OwnProps = {
  children?: never
}

export const ItemsTable: React.FC<OwnProps> = () => {
  return (
    <div css={root}>
      <Table />
    </div>
  )
}

const root = css`
  padding-top: 8px;
`
