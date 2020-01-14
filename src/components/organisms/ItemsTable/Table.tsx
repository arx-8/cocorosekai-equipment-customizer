/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { Fragment } from "react"
import { useBlockLayout, useFilters, useSortBy, useTable } from "react-table"
import { data } from "src/assets/data"
import { NumberRangeColumnFilter } from "src/components/molecules/NumberRangeColumnFilter"
import { CellOfAttrs } from "src/components/organisms/ItemsTable/CellOfAttrs"
import { CellOfImage } from "src/components/organisms/ItemsTable/CellOfImage"
import { Equipment, SpecialEffect } from "src/domain/model/Equipment"
import {
  ColumnInstanceOverride,
  ColumnOptionsOverride,
  TableHeaderPropsReal,
  TableInstanceOverride,
} from "src/types/reactTableUtils"

type OwnProps = {
  children?: never
}

const columns: ColumnOptionsOverride<Equipment>[] = [
  {
    Header: "ID",
    accessor: "id",
    width: 40,
  },
  {
    Header: "選択",
    Cell: CellOfImage,
    width: 64,
  },
  {
    Header: "名前",
    accessor: "rawName",
    width: 240,
  },
  {
    Header: "装備コスト",
    accessor: "equipCost",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    Header: "属性",
    accessor: "attribute",
    Cell: CellOfAttrs,
    width: 64,
  },
  {
    Header: "HP",
    accessor: "statuses.hp",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    Header: "物理 攻撃",
    accessor: "statuses.physicalAtk",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    Header: "物理 防御",
    accessor: "statuses.physicalDef",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    Header: "魔法 攻撃",
    accessor: "statuses.magicAtk",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    Header: "魔法 防御",
    accessor: "statuses.magicDef",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    Header: "特殊効果",
    accessor: "specialEffects",
    // TODO Array なので sort できない
    Cell: (p) => {
      const v = p.cell.value as SpecialEffect[]
      return v.map((e) => e.rawText).join(",")
    },
    width: 240,
  },
]

const defaultColumn: Partial<ColumnOptionsOverride<Equipment>> = {
  // defaultCanFilter が必ず true (必ず Filter が描画される) バグがあるっぽい
  // そのため、 default で Filter を定義しておく
  Filter: <Fragment />,
  sortDescFirst: true,
}

export const Table: React.FC<OwnProps> = () => {
  // Use the state and functions returned from useTable to build your UI
  const {
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
  ) as TableInstanceOverride<Equipment>

  // Render the UI for your table
  return (
    <table {...getTableProps()} css={root}>
      <thead>
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-key
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((_column) => {
              const column = _column as ColumnInstanceOverride<Equipment>

              // <th> 全体が onClick に反応すると邪魔なため
              const { onClick, key, ...rest } = column.getHeaderProps(
                column.getSortByToggleProps()
              ) as TableHeaderPropsReal

              return (
                <th key={key} {...rest}>
                  {/* TODO どう正しく解消すべきかわからん */}
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                  <div onClick={onClick} role="button" tabIndex={-1}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted && (column.isSortedDesc ? " 🔽" : " 🔼")}
                    </span>
                  </div>
                  {column.canFilter && <div>{column.render("Filter")}</div>}
                </th>
              )
            })}
          </tr>
        ))}
        <tr>
          <th css={recordsCounter}>Hits: {rows.length}</th>
        </tr>
      </thead>

      <tbody {...getTableBodyProps()} css={tbodyCss}>
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

  thead,
  tbody {
    display: block;
  }

  tbody {
    overflow-x: hidden;
    overflow-y: scroll;
    /* テーブル全体の高さ */
    height: 320px;
  }

  th,
  td {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`

const recordsCounter = css`
  text-align: left;

  /* 
  ヘッダのスクロール固定のため、blockにしている
  そのせいで、<th colSpan={flatColumns.length} が効かない
  そのため、ここだけ特別扱い
   */
  border: unset !important;
`

const tbodyCss = css`
  border-top: solid 1px black;
`
