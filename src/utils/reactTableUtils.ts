import matchSorter from "match-sorter"
import { IdType, Row } from "react-table"
import { ItemsTableRow } from "src/components/organisms/ItemsTable/Table"
import { Attribute, AttributeValues } from "src/domain/model/Equipment"

/**
 * @param filterValue 検索テキスト
 */
export const fuzzyTextFilter = <TData extends object>(
  rows: Row<TData>[],
  columnIds: IdType<TData>[],
  filterValue: string
): Row<TData>[] => {
  // 必ず 1 要素分だけ渡ってくるため
  const id = columnIds[0]

  return matchSorter(rows, filterValue, {
    keys: [(row) => row.values[id]],
  })
}

/**
 * Let the table remove the filter if the string is empty
 * @see react-table/FilterType
 */
fuzzyTextFilter.autoRemove = (val: string | undefined) => !val

export const itemsTableAttributeFilter = (
  rows: Row<ItemsTableRow>[],
  _columnIds: IdType<ItemsTableRow>[],
  filterValues: Attribute[]
): Row<ItemsTableRow>[] => {
  // 全選択 or 全未選択
  if (
    filterValues.length === Object.keys(AttributeValues).length ||
    filterValues.length === 0
  ) {
    return rows
  }

  return rows.filter((r) => filterValues.includes(r.original.attribute))
}
