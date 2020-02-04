/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { Fragment, useMemo } from "react"
import { useSelector } from "react-redux"
import {
  FilterTypes,
  useBlockLayout,
  useFilters,
  useSortBy,
  useTable,
} from "react-table"
import { HeartIcon } from "src/components/atoms/icons/HeartIcon"
import { ShieldIcon } from "src/components/atoms/icons/ShieldIcon"
import { SwordIcon } from "src/components/atoms/icons/SwordIcon"
import { WandIcon } from "src/components/atoms/icons/WandIcon"
import { AttributeColumnFilter } from "src/components/molecules/AttributeColumnFilter"
import { HeaderCellWithIcon } from "src/components/molecules/HeaderCellWithIcon"
import { NumberRangeColumnFilter } from "src/components/molecules/NumberRangeColumnFilter"
import { PreWrapCell } from "src/components/molecules/PreWrapCell"
import { TextColumnFilter } from "src/components/molecules/TextColumnFilter"
import { CellOfActions } from "src/components/organisms/CustomizeTable/CellOfActions"
import { CellOfAttrs } from "src/components/organisms/CustomizeTable/CellOfAttrs"
import { CellOfCustomize } from "src/components/organisms/CustomizeTable/CellOfCustomize"
import { CellOfMemo } from "src/components/organisms/CustomizeTable/CellOfMemo"
import { isEqualData } from "src/components/organisms/CustomizeTable/helpers"
import { TableActions } from "src/components/organisms/CustomizeTable/TableActions"
import { CustomizeRecord } from "src/domain/model/CustomizeRecord"
import { findEquipmentStrict } from "src/domain/model/Equipment"
import { customizeSelectors } from "src/store/customize"
import {
  ColumnInstanceOverride,
  ColumnOptionsOverride,
  TableHeaderPropsReal,
  TableInstanceOverride,
  TableOptionsOverride,
} from "src/types/reactTableUtils"
import {
  customizeTableAttributeFilter,
  fuzzyTextFilter,
} from "src/utils/reactTableUtils"

type OwnProps = {
  children?: never
}

const columns: ColumnOptionsOverride<CustomizeRecord>[] = [
  {
    Cell: (p) => p.row.index + 1,
    Header: "No.",
    width: 40,
  },
  {
    Cell: CellOfActions,
    Header: "操作",
    width: 72,
  },
  {
    Cell: CellOfMemo,
    Filter: TextColumnFilter,
    Header: "メモ",
    accessor: "customizeMemo",
    filter: "fuzzyTextFilter",
    width: 144,
  },
  {
    Cell: CellOfCustomize,
    Filter: TextColumnFilter,
    Header: "装備編成",
    // sort, filter を可能にするため、string に変換
    // 前と次の名が合体してあいまい検索に引っかかるのを防ぐため、"," で join
    accessor: (originalRow) => {
      return originalRow.equippedIds
        .map((eId) => eId && findEquipmentStrict(eId).rawName)
        .join(",")
    },
    filter: "fuzzyTextFilter",
    width: 336,
  },
  // {
  //   Header: "参考総合値",
  //   accessor: "totalSpecValue",
  //   width: 56,
  // },
  {
    // TODO Array なので sort できない
    Cell: CellOfAttrs,
    Filter: AttributeColumnFilter,
    Header: "属性",
    accessor: "mixedAttributes",
    filter: "attributeFilter",
    width: 48,
  },
  {
    Filter: NumberRangeColumnFilter,
    Header: "装備コスト",
    accessor: "totalEquipCost",
    filter: "between",
    width: 64,
  },
  {
    Filter: NumberRangeColumnFilter,
    // eslint-disable-next-line react/display-name
    Header: () => (
      <HeaderCellWithIcon
        headerName="HP"
        icon={<HeartIcon width={20} height={20} />}
      />
    ),
    accessor: "totalStatuses.hp",
    filter: "between",
    width: 64,
  },
  {
    Filter: NumberRangeColumnFilter,
    // eslint-disable-next-line react/display-name
    Header: () => (
      <HeaderCellWithIcon
        headerName="物理 攻撃"
        icon={<SwordIcon width={20} height={20} />}
      />
    ),
    accessor: "totalStatuses.physicalAtk",
    filter: "between",
    width: 64,
  },
  {
    Filter: NumberRangeColumnFilter,
    // eslint-disable-next-line react/display-name
    Header: () => (
      <HeaderCellWithIcon
        headerName="物理 防御"
        icon={<ShieldIcon width={20} height={20} color="red" />}
      />
    ),
    accessor: "totalStatuses.physicalDef",
    filter: "between",
    width: 64,
  },
  {
    Filter: NumberRangeColumnFilter,
    // eslint-disable-next-line react/display-name
    Header: () => (
      <HeaderCellWithIcon
        headerName="魔法 攻撃"
        icon={<WandIcon width={20} height={20} />}
      />
    ),
    accessor: "totalStatuses.magicAtk",
    filter: "between",
    width: 64,
  },
  {
    Filter: NumberRangeColumnFilter,
    // eslint-disable-next-line react/display-name
    Header: () => (
      <HeaderCellWithIcon
        headerName="魔法 防御"
        icon={<ShieldIcon width={20} height={20} color="blue" />}
      />
    ),
    accessor: "totalStatuses.magicDef",
    filter: "between",
    width: 64,
  },
  {
    Cell: PreWrapCell,
    // sort, filter を可能にするため、string に変換
    Filter: TextColumnFilter,
    Header: "特殊効果",
    accessor: (originalRow) => {
      return originalRow.mixedSpecialEffects.map((e) => e.rawText).join("\n")
    },
    filter: "fuzzyTextFilter",
    width: 240,
  },
]

