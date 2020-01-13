/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CellProps } from "react-table"
import NoImageImg from "src/assets/NoImage.jpg"
import SetAreaImg from "src/assets/SetArea.jpg"
import {
  CellColIndex,
  CellIndex,
  CustomizeRecord,
} from "src/domain/model/CustomizeRecord"
import { findEquipmentStrict } from "src/domain/model/Equipment"
import { customizeOperations, customizeSelectors } from "src/store/customize"

type OwnProps = CellProps<CustomizeRecord> & {
  children?: never
}

export const CellOfCustomize: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()
  const currentSelected = useSelector(
    customizeSelectors.getCurrentSelectedCellIndex
  )

  const isSelected = useCallback(
    (cellIndex: CellIndex): boolean => {
      return (
        currentSelected.colIndex === cellIndex.colIndex &&
        currentSelected.rowIndex === cellIndex.rowIndex
      )
    },
    [currentSelected.colIndex, currentSelected.rowIndex]
  )

  const equippedIds = row.original.equippedIds

  return (
    <div css={root}>
      {equippedIds.map((eId, _index) => {
        const colIndex = _index as CellColIndex
        const equipment = eId == null ? null : findEquipmentStrict(eId)

        return (
          <button
            key={colIndex}
            css={[
              imgWrapper,
              isSelected({
                colIndex,
                rowIndex: row.index,
              }) && selectedCss,
            ]}
            onClick={() =>
              dispatch(
                customizeOperations.selectEquipmentCell({
                  colIndex,
                  rowIndex: row.index,
                })
              )
            }
          >
            {equipment == null ? (
              <img css={imgCss} src={SetAreaImg} alt="SetAreaImg" />
            ) : equipment.imageUrl == null ? (
              <img
                css={imgCss}
                src={NoImageImg}
                alt={`${eId}:${equipment.rawName}`}
                title={`${eId}:${equipment.rawName}`}
              />
            ) : (
              <img
                css={imgCss}
                src={equipment.imageUrl}
                alt={`${eId}:${equipment.rawName}`}
                title={`${eId}:${equipment.rawName}`}
              />
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

const imgWrapper = css`
  cursor: pointer;
  padding: unset;
`

const selectedCss = css`
  border: solid 2px red;
`

const imgCss = css`
  width: 56px;
`
