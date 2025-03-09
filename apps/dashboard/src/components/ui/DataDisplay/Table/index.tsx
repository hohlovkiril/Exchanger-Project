import { TableBodyProps, TableCellProps, TableContainerProps, TableFooterProps, TableHeadProps, TablePaginationProps, TableProps, TableRowProps, TableSortLabelProps } from "@mui/material";
import { MuiTable, MuiTableBody, MuiTableCell, MuiTableContainer, MuiTableFooter, MuiTableHead, MuiTablePagination, MuiTableRow, MuiTableSortLabel } from "./index.style";

export interface ITableProps {}

export interface ITableHeadProps {}

export interface ITableBodyProps {}

export interface ITableRowProps {}

export interface ITableCellProps {}

export interface ITableFooterProps {}

export interface ITableContainerProps {}

export interface ITablePaginationProps {}

export interface ITableSortLabelProps {}

export function Table(props: ITableProps & TableProps) {
  return (
    <MuiTable
      {...props}
    >
      {props.children}
    </MuiTable>
  )
}

export function TableHead(props: ITableHeadProps & TableHeadProps) {
  return (
    <MuiTableHead
      {...props}
    >
      {props.children}
    </MuiTableHead>
  )
}

export function TableBody(props: ITableBodyProps & TableBodyProps) {
  return (
    <MuiTableBody
      {...props}
    >
      {props.children}
    </MuiTableBody>
  )
}

export function TableFooter(props: ITableFooterProps & TableFooterProps) {
  return (
    <MuiTableFooter
      {...props}
    >
      {props.children}
    </MuiTableFooter>
  )
}

export function TableRow(props: ITableRowProps & TableRowProps) {
  return (
    <MuiTableRow
      {...props}
    >
      {props.children}
    </MuiTableRow>
  )
}

export function TableCell(props: ITableCellProps & TableCellProps) {
  return (
    <MuiTableCell
      {...props}
    >
      {props.children}
    </MuiTableCell>
  )
}

export function TableContainer(props: ITableContainerProps & TableContainerProps) {
  return (
    <MuiTableContainer
      {...props}
    >
      {props.children}
    </MuiTableContainer>
  )
}

export function TablePagination(props: ITablePaginationProps & TablePaginationProps) {
  return (
    <MuiTablePagination
      {...props}
    />
  )
}

export function TableSortLabel(props: ITableSortLabelProps & TableSortLabelProps) {
  return (
    <MuiTableSortLabel
      {...props}
    >
      {props.children}
    </MuiTableSortLabel>
  )
}