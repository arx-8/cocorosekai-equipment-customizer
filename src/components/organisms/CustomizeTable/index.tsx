/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { Table } from "src/components/organisms/CustomizeTable/Table"

type OwnProps = {
  children?: never
}

export const CustomizeTable: React.FC<OwnProps> = () => {
  return (
    <div css={root}>
      <Table />
    </div>
  )
}

const root = css``
