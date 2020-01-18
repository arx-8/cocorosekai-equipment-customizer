/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CellProps } from "react-table"
import SetAreaImg from "src/assets/SetArea.jpg"
import { EquipmentImg } from "src/components/atoms/EquipmentImg"
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
          <div css={btnWrapper} key={colIndex}>
            <button
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
              ) : (
                <EquipmentImg imgCss={imgCss} equipment={equipment} />
              )}
            </button>

            <button
              css={remove}
              onClick={() =>
                dispatch(
                  customizeOperations.removeEquipment({
                    colIndex,
                    rowIndex: row.index,
                  })
                )
              }
            >
              ×
            </button>
          </div>
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
  border: solid 4px red;
`

const imgCss = css`
  width: 48px;
`

const btnWrapper = css`
  position: relative;
`

const remove = css`
  position: absolute;
  top: 0;
  right: 0;

  width: 20px;
  height: 20px;
  font-weight: bolder;
`
