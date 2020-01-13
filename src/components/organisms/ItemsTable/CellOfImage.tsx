/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch } from "react-redux"
import { CellProps } from "react-table"
import NoImageImg from "src/assets/NoImage.jpg"
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
        {row.original.imageUrl == null ? (
          <img css={imgCss} src={NoImageImg} alt="NoImageImg" />
        ) : (
          <img
            css={imgCss}
            src={row.original.imageUrl}
            alt={row.original.rawName}
          />
        )}
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
  width: 56px;
`
