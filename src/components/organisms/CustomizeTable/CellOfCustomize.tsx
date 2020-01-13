/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch } from "react-redux"
import { CellProps } from "react-table"
import NoImageImg from "src/assets/NoImage.jpg"
import SetAreaImg from "src/assets/SetArea.jpg"
import { CellColIndex, CustomizeRecord } from "src/domain/model/CustomizeRecord"
import { customizeOperations } from "src/store/customize"

type OwnProps = CellProps<CustomizeRecord> & {
  children?: never
}

export const CellOfCustomize: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()

  const equippedIds = row.original.equippedIds

  return (
    <div css={root}>
      {equippedIds.map((eId, _index) => {
        const colIndex = _index as CellColIndex
        return (
          <button
            key={colIndex}
            onClick={() =>
              dispatch(
                customizeOperations.selectEquipmentCell({
                  colIndex,
                  rowIndex: row.index,
                })
              )
            }
          >
            {eId == null ? (
              <div>
                <img css={imgCss} src={SetAreaImg} alt="SetAreaImg" />
              </div>
            ) : (
              <div>
                <img css={imgCss} src={NoImageImg} alt="NoImageImg" />
                {eId}
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}

const root = css`
  display: flex;
  justify-content: space-around;
`

const imgCss = css`
  width: 56px;
`
