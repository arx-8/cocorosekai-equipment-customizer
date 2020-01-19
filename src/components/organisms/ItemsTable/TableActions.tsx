/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch } from "react-redux"
import { userInfoOperations } from "src/store/userInfo"

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
          css={deleteBtn}
          onClick={() => dispatch(userInfoOperations.resetAllStockNums())}
        >
          所持数のリセット
        </button>
      </span>
    </div>
  )
}

const root = css``

const separator = css`
  padding-left: 8px;
`

const deleteBtn = css`
  color: red;
`
