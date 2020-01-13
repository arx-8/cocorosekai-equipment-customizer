/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { CellProps } from "react-table"
import SetAreaImg from "src/assets/SetArea.jpg"
import { CustomizeResult } from "src/domain/model/CustomizeResult"
import { range } from "src/utils/ArrayUtils"

const MAX_EQUIPMENTS = 5

type OwnProps = CellProps<CustomizeResult> & {
  children?: never
}

export const CellOfCustomize: React.FC<OwnProps> = ({ row }) => {
  const equippedIds = row.original.equippedIds
  return (
    <div css={root}>
      {/* 装備済み */}
      {equippedIds.map((eId) => {
        return <div key={eId}>{eId}</div>
      })}
      {/* 未装備 */}
      {range(0, MAX_EQUIPMENTS - equippedIds.length).map((idx) => {
        return (
          <div key={idx}>
            <img css={imgCss} src={SetAreaImg} alt="SetAreaImg" />
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

const imgCss = css`
  width: 56px;
`
