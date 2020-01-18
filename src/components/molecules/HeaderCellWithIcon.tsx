/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"

type OwnProps = {
  children?: never
  headerName: string
  icon: React.ReactNode
}

export const HeaderCellWithIcon: React.FC<OwnProps> = ({
  headerName,
  icon,
}) => {
  return (
    <span css={root}>
      {headerName} {icon}
    </span>
  )
}

const root = css``
