/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import NoImageImg from "src/assets/NoImage.jpg"
import { Equipment } from "src/domain/model/Equipment"

type OwnProps = {
  children?: never
  equipment: Equipment
}

export const EquipmentImg: React.FC<OwnProps> = ({ equipment }) => {
  return (
    <div css={root}>
      {equipment.imageUrl == null ? (
        <img css={imgCss} src={NoImageImg} alt="NoImageImg" />
      ) : (
        <img css={imgCss} src={equipment.imageUrl} alt={equipment.rawName} />
      )}
      <span css={plus}>{"+".repeat(equipment.enhancementsNum)}</span>
    </div>
  )
}

const root = css`
  position: relative;
`

const plus = css`
  position: absolute;
  bottom: 0;
  right: 0;

  color: #27279f;
  font-weight: bolder;
  font-size: x-large;
`

const imgCss = css`
  width: 56px;
`
