/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"

type OwnProps = {
  children?: never
  enabled: boolean
}

export const EnableLamp: React.FC<OwnProps> = ({ enabled }) => {
  if (enabled) {
    return <span css={enabledCss}>●</span>
  }

  return <span css={disabledCss}>●</span>
}

const enabledCss = css`
  color: limegreen;
`

const disabledCss = css`
  color: gray;
`
