/* eslint-disable @typescript-eslint/no-unused-vars */
import '@tanstack/react-table'
import { RowData } from '@tanstack/react-table'

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    className?: string
    headerClassName?: string
    footerClassName?: string
    headerTooltip?: string
    footerTooltip?: string
    align?: 'left' | 'right' | 'center'
  }
}
