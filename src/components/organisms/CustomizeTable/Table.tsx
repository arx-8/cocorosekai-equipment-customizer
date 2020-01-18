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
      // sort, filter を可能にするため、string に変換
      // 前と次の名が合体してあいまい検索に引っかかるのを防ぐため、"," で join
      accessor: (originalRow) => {
        return originalRow.equippedIds
          .map((eId) => eId && findEquipmentStrict(eId).rawName)
          .join(",")
      },
      width: 336,
      Cell: CellOfCustomize,
      Filter: TextColumnFilter,
      filter: "fuzzyTextFilter",
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
      Filter: AttributeColumnFilter,
      filter: "attributeFilter",
    },
    {
      Header: "装備コスト",
      accessor: "totalEquipCost",
      width: 64,
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      // eslint-disable-next-line react/display-name
      Header: () => (
        <HeaderCellWithIcon
          headerName="HP"
          icon={<HeartIcon width={20} height={20} color="limegreen" />}
        />
      ),
      accessor: "totalStatuses.hp",
      width: 64,
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      // eslint-disable-next-line react/display-name
      Header: () => (
        <HeaderCellWithIcon
          headerName="物理 攻撃"
          icon={<SwordIcon width={20} height={20} color="red" />}
        />
      ),
      accessor: "totalStatuses.physicalAtk",
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
      accessor: "totalStatuses.physicalDef",
      width: 64,
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      // eslint-disable-next-line react/display-name
      Header: () => (
        <HeaderCellWithIcon
          headerName="魔法 攻撃"
          icon={<WandIcon width={20} height={20} color="blue" />}
        />
      ),
      accessor: "totalStatuses.magicAtk",
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
      accessor: "totalStatuses.magicDef",
      width: 64,
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      Header: "特殊効果",
      // sort, filter を可能にするため、string に変換
      accessor: (originalRow) => {
        return originalRow.mixedSpecialEffects.map((e) => e.rawText).join("\n")
      },
      Cell: PreWrapCell,
      width: 240,
      Filter: TextColumnFilter,
      filter: "fuzzyTextFilter",
    },
  ]
}

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
    setAllFilters,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      autoResetFilters: false,
      autoResetSortBy: false,
    } as TableOptionsOverride<CustomizeRecord>,
    useBlockLayout,
    useFilters,
    useSortBy
  ) as TableInstanceOverride<CustomizeRecord>

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
                const column = _column as ColumnInstanceOverride<
                  CustomizeRecord
                >

                // <th> 全体が onClick に反応すると邪魔なため
                const { onClick, key, style, ...rest } = column.getHeaderProps(
                  column.getSortByToggleProps()
                ) as TableHeaderPropsReal

                if (style) {
                  // デフォルトだと Filter cell まで clickable な UI にされるため
                  // clickable な場所は自分で決める
                  delete style.cursor
                  // emotion css 側で決めるため
                  delete style.display
                }

                return (
                  <th key={key} style={style} {...rest} css={thCss}>
                    {/* TODO どう正しく解消すべきかわからん */}
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                    <div
                      css={column.canSort && headerSortCss}
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
            <th colSpan={flatColumns.length} css={recordsCounter}>
              Hits: {rows.length}
            </th>
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
