/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { Fragment, useMemo } from "react"
import { useSelector } from "react-redux"
import { useBlockLayout, useFilters, useSortBy, useTable } from "react-table"
import { NumberRangeColumnFilter } from "src/components/molecules/NumberRangeColumnFilter"
import { CellOfActions } from "src/components/organisms/CustomizeTable/CellOfActions"
import { CellOfAttrs } from "src/components/organisms/CustomizeTable/CellOfAttrs"
import { CellOfCustomize } from "src/components/organisms/CustomizeTable/CellOfCustomize"
import { CellOfSpecialEffects } from "src/components/organisms/CustomizeTable/CellOfSpecialEffects"
import { CustomizeRecord } from "src/domain/model/CustomizeRecord"
import { customizeSelectors } from "src/store/customize"
import {
  ColumnInstanceOverride,
  ColumnOptionsOverride,
  TableInstanceOverride,
} from "src/types/reactTableUtils"

type OwnProps = {
  children?: never
}

const createColumnOptionsOuter = (): ColumnOptionsOverride<
  CustomizeRecord
>[] => {
  return [
    {
      Header: "No.",
      Cell: (p) => p.row.index + 1,
      width: 40,
    },
    {
      Header: "操作",
      Cell: CellOfActions,
      width: 72,
    },
    {
      Header: "装備編成",
      accessor: "customize",
      width: 408,
      Cell: CellOfCustomize,
    },
    // {
    //   Header: "参考総合値",
    //   accessor: "totalSpecValue",
    //   width: 56,
    // },
    {
      Header: "属性",
      accessor: "mixedAttributes",
      // TODO Array なので sort できない
      Cell: CellOfAttrs,
      width: 56,
    },
    {
      Header: "装備コスト",
      accessor: "totalEquipCost",
      width: 64,
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      Header: "HP",
      accessor: "totalStatuses.hp",
      width: 64,
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      Header: "物理 攻撃",
      accessor: "totalStatuses.physicalAtk",
      width: 64,
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      Header: "物理 防御",
      accessor: "totalStatuses.physicalDef",
      width: 64,
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      Header: "魔法 攻撃",
      accessor: "totalStatuses.magicAtk",
      width: 64,
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      Header: "魔法 防御",
      accessor: "totalStatuses.magicDef",
      width: 64,
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      Header: "特殊効果",
      accessor: "mixedSpecialEffects",
      // TODO Array なので sort できない
      Cell: CellOfSpecialEffects,
      width: 240,
    },
  ]
}

const defaultColumn: Partial<ColumnOptionsOverride<CustomizeRecord>> = {
  // defaultCanFilter が必ず true (必ず Filter が描画される) バグがあるっぽい
  // そのため、 default で Filter を定義しておく
  Filter: <Fragment />,
  sortDescFirst: true,
}

export const Table: React.FC<OwnProps> = () => {
  const data = useSelector(customizeSelectors.getCustomizeRecords)

  const columns = useMemo(() => {
    return createColumnOptionsOuter()
  }, [])

  // Use the state and functions returned from useTable to build your UI
  const {
    flatColumns,
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout,
    useFilters,
    useSortBy
  ) as TableInstanceOverride<CustomizeRecord>

  // Render the UI for your table
  return (
    <table {...getTableProps()} css={root}>
      <thead>
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-key
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((_column) => {
              const column = _column as ColumnInstanceOverride<CustomizeRecord>
              return (
                // eslint-disable-next-line react/jsx-key
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted && (column.isSortedDesc ? " 🔽" : " 🔼")}
                  </span>
                  {column.canFilter && <div>{column.render("Filter")}</div>}
                </th>
              )
            })}
          </tr>
        ))}
        <tr>
          <th colSpan={flatColumns.length} css={recordsCounter}>
            Hits: {rows.length}
          </th>
        </tr>
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            // eslint-disable-next-line react/jsx-key
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                // eslint-disable-next-line react/jsx-key
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const root = css`
  table {
    border: 1px solid black;
  }

  th,
  td {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`

const recordsCounter = css`
  text-align: left;
`
