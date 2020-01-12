import React from "react"
import { Column, useBlockLayout, useTable } from "react-table"
import { data } from "src/assets/data"
import { Equipment, SpecialEffect } from "src/domain/model/Equipment"

type OwnProps = {
  children?: never
  // columns: Column<Equipment>[]
  // data: Equipment[]
}

const columns: Column<Equipment>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "名前",
    accessor: "rawName",
  },
  {
    Header: "装備コスト",
    accessor: "equipCost",
  },
  {
    Header: "属性",
    accessor: "attribute",
  },
  {
    Header: "HP",
    accessor: "statuses.hp",
  },
  {
    Header: "物理 攻撃",
    accessor: "statuses.physicalAtk",
  },
  {
    Header: "物理 防御",
    accessor: "statuses.physicalDef",
  },
  {
    Header: "魔法 攻撃",
    accessor: "statuses.magicAtk",
  },
  {
    Header: "魔法 防御",
    accessor: "statuses.magicDef",
  },
  {
    Header: "特殊効果",
    accessor: "specialEffects",
    Cell: (p) => {
      const v = p.cell.value as SpecialEffect[]
      return v.map((e) => e.rawText).join(",")
    },
  },
]

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
    },
    useBlockLayout
  )

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-key
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // eslint-disable-next-line react/jsx-key
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
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
