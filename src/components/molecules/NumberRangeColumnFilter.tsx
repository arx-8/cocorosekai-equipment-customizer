/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { FilterRendererProps } from "src/types/reactTableUtils"

type OwnProps = {
  children?: never
} & FilterRendererProps

type FilterValue = [number | undefined, number | undefined]

const initFilterValue: FilterValue = [undefined, undefined]

/**
 * 負数は 0 にして返す
 * 正数はそのまま返す
 */
const preventMinus = (num: number): number => {
  return num < 0 ? 0 : num
}

export const NumberRangeColumnFilter: React.FC<OwnProps> = ({ column }) => {
  const {
    filterValue = initFilterValue,
    preFilteredRows,
    setFilter,
    /**
     * @var {string} id `accessor` value of ColumnOptions
     */
    id,
  } = column

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <div css={root}>
      <input
        value={filterValue[0] || ""}
        type="number"
        onChange={(e) => {
          const val = e.target.value
          setFilter((old: FilterValue = initFilterValue) => [
            val ? preventMinus(parseInt(val, 10)) : undefined,
            old[1],
          ])
        }}
        placeholder={`(${min})`}
      />
      to
      <input
        value={filterValue[1] || ""}
        type="number"
        onChange={(e) => {
          const val = e.target.value
          setFilter((old: FilterValue = initFilterValue) => [
            old[0],
            val ? preventMinus(parseInt(val, 10)) : undefined,
          ])
        }}
        placeholder={`(${max})`}
      />
    </div>
  )
}

const root = css`
  display: flex;
  flex-direction: column;
`
