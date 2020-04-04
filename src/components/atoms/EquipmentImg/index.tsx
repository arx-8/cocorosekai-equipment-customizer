/** @jsx jsx */
import { SerializedStyles, css, jsx } from "@emotion/core"
import React from "react"
import NoImageImg from "src/assets/NoImage.jpg"
import { Equipment } from "src/domain/model/Equipment"

type OwnProps = {
  children?: never
  equipment: Equipment
  imgCss: SerializedStyles
}

export const EquipmentImg: React.FC<OwnProps> = ({ equipment, imgCss }) => {
  return (
    <div css={root}>
      <img
        css={[imgCssBase, imgCss]}
        src={equipment.imageUrl || NoImageImg}
        alt={equipment.rawName}
      />
      <span css={plus}>{"+".repeat(equipment.enhancementsNum)}</span>
    </div>
  )
}

const root = css`
  position: relative;
`

const imgCssBase = css`
  /** 画像なし代替テキストの文字は他で読める・レイアウト崩れになるため、十分小さい方がよい */
  font-size: xx-small;
`

const plus = css`
  position: absolute;
  bottom: 4px;
  right: 0;

  background: rgba(0, 0, 0, 0.5);
  color: whitesmoke;
  font-weight: bolder;
  writing-mode: vertical-rl;
  font-size: larger;
`
