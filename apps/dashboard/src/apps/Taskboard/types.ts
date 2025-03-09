export type ColumnData = {
  title: string;
  viewIndex: number;
  tasks: TaskData[]
}

export type TaskData = {
  columnId: number;
  viewIndex: number;
  title: string;
  description: string;
}