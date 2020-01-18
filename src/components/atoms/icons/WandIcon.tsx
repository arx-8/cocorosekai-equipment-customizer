/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { ReactComponent as Svg } from "src/assets/wand.svg"
import { CastAny } from "src/types/tsUtils"

type OwnProps = {
  children?: never
} & React.SVGProps<CastAny>

export const WandIcon: React.FC<OwnProps> = (props) => {
  return <Svg {...props} css={root} />
}

const root = css`
  g {
    /* color で上書き可能にするため */
    fill: currentColor;
  }
`
