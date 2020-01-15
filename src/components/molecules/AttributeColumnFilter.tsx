/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { getAttrComponent } from "src/components/atoms/Attributes"
import { Attribute, AttributeValues } from "src/domain/model/Equipment"
import { FilterRendererProps } from "src/types/reactTableUtils"
import { toggleValues } from "src/utils/arrayUtils"

type OwnProps = {
  children?: never
} & FilterRendererProps

export const AttributeColumnFilter: React.FC<OwnProps> = ({ column }) => {
  const filterValues: Attribute[] = column.filterValue || []
  const setFilter: (value: Attribute[]) => void = column.setFilter

  return (
    <div css={root}>
      {Object.values(AttributeValues).map((v) => {
        const Attr = getAttrComponent(v)
        return (
          <div key={v}>
            <label css={clickable} htmlFor={v}>
              <input
                id={v}
                type="checkbox"
                defaultChecked={filterValues.includes(v)}
                onClick={() => {
                  setFilter(toggleValues(filterValues, v))
                }}
              />
              <Attr />
            </label>
          </div>
        )
      })}
    </div>
  )
}

const root = css``

const clickable = css`
  cursor: pointer;
`
