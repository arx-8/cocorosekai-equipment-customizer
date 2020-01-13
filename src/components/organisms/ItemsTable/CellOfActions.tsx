/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch } from "react-redux"
import { CellProps } from "react-table"
import { Equipment } from "src/domain/model/Equipment"
import { customizeOperations } from "src/store/customize"

type OwnProps = CellProps<Equipment> & {
  children?: never
}

export const CellOfActions: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()

  return (
    <div css={root}>
      <button
        onClick={() =>
          dispatch(customizeOperations.selectEquipment(row.original.id))
        }
      >
        装備する
      </button>
    </div>
  )
}

const root = css`
  display: flex;
  justify-content: space-around;
`
