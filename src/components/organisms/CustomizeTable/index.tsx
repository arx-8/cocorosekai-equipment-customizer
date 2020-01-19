/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { Table } from "src/components/organisms/CustomizeTable/Table"
import { EquipmentDetailModal } from "src/components/organisms/EquipmentDetailModal"

type OwnProps = {
  children?: never
}

export const CustomizeTable: React.FC<OwnProps> = () => {
  return (
    <div css={root}>
      <Table />
      <EquipmentDetailModal />
    </div>
  )
}

const root = css`
  padding-top: 8px;
`
