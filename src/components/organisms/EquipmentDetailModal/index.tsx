/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import Draggable from "react-draggable"
import { useDispatch, useSelector } from "react-redux"
import { EquipmentDetail } from "src/components/organisms/EquipmentDetailModal/EquipmentDetail"
import { customizeOperations, customizeSelectors } from "src/store/customize"
import { RootState } from "src/store/store"

type OwnProps = {
  children?: never
}

const DRAGGABLE_AREA_CLS_NAME = "draggable-area"

export const EquipmentDetailModal: React.FC<OwnProps> = () => {
  const dispatch = useDispatch()

  const eq = useSelector(customizeSelectors.getCurrentSelectedCellEquipment)
  const isMini = useSelector(
    (state: RootState) => state.customizeState.isMinimizedEquipmentDetailModal
  )

  return (
    <Draggable handle={`.${DRAGGABLE_AREA_CLS_NAME}`}>
      <div css={root}>
        <div css={header}>
          <span className={DRAGGABLE_AREA_CLS_NAME} css={draggableCss}>
            装備詳細
          </span>
          <button
            onClick={() => {
              dispatch(
                customizeOperations.toggleIsMinimizedEquipmentDetailModal()
              )
            }}
          >
            {isMini ? "■" : "－"}
          </button>
        </div>
        {!isMini && eq && <EquipmentDetail eq={eq} />}
      </div>
    </Draggable>
  )
}

const root = css`
  width: 280px;
  background: white;
  border: solid 1px navy;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.6);

  /* 適当に気付きやすい位置に出しておく */
  position: absolute;
  top: 50%;
  left: 50%;
  margin: auto;
`

const header = css`
  display: flex;
  background: silver;
  font-size: larger;
  font-weight: bolder;
`

const draggableCss = css`
  cursor: move;
  flex-grow: 1;
`
