/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch } from "react-redux"
import { customizeOperations } from "src/store/customize"

type OwnProps = {
  children?: never
  onClearFilter: () => void
}

export const TableActions: React.FC<OwnProps> = ({ onClearFilter }) => {
  const dispatch = useDispatch()

  return (
    <div css={root}>
      <span>
        <button onClick={onClearFilter}>絞込みリセット</button>
      </span>
      <span css={separator}>
        <button
          onClick={() =>
            dispatch(customizeOperations.sortAllCustomizedEquipments())
          }
        >
          全編成のソート
        </button>
      </span>
      <span css={separator}>
        <button onClick={() => dispatch(customizeOperations.addRow())}>
          追加
        </button>
      </span>
    </div>
  )
}

const root = css``

const separator = css`
  padding-left: 8px;
`
