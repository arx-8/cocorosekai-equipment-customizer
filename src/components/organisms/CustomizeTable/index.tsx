/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch } from "react-redux"
import { Table } from "src/components/organisms/CustomizeTable/Table"
import { customizeOperations } from "src/store/customize"

type OwnProps = {
  children?: never
}

export const CustomizeTable: React.FC<OwnProps> = () => {
  const dispatch = useDispatch()

  return (
    <div css={root}>
      <Table />
      <button onClick={() => dispatch(customizeOperations.addRow())}>
        追加
      </button>
    </div>
  )
}

const root = css`
  table {
    border: 1px solid black;
  }

  th,
  td {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`
