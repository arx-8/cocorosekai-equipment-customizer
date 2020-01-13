/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { CustomizeTable } from "src/components/organisms/CustomizeTable"
import { ItemsTable } from "src/components/organisms/ItemsTable"

type OwnProps = {
  children?: never
}

export const App: React.FC<OwnProps> = () => {
  return (
    <div css={root}>
      ©2019 Summer Vacation Inc. All rights reserved.
      <ItemsTable />
      <CustomizeTable />
    </div>
  )
}

const root = css``
