import {
  ColumnInstance,
  TableInstance,
  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  UseFiltersInstanceProps,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByInstanceProps,
  UseTableColumnOptions,
} from "react-table"

/**
 * for react-table
 */

/**
 * 使う PluginHook によって、型を合成する必要がある
 */
export type TableInstanceOverride<TData extends object> = TableInstance<TData> &
  UseFiltersInstanceProps<TData> &
  UseSortByInstanceProps<TData>

export type ColumnInstanceOverride<TData extends object> = ColumnInstance<
  TData
> &
  UseFiltersColumnProps<TData> &
  UseSortByColumnProps<TData>

export type ColumnOptionsOverride<TData extends object> = UseTableColumnOptions<
  TData
> &
  UseFiltersColumnOptions<TData> &
  UseSortByColumnOptions<TData>

export type FilterRendererProps<TData extends object = {}> = {
  column: ColumnInstance<TData> & UseFiltersColumnProps<TData>
}