const defaultColumn: Partial<ColumnOptionsOverride<CustomizeRecord>> = {
  // defaultCanFilter が必ず true (必ず Filter が描画される) バグがあるっぽい
  // そのため、 default で Filter を定義しておく
  Filter: <Fragment />,
  sortDescFirst: true,
}

const filterTypes: FilterTypes<CustomizeRecord> = {
  attributeFilter: customizeTableAttributeFilter,
  fuzzyTextFilter: fuzzyTextFilter,
}

export const Table: React.FC<OwnProps> = () => {
  const data = useSelector(customizeSelectors.getCustomizeRecords, isEqualData)

  // Use the state and functions returned from useTable to build your UI
  const {
    flatColumns,
    getTableBodyProps,
    getTableProps,
    headerGroups,
    preFilteredRows,
    prepareRow,
    rows,
    setAllFilters,
  } = useTable(
    {
      autoResetFilters: false,
      autoResetSortBy: false,
      columns,
      data,
      defaultColumn,
      filterTypes,
    } as TableOptionsOverride<CustomizeRecord>,
    useBlockLayout,
    useFilters,
    useSortBy
  ) as TableInstanceOverride<CustomizeRecord>

  const maxRowsCount = useMemo(() => preFilteredRows.length, [
    preFilteredRows.length,
  ])

  // Render the UI for your table
  return (
    <div>
      <TableActions
        onClearFilter={() => {
          setAllFilters((filters) => {
            return filters.map(({ id }) => ({
              id,
              value: undefined,
            }))
          })
        }}
      />

      {/* table */}
      <table {...getTableProps()} css={tableCss}>
        {/* header */}
        <thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((_column) => {
                const column = _column as ColumnInstanceOverride<
                  CustomizeRecord
                >

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
                  <th
                    key={key}
                    style={style}
                    {...rest}
                    css={[thCss, isEvenColumn && evenCss]}
                  >
                    {/* TODO どう正しく解消すべきかわからん */}
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                    <div
                      css={column.canSort && headerSortCss}
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
                  </th>
                )
              })}
            </tr>
          ))}

          {/* mid header */}
          <tr>
            <th colSpan={flatColumns.length} css={recordsCounter}>
              Hits: {rows.length} / {maxRowsCount}
            </th>
          </tr>
        </thead>

        {/* body */}
        <tbody {...getTableBodyProps()} css={tbodyCss}>
          {rows.map((row, index) => {
            const isEvenRow = index % 2 === 0
            prepareRow(row)

            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()} css={isEvenRow && evenCss}>
                {row.cells.map((cell) => {
                  const isEvenColumn = cell.column.index % 2 === 0
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <td {...cell.getCellProps()} css={isEvenColumn && evenCss}>
                      {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const tableCss = css`
  margin-top: 2px;
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

const thCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const tbodyCss = css`
  border-top: solid 1px black;
`

const headerSortCss = css`
  cursor: pointer;
`

const evenCss = css`
  background: #eee;
`
