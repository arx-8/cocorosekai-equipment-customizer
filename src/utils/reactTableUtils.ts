import matchSorter from "match-sorter"
import { FilterValue, Row } from "react-table"

export const fuzzyTextFilterFn = <TData extends object>(
  rows: Row<TData>[],
  id: string,
  filterValue: FilterValue
): Row<TData>[] => {
  return matchSorter(rows, filterValue, {
    keys: [(row) => row.values[id]],
  })
}

/**
 * Let the table remove the filter if the string is empty
 * @see react-table/FilterType
 */
fuzzyTextFilterFn.autoRemove = (val: string | undefined) => !val
