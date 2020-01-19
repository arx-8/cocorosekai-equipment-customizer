/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch } from "react-redux"
import { Table } from "src/components/organisms/CustomizeTable/Table"
import { EquipmentDetailModal } from "src/components/organisms/EquipmentDetailModal"
import { customizeOperations } from "src/store/customize"

type OwnProps = {
  children?: never
}

export const CustomizeTable: React.FC<OwnProps> = () => {
  const dispatch = useDispatch()

  return (
    <div css={root}>
      <button onClick={() => dispatch(customizeOperations.addRow())}>
        追加
      </button>
      <Table />
      <EquipmentDetailModal />
    </div>
  )
}

const root = css`
  padding-top: 8px;
`
