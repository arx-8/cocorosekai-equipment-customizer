/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { Fragment } from "react"
import {
  FilterTypes,
  useBlockLayout,
  useFilters,
  useSortBy,
  useTable,
} from "react-table"
import { data } from "src/assets/data"
import { AttributeColumnFilter } from "src/components/molecules/AttributeColumnFilter"
import { NumberRangeColumnFilter } from "src/components/molecules/NumberRangeColumnFilter"
import { TextColumnFilter } from "src/components/molecules/TextColumnFilter"
import { CellOfAttrs } from "src/components/organisms/ItemsTable/CellOfAttrs"
import { CellOfImage } from "src/components/organisms/ItemsTable/CellOfImage"
import { Equipment } from "src/domain/model/Equipment"
import { convertToItemsTable } from "src/gateway/dataGateway"
import {
  ColumnInstanceOverride,
  ColumnOptionsOverride,
  TableHeaderPropsReal,
  TableInstanceOverride,
  TableOptionsOverride,
} from "src/types/reactTableUtils"
import {
  fuzzyTextFilter,
  itemsTableAttributeFilter,
} from "src/utils/reactTableUtils"

type OwnProps = {
  children?: never
}

/**
 * filter, sort に都合の悪い型を変換するため、Table用の型を追加している
 */
export type ItemsTableRow = Equipment & {
  specialEffectsText: string
}

const columns: ColumnOptionsOverride<ItemsTableRow>[] = [
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
    Filter: TextColumnFilter,
    filter: "fuzzyTextFilter",
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
    Filter: AttributeColumnFilter,
    filter: "attributeFilter",
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
    accessor: "specialEffectsText",
    width: 240,
    Filter: TextColumnFilter,
    filter: "fuzzyTextFilter",
  },
]

const defaultColumn: Partial<ColumnOptionsOverride<ItemsTableRow>> = {
  // defaultCanFilter が必ず true (必ず Filter が描画される) バグがあるっぽい
  // そのため、 default で Filter を定義しておく
  Filter: <Fragment />,
  sortDescFirst: true,
}

const filterTypes: FilterTypes<ItemsTableRow> = {
  attributeFilter: itemsTableAttributeFilter,
  fuzzyTextFilter: fuzzyTextFilter,
}

// 今は data は不変のため、 memo 化のためにも render の外で宣言する
const tableData = convertToItemsTable(data)

export const Table: React.FC<OwnProps> = () => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    setAllFilters,
  } = useTable(
    {
      columns,
      data: tableData,
      defaultColumn,
      filterTypes,
      autoResetFilters: false,
      autoResetSortBy: false,
    } as TableOptionsOverride<ItemsTableRow>,
    useBlockLayout,
    useFilters,
    useSortBy
  ) as TableInstanceOverride<ItemsTableRow>

  // Render the UI for your table
  return (
    <div>
      <button
        onClick={() => {
          setAllFilters((filters) => {
            return filters.map(({ id }) => ({
              id,
              value: undefined,
            }))
          })
        }}
      >
        絞込みリセット
      </button>

      <table {...getTableProps()} css={tableCss}>
        <thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((_column) => {
                const column = _column as ColumnInstanceOverride<ItemsTableRow>

                // <th> 全体が onClick に反応すると邪魔なため
                const { onClick, key, style, ...rest } = column.getHeaderProps(
                  column.getSortByToggleProps()
                ) as TableHeaderPropsReal

                if (style) {
                  // デフォルトだと Filter cell まで clickable な UI にされるため
                  // clickable な場所は自分で決める
                  delete style.cursor
                }

                return (
                  <th key={key} style={style} {...rest}>
                    {/* TODO どう正しく解消すべきかわからん */}
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                    <div
                      css={headerSortCss}
                      onClick={onClick}
                      role="button"
                      tabIndex={-1}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted &&
                          (column.isSortedDesc ? " 🔽" : " 🔼")}
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
    </div>
  )
}

const tableCss = css`
  border: 1px solid black;

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
    border-left: 1px solid black;
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

const headerSortCss = css`
  cursor: pointer;
`
