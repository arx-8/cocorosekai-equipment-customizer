/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { FilterRendererProps } from "src/types/reactTableUtils"

type OwnProps = {
  children?: never
} & FilterRendererProps

export const TextColumnFilter: React.FC<OwnProps> = ({ column }) => {
  const { filterValue, setFilter } = column

  return (
    <input
      css={[root, filterValue && hasValue]}
      onChange={(e) => {
        // Set undefined to remove the filter entirely
        setFilter(e.target.value || undefined)
      }}
      placeholder={`あいまい検索...`}
      value={filterValue || ""}
    />
  )
}

const root = css`
  width: 90%;
`

const hasValue = css`
  background: yellow;
`
