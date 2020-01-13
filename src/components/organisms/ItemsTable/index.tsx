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
  padding-top: 16px;

  table {
    border: 1px solid black;
  }

  thead,
  tbody {
    display: block;
  }

  tbody {
    overflow-x: hidden;
    overflow-y: scroll;
    /* テーブル全体の高さ */
    height: 320px;
  }

  th,
  td {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`
