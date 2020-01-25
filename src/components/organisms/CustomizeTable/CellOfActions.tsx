/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { CellProps } from "react-table"
import { EnableLamp } from "src/components/atoms/EnableLamp"
import { disabledColor } from "src/components/styles/styles"
import { CustomizeRecord } from "src/domain/model/CustomizeRecord"
import { customizeOperations, customizeSelectors } from "src/store/customize"
import { RootState } from "src/store/store"

type OwnProps = CellProps<CustomizeRecord> & {
  children?: never
}

export const CellOfActions: React.FC<OwnProps> = ({ row }) => {
  const dispatch = useDispatch()
  const { isCheckStock, isProtected } = useSelector((state: RootState) =>
    customizeSelectors.getRowStatuses(state, row.index)
  )

  return (
    <div css={[root, isProtected && protectedCss]}>
      <div>
        <button
          onClick={() =>
            dispatch(customizeOperations.toggleProtectRow(row.index))
          }
        >
          <EnableLamp enabled={isProtected} />
          保護
        </button>
        <button
          onClick={() =>
            dispatch(customizeOperations.toggleCheckStock(row.index))
          }
        >
          <EnableLamp enabled={isCheckStock} />
          所持チェック
        </button>
        <button
          onClick={() => dispatch(customizeOperations.copyRow(row.index))}
        >
          コピー
        </button>
      </div>
      <div>
        <button
          css={!isProtected && deleteBtn}
          disabled={isProtected}
          onClick={() => dispatch(customizeOperations.deleteRow(row.index))}
        >
          削除
        </button>
      </div>
    </div>
  )
}

const root = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

const protectedCss = css`
  background: ${disabledColor};
`

const deleteBtn = css`
  color: red;
`
