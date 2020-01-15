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
        // (不十分なユニーク値だが) 共通化してるため label for の衝突回避のための column.id
        const labelFor = `${column.id}:${v}`
        const Attr = getAttrComponent(v)
        return (
          <div key={v}>
            <label css={clickable} htmlFor={labelFor}>
              <input
                id={labelFor}
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
