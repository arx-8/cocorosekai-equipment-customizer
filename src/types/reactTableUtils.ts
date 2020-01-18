import { MouseEventHandler } from "react"
import {
  ColumnInstance,
  TableInstance,
  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  UseFiltersInstanceProps,
  UseFiltersOptions,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseTableColumnOptions,
  UseTableOptions,
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

/**
 * console.log で確認した型
 * たぶん d.ts の方が間違ってるため定義
 */
export type TableHeaderPropsReal = {
  colSpan: number
  key: React.Key
  /**
   * useSortBy 組込時には、ソートの toggle を実行してくれる
   */
  onClick: MouseEventHandler
  style?: React.CSSProperties
  title: string
}

export type TableOptionsOverride<TData extends object> = UseTableOptions<
  TData
> &
  UseSortByOptions<TData> &
  UseFiltersOptions<TData>
