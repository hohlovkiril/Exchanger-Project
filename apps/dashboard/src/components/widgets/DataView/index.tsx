import { useState } from 'react';

import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from '../../ui/DataDisplay';
import {
  Box,
  Card,
  Paper,
} from '../../ui/Surfaces';
import {
  Checkbox,
} from '../../ui/Inputs';

import DataViewHeader from './DataViewHeader';
import {
  getComparator,
  IDataViewProps,
} from './common';

export default function DataView(props: IDataViewProps) {

  /** States */

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string>('');
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  /** Handlers */

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = props.rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /** Vars */

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.rows.length) : 0;

  const visibleRows = [...props.rows]
    .sort(getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <Card
      className='data-view--container'
      component={Paper}
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >

      {/** Table Toolbar */}
      {props.toolbar && (
        <>{props.toolbar}</>
      )}

      <TableContainer
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          borderBottom: '1px solid rgba(125, 125, 125, .5)',
        }}
      >
        {/** Loading Placeholder */}
        {props.loading ? (
          <>
            <Table>
              <DataViewHeader
                enableSelect={props.selected}
                numSelected={selected.length}
                headCells={props.columns}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={props.rows.length}
              />
            </Table>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            > 
              No Rows
            </Box>
          </>
        ) : (
          <>
            <Table>
              {/** Table Header */}
              <DataViewHeader
                enableSelect={props.selected}
                numSelected={selected.length}
                headCells={props.columns}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={props.rows.length}
              />

              <TableBody>
                {visibleRows.map((row, rowKey) => {
                  const isItemSelected = selected.includes(row.id);
                  const labelId = `enhanced-table-checkbox-${rowKey}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      {props.selected && (
                        <TableCell padding='checkbox'>
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                      )}
                      {props.columns.map((cell, cellKey) => (
                        <TableCell
                          key={cellKey}
                          align={cell.align === 'left'
                            ? 'left' : cell.align === 'center'
                            ? 'center' : cell.align === 'right'
                            ? 'right' : 'center'
                          }
                          padding={cell.disablePadding ? 'none' : 'normal'}
                        >
                          {cell.renderCell ? (
                            <>
                              {cell.renderCell(row)}
                            </>
                          ) : (
                            <>
                              {row[cell.id]}
                            </>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * (emptyRows),
                    }}
                  >
                    <TableCell colSpan={props.selected
                      ? props.columns.length + 1
                      : props.columns.length
                    } />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </>
        )}
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  )
}