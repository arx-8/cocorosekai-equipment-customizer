/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { Attribute } from "src/domain/model/Equipment"

type OwnProps = {
  children?: never
}

const common = css`
  color: white;
`

export const AttrVoid: React.FC<OwnProps> = () => {
  return <span css={[common, rootVoid]}>無</span>
}

const rootVoid = css`
  background: silver;
`

export const AttrFire: React.FC<OwnProps> = () => {
  return <span css={[common, rootFire]}>火</span>
}

const rootFire = css`
  background: red;
`

export const AttrWater: React.FC<OwnProps> = () => {
  return <span css={[common, rootWater]}>水</span>
}

const rootWater = css`
  background: blue;
`

export const AttrWind: React.FC<OwnProps> = () => {
  return <span css={[common, rootWind]}>風</span>
}

const rootWind = css`
  background: green;
`

export const AttrLight: React.FC<OwnProps> = () => {
  return <span css={[common, rootLight]}>光</span>
}

const rootLight = css`
  background: goldenrod;
`
export const AttrDarkness: React.FC<OwnProps> = () => {
  return <span css={[common, rootDarkness]}>闇</span>
}

const rootDarkness = css`
  background: black;
`

const pairs: Record<Attribute, React.FC<OwnProps>> = {
  darkness: AttrDarkness,
  fire: AttrFire,
  light: AttrLight,
  void: AttrVoid,
  water: AttrWater,
  wind: AttrWind,
}

export const getAttrComponent = (attrValue: Attribute): React.FC<OwnProps> => {
  return pairs[attrValue]
}
