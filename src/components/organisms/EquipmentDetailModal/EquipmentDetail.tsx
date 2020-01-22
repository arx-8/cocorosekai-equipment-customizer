/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import NoImageImg from "src/assets/NoImage.jpg"
import { getAttrComponent } from "src/components/atoms/Attributes"
import { HeartIcon } from "src/components/atoms/icons/HeartIcon"
import { ShieldIcon } from "src/components/atoms/icons/ShieldIcon"
import { SwordIcon } from "src/components/atoms/icons/SwordIcon"
import { WandIcon } from "src/components/atoms/icons/WandIcon"
import { Equipment } from "src/domain/model/Equipment"

type OwnProps = {
  children?: never
  eq: Equipment
}

export const EquipmentDetail: React.FC<OwnProps> = ({ eq }) => {
  const Attr = getAttrComponent(eq.attribute)

  return (
    <div css={root}>
      <div css={head}>
        <img
          css={[imgCss, padding]}
          src={eq.imageUrl || NoImageImg}
          alt={eq.rawName}
        />
        <span css={padding}></span>
        <Attr />
        <span css={padding}></span>
        <span css={[title, padding]}>{eq.rawName}</span>
      </div>
      <table css={tableCss}>
        <tbody>
          <tr>
            <td css={rowDesc}>装備コスト</td>
            <td>{eq.equipCost}</td>
          </tr>
          <tr>
            <td css={rowDesc}>
              HP <HeartIcon width={16} height={16} />
            </td>
            <td>{eq.statuses.hp}</td>
          </tr>
          <tr>
            <td css={rowDesc}>
              物理 攻撃 <SwordIcon width={16} height={16} />
            </td>
            <td>{eq.statuses.physicalAtk}</td>
          </tr>
          <tr>
            <td css={rowDesc}>
              物理 防御 <ShieldIcon width={16} height={16} color="red" />
            </td>
            <td>{eq.statuses.physicalDef}</td>
          </tr>
          <tr>
            <td css={rowDesc}>
              魔法 攻撃 <WandIcon width={16} height={16} />
            </td>
            <td>{eq.statuses.magicAtk}</td>
          </tr>
          <tr>
            <td css={rowDesc}>
              魔法 防御 <ShieldIcon width={16} height={16} color="blue" />
            </td>
            <td>{eq.statuses.magicDef}</td>
          </tr>
          <tr>
            <td css={rowDesc}>特殊効果</td>
            <td css={specialEffect}>
              {eq.specialEffects.map((se) => se.rawText).join("\n") || "(なし)"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const root = css``

const head = css`
  height: 48px;
  display: flex;
  align-items: center;
`

const imgCss = css`
  height: inherit;
`

const title = css`
  font-size: larger;
  font-weight: bold;
`

const padding = css`
  padding-left: 4px;
`

const tableCss = css`
  width: 100%;

  /* セルの線を重ねる */
  border-collapse: collapse;

  th,
  td {
    border: solid 1px;
    padding: 4px;
  }
`

const rowDesc = css`
  background: silver;
  width: 104px;
`

const specialEffect = css`
  white-space: pre-wrap;
`
