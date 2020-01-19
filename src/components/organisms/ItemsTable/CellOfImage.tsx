/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch } from "react-redux"
import { CellProps } from "react-table"
import { EquipmentImg } from "src/components/atoms/EquipmentImg"
import { ItemsTableRow } from "src/components/organisms/ItemsTable/Table"
import { customizeOperations } from "src/store/customize"

type OwnProps = {
  children?: never
} & CellProps<ItemsTableRow>

export const CellOfImage: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()

  return (
    <div css={root}>
      <button
        css={imgWrapper}
        // 「所持数」入力にのみ tab を当てて、簡単に入力できるようにするため
        tabIndex={-1}
        onClick={() =>
          dispatch(customizeOperations.selectEquipment(row.original.id))
        }
      >
        <EquipmentImg imgCss={imgCss} equipment={row.original} />
      </button>
    </div>
  )
}

const root = css``

const imgWrapper = css`
  cursor: pointer;
  padding: unset;
`

const imgCss = css`
  width: 48px;
`
