export interface IDataViewColumnsConfig<T> {
  id: keyof T;
  label: string;
  align?: 'left' | 'center' | 'right',
  disablePadding?: true;
  disableOrder?: true;
  renderCell?: (row: T) => React.ReactNode;
}

/** Props */

export interface IDataViewHeaderProps {
  enableSelect?: true;
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
  headCells: IDataViewColumnsConfig<any>[];
}

export interface IDataViewProps {
  columns: IDataViewColumnsConfig<any>[];
  rows: any[];
  toolbar?: React.ReactNode;
  selected?: true;
  loading?: boolean;
}

/** Utils */

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: 'asc' | 'desc',
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}