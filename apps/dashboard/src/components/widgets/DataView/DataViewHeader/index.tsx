import { visuallyHidden } from '@mui/utils';

import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '../../../ui/DataDisplay';
import {
  Checkbox,
} from '../../../ui/Inputs';
import {
  Box,
} from '../../../ui/Surfaces';
import {
  IDataViewHeaderProps,
} from '../common';

export default function DataViewHeader({
  enableSelect,
  numSelected,
  onRequestSort,
  onSelectAllClick,
  order,
  orderBy,
  rowCount,
  headCells,
}: IDataViewHeaderProps) {

  /** Handlers */

  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };


  return (
    <TableHead
      sx={{
        background: 'rgba(125, 125, 125, .05)',
        borderTop: '1px solid rgba(125, 125, 125, .5)',
      }}
    >
      <TableRow
        sx={{
          '& .MuiTableCell-root': {
            position: 'relative',
          },
          '& .MuiTableCell-root:not(:last-child)::after': {
            position: 'absolute',
            content: '""',
            backgroundColor: 'rgba(125, 125, 125, .25)',
            width: '1px',
            height: 'calc(100% - 30px)',
            right: '0px',
            top: '16px',
          }
        }}
      >
        {enableSelect && (
          <TableCell padding='checkbox'>
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
        )}

        {headCells.map((cell, key) => (
          <TableCell
            key={String(key)}
            align={cell.align === 'left'
              ? 'left' : cell.align === 'center'
              ? 'center' : cell.align === 'right'
              ? 'right' : 'center'
            }
            padding={cell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === cell.id ? order : false}
          >
            {cell.disableOrder ? (
              <>
                {cell.label}
              </>
            ) : (
              <TableSortLabel
                active={orderBy === cell.id}
                direction={orderBy === cell.id ? order : 'asc'}
                onClick={createSortHandler(String(cell.id))}
              >
                {cell.label}
                {orderBy === cell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}