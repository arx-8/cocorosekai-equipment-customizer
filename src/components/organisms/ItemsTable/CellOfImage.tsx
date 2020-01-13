/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch } from "react-redux"
import { CellProps } from "react-table"
import { EquipmentImg } from "src/components/atoms/EquipmentImg"
import { Equipment } from "src/domain/model/Equipment"
import { customizeOperations } from "src/store/customize"

type OwnProps = CellProps<Equipment> & {
  children?: never
}

export const CellOfImage: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()

  return (
    <div css={root}>
      <button
        css={imgWrapper}
        onClick={() =>
          dispatch(customizeOperations.selectEquipment(row.original.id))
        }
      >
        <EquipmentImg equipment={row.original} />
      </button>
    </div>
  )
}

const root = css``

const imgWrapper = css`
  cursor: pointer;
  padding: unset;
`
