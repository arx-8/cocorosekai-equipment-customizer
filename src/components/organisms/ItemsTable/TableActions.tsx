/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { leftPad, noticeColor } from "src/components/styles/styles"
import { customizeSelectors } from "src/store/customize"
import { userInfoOperations } from "src/store/userInfo"

type OwnProps = {
  children?: never
  onClearFilter: () => void
}

export const TableActions: React.FC<OwnProps> = ({ onClearFilter }) => {
  const dispatch = useDispatch()
  const isCurrentRowCheckStock = useSelector(
    customizeSelectors.isCurrentRowCheckStock
  )

  return (
    <div css={root}>
      <span>
        <button onClick={onClearFilter}>絞込みリセット</button>
      </span>
      <span css={leftPad}></span>
      <button
        css={deleteBtn}
        onClick={() => dispatch(userInfoOperations.resetAllStockNums())}
      >
        所持数のリセット
      </button>
      <span css={leftPad}></span>
      {isCurrentRowCheckStock && (
        <span css={notice}>
          ※「所持数チェック」ありのため、装備できないものは装備不可の表示になっています。
        </span>
      )}
    </div>
  )
}

const root = css``

const deleteBtn = css`
  color: red;
`

const notice = css`
  color: ${noticeColor};
`
