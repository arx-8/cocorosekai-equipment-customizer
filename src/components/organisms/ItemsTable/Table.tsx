/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { Fragment, useCallback, useMemo } from "react"
import { useSelector } from "react-redux"
import {
  FilterTypes,
  useBlockLayout,
  useFilters,
  useSortBy,
  useTable,
} from "react-table"
import { FixedSizeList, ListChildComponentProps } from "react-window"
import { data } from "src/assets/data"
import { HeartIcon } from "src/components/atoms/icons/HeartIcon"
import { ShieldIcon } from "src/components/atoms/icons/ShieldIcon"
import { SwordIcon } from "src/components/atoms/icons/SwordIcon"
import { WandIcon } from "src/components/atoms/icons/WandIcon"
import { AttributeColumnFilter } from "src/components/molecules/AttributeColumnFilter"
import { HeaderCellWithIcon } from "src/components/molecules/HeaderCellWithIcon"
import { NumberRangeColumnFilter } from "src/components/molecules/NumberRangeColumnFilter"
import { TextColumnFilter } from "src/components/molecules/TextColumnFilter"
import { CellOfAttrs } from "src/components/organisms/ItemsTable/CellOfAttrs"
import { CellOfImage } from "src/components/organisms/ItemsTable/CellOfImage"
import { CellOfStockNum } from "src/components/organisms/ItemsTable/CellOfStockNum"
import { Equipment } from "src/domain/model/Equipment"
import { convertToItemsTable } from "src/gateway/dataGateway"
import { RootState } from "src/store/store"
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
  stockNum: number
}

const columns: ColumnOptionsOverride<ItemsTableRow>[] = [
  {
    Header: "ID",
    accessor: "id",
    width: 40,
  },
  {
    Header: "所持数",
    accessor: "stockNum",
    Cell: CellOfStockNum,
    Filter: NumberRangeColumnFilter,
    filter: "between",
    width: 56,
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
    Header: "属性",
    accessor: "attribute",
    Cell: CellOfAttrs,
    width: 48,
    Filter: AttributeColumnFilter,
    filter: "attributeFilter",
  },
  {
    Header: "装備コスト",
    accessor: "equipCost",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    // eslint-disable-next-line react/display-name
    Header: () => (
      <HeaderCellWithIcon
        headerName="HP"
        icon={<HeartIcon width={20} height={20} />}
      />
    ),
    accessor: "statuses.hp",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    // eslint-disable-next-line react/display-name
    Header: () => (
      <HeaderCellWithIcon
        headerName="物理 攻撃"
        icon={<SwordIcon width={20} height={20} />}
      />
    ),
    accessor: "statuses.physicalAtk",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    // eslint-disable-next-line react/display-name
    Header: () => (
      <HeaderCellWithIcon
        headerName="物理 防御"
        icon={<ShieldIcon width={20} height={20} color="red" />}
      />
    ),
    accessor: "statuses.physicalDef",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    // eslint-disable-next-line react/display-name
    Header: () => (
      <HeaderCellWithIcon
        headerName="魔法 攻撃"
        icon={<WandIcon width={20} height={20} />}
      />
    ),
    accessor: "statuses.magicAtk",
    width: 64,
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    // eslint-disable-next-line react/display-name
    Header: () => (
      <HeaderCellWithIcon
        headerName="魔法 防御"
        icon={<ShieldIcon width={20} height={20} color="blue" />}
      />
    ),
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

export const Table: React.FC<OwnProps> = () => {
  const stockNums = useSelector((state: RootState) => state.userInfo.stockNums)
  const tableData = useMemo(() => convertToItemsTable(data, stockNums), [
    stockNums,
  ])

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    preFilteredRows,
    prepareRow,
    rows,
    setAllFilters,
    totalColumnsWidth,
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

  const maxRowsCount = useMemo(() => preFilteredRows.length, [
    preFilteredRows.length,
  ])

  // row
  const rowsRenderer = useCallback(
    ({ index, style }: ListChildComponentProps) => {
      const row = rows[index]
      prepareRow(row)

      return (
        <div {...row.getRowProps({ style })} css={rowCss}>
          {row.cells.map((cell) => {
            const isEvenColumn = cell.column.index % 2 === 0
            return (
              // eslint-disable-next-line react/jsx-key
              <div {...cell.getCellProps()} css={isEvenColumn && evenColumn}>
                {cell.render("Cell")}
              </div>
            )
          })}
        </div>
      )
    },
    [prepareRow, rows]
  )

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

      {/* table */}
      <div
        {...getTableProps()}
        style={{ width: totalColumnsWidth }}
        css={tableCss}
      >
        {/* header */}
        <div>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <div {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((_column) => {
                const column = _column as ColumnInstanceOverride<ItemsTableRow>

                // ヘッダーセル全体がソート用 (onClick など) として反応すると邪魔なため
                const {
                  key,
                  onClick,
                  style,
                  title,
                  ...rest
                } = column.getHeaderProps(
                  column.getSortByToggleProps()
                ) as TableHeaderPropsReal

                if (style) {
                  // デフォルトだと Filter cell まで clickable な UI にされるため
                  // clickable な場所は自分で決める
                  delete style.cursor
                  // emotion css 側で決めるため
                  delete style.display
                }

                const isEvenColumn = column.index % 2 === 0

                return (
                  <div
                    key={key}
                    style={style}
                    {...rest}
                    css={[headerCell, isEvenColumn && evenColumn]}
                  >
                    {/* TODO どう正しく解消すべきかわからん */}
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                    <div
                      css={column.canSort && headerCellSortable}
                      onClick={onClick}
                      role="button"
                      tabIndex={-1}
                      title={title}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted &&
                          (column.isSortedDesc ? " 🔽" : " 🔼")}
                      </span>
                    </div>
                    {column.canFilter && <div>{column.render("Filter")}</div>}
                  </div>
                )
              })}
            </div>
          ))}

          {/* mid header */}
          <div css={midHeader}>
            <div>
              Hits: {rows.length} / {maxRowsCount}
            </div>
          </div>
        </div>

        {/* body */}
        <div {...getTableBodyProps()}>
          <FixedSizeList
            height={336}
            itemCount={rows.length}
            itemSize={51}
            width={totalColumnsWidth}
          >
            {rowsRenderer}
          </FixedSizeList>
        </div>
      </div>
    </div>
  )
}

const tableCss = css`
  border: solid 1px black;
`

const headerCell = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-weight: bold;
  text-align: center;
  padding: 2px;
`

const headerCellSortable = css`
  cursor: pointer;
`

const evenColumn = css`
  background: #eee;
`

const midHeader = css`
  font-weight: bold;
  border-top: solid 1px black;
  padding-left: 2px;
`

const rowCss = css`
  border-top: solid 1px black;
`
