import React, { Fragment } from "react"
import {
  ColumnInstance,
  useBlockLayout,
  useFilters,
  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  useSortBy,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  useTable,
  UseTableColumnOptions,
} from "react-table"
import { data } from "src/assets/data"
import { CellOfAttrs } from "src/components/organisms/ItemsTable/CellOfAttrs"
import { CellOfImage } from "src/components/organisms/ItemsTable/CellOfImage"
import { Equipment, SpecialEffect } from "src/domain/model/Equipment"

type OwnProps = {
  children?: never
}

/**
 * 使う PluginHook によって、型を合成する必要がある
 */
type ColumnInstanceOverride = ColumnInstance<Equipment> &
  UseSortByColumnProps<Equipment> &
  UseFiltersColumnProps<Equipment>

type ColumnOptionsOverride = UseTableColumnOptions<Equipment> &
  UseFiltersColumnOptions<Equipment> &
  UseSortByColumnOptions<Equipment>

const columns: ColumnOptionsOverride[] = [
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
    width: 56,
  },
  {
    Header: "属性",
    accessor: "attribute",
    Cell: CellOfAttrs,
    width: 56,
  },
  {
    Header: "HP",
    accessor: "statuses.hp",
    width: 56,
  },
  {
    Header: "物理 攻撃",
    accessor: "statuses.physicalAtk",
    width: 56,
  },
  {
    Header: "物理 防御",
    accessor: "statuses.physicalDef",
    width: 56,
  },
  {
    Header: "魔法 攻撃",
    accessor: "statuses.magicAtk",
    width: 56,
  },
  {
    Header: "魔法 防御",
    accessor: "statuses.magicDef",
    width: 56,
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

const defaultColumn: Partial<ColumnOptionsOverride> = {
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
  } = useTable<Equipment>(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout,
    useFilters,
    useSortBy
  )

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-key
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((_column) => {
              const column = _column as ColumnInstanceOverride
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
