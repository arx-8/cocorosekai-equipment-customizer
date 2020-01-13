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
      <button>追加</button>
    </div>
  )
}

const root = css``
