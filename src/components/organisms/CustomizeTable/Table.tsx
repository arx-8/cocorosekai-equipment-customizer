import React from "react"
import {
  ColumnInstance,
  useBlockLayout,
  useSortBy,
  UseSortByColumnProps,
  UseSortByOptions,
  useTable,
  UseTableColumnOptions,
} from "react-table"
import { CellOfCustomize } from "src/components/organisms/CustomizeTable/CellOfCustomize"
import { CellOfSpecialEffects } from "src/components/organisms/CustomizeTable/CellOfSpecialEffects"
import { CustomizeResult } from "src/domain/model/CustomizeResult"
import { Attribute } from "src/domain/model/Equipment"
import { FixMeAny } from "src/types/Utils.ts/Utils"

// TODO def
const data: CustomizeResult[] = [
  {
    rowNo: 10 as FixMeAny,
    equippedIds: [1, 2] as FixMeAny,
    totalSpecValue: 10000,
    totalEquipCost: 100 as FixMeAny,
    mixedAttributes: ["darkness"],
    totalStatuses: {
      hp: 100,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 100,
      physicalDef: 10,
    } as FixMeAny,
    mixedSpecialEffects: [
      {
        rawText: "なんたら",
      },
      {
        rawText: "かんたら",
      },
    ],
  },
  {
    rowNo: 22 as FixMeAny,
    equippedIds: [1, 2, 3] as FixMeAny,
    totalSpecValue: 11000,
    totalEquipCost: 200 as FixMeAny,
    mixedAttributes: ["fire", "light"],
    totalStatuses: {
      hp: 500,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 100,
      physicalDef: 10,
    } as FixMeAny,
    mixedSpecialEffects: [],
  },
]

type OwnProps = {
  children?: never
}

/**
 * 使う PluginHook によって、型を合成する必要がある
 */
type ColumnInstanceOverride = ColumnInstance<CustomizeResult> &
  UseSortByColumnProps<CustomizeResult>

type ColumnOptionsOverride = UseTableColumnOptions<CustomizeResult> &
  UseSortByOptions<CustomizeResult>

const columns: ColumnOptionsOverride[] = [
  {
    Header: "No.",
    accessor: "rowNo",
    width: 40,
  },
  {
    Header: "装備編成",
    accessor: "customize",
    width: 300,
    Cell: CellOfCustomize,
  },
  {
    Header: "参考総合値",
    accessor: "totalSpecValue",
  },
  {
    Header: "属性",
    accessor: "mixedAttributes",
    // TODO Array なので sort できない
    Cell: (p) => {
      const v = p.cell.value as Attribute[]
      return v.join(",")
    },
  },
  {
    Header: "装備コスト",
    accessor: "totalEquipCost",
  },
  {
    Header: "HP",
    accessor: "totalStatuses.hp",
  },
  {
    Header: "物理 攻撃",
    accessor: "totalStatuses.physicalAtk",
  },
  {
    Header: "物理 防御",
    accessor: "totalStatuses.physicalDef",
  },
  {
    Header: "魔法 攻撃",
    accessor: "totalStatuses.magicAtk",
  },
  {
    Header: "魔法 防御",
    accessor: "totalStatuses.magicDef",
  },
  {
    Header: "特殊効果",
    accessor: "mixedSpecialEffects",
    // TODO Array なので sort できない
    Cell: CellOfSpecialEffects,
  },
]

const defaultColumn: Partial<ColumnOptionsOverride> = {}

export const Table: React.FC<OwnProps> = () => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable<CustomizeResult>(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout,
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
