/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { Fragment, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CellProps } from "react-table"
import NoImageImg from "src/assets/NoImage.jpg"
import SetAreaImg from "src/assets/SetArea.jpg"
import {
  CellColIndex,
  CellIndex,
  CustomizeRecord,
} from "src/domain/model/CustomizeRecord"
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
            <div
              css={
                isSelected({
                  colIndex,
                  rowIndex: row.index,
                }) && imgWrapper
              }
            >
              {eId == null ? (
                <img css={imgCss} src={SetAreaImg} alt="SetAreaImg" />
              ) : (
                <Fragment>
                  <img css={imgCss} src={NoImageImg} alt="NoImageImg" />
                  {/* TODO for debug */}
                  {eId}
                </Fragment>
              )}
            </div>
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
  border: solid 1px red;
`

const imgCss = css`
  width: 56px;
`
