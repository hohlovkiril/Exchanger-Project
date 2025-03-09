import React, { useState, useContext, createContext, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import {
  StorageService,
} from '../../../services'
import { ColumnData, TaskData } from '../types';

interface IContext {
  columns: ColumnData[];

  onColumnMove: (direction: 'left' | 'right', index: number) => void;
  onColumnCreate: (title: string) => void;
  onColumnEdit: (index: number, title: string) => void;
  onColumnDelete: (index: number) => void;

  onTaskMove: (index: number, columnIndex: number) => void;
  onTaskCreate: (title: string, columnIndex: number) => void;
  onTaskEdit: (columnIndex: number, taskIndex: number, taskData: TaskData) => void;
  onTaskDelete: (index: number, columnIndex: number) => void;
}

interface IProvider {
  children: React.ReactNode;
}

export const TaskContext = createContext<IContext | undefined>(undefined);

export const TaskProvider: React.FC<IProvider> = ({
  children
}) => {

  /** Context */

  const { enqueueSnackbar } = useSnackbar();

  /** States */

  const [columns, setColumns] = useState<ColumnData[]>(
    StorageService.checkItem('app_taskboard_db')
      ? StorageService.getItem('app_taskboard_db') : []
  );

  /** Handlers */

  const handleColumnMove = (direction: 'left' | 'right', index: number) => {
    if (direction === 'left' && index === 0) return;
    else if (direction === 'right' && index === columns.length - 1) return;

    if (direction === 'left') {
      setColumns([
        ...columns.map((col, key) => ({
          ...col,
          viewIndex: key === index - 1
            ? key + 1
            : key === index
            ? key - 1 : key
        })).sort((a, b) => a.viewIndex - b.viewIndex)
      ])
    } else {
      setColumns([
        ...columns.map((col, key) => ({
          ...col,
          viewIndex: key === index
            ? key + 1
            : key === index + 1
            ? key - 1 : key
        })).sort((a, b) => a.viewIndex - b.viewIndex)
      ])
    }

    enqueueSnackbar('Column successfully moved!', { variant: 'success' });
  }

  const handleColumnCreate = (title: string) => {
    setColumns([
      ...columns.map((col, key) => ({ ...col, viewIndex: key })),
      {
        viewIndex: columns.length,
        title,
        tasks: [],
      }
    ]);
    
    enqueueSnackbar('Column successfully created!', { variant: 'success' });
  }

  const handleColumnEdit = (index: number, title: string) => {
    setColumns([
      ...columns.map((col, key) => ({
        ...col,
        title: key === index ? title : col.title,
      }))
    ])

    enqueueSnackbar('Column successfully updated!', { variant: 'success' });
  }

  const handleColumnDelete = (index: number) => {
    setColumns([
      ...columns.filter((col, key) => key !== index)
        .map((col, key) => ({ ...col, viewIndex: key }))
    ])

    enqueueSnackbar('Column successfully removed!', { variant: 'success' });
  }

  const handleTaskMove = (index: number, columnIndex: number) => {

  }

  const handleTaskCreate = (title: string, columnIndex: number) => {
    const column = columns.find((col, key) => key === columnIndex);

    if (column) {
      const newTask: TaskData = {
        viewIndex: column.tasks.length, columnId: columnIndex,
        title,
        description: '',
      }

      setColumns([
        ...columns.map((col, key) => ({
          ...col,
          tasks: key === columnIndex
            ? [...col.tasks, newTask]
            : [...col.tasks]
        }))
      ])
    }

    enqueueSnackbar('Task successfully created!', { variant: 'success' });
  }

  const handleTaskEdit = (columnIndex: number, taskIndex: number, taskData: TaskData) => {
    setColumns([
      ...columns.map((col, key) => ({
        ...col,
        tasks: key === columnIndex
          ? col.tasks.map((task, keyTask) => {
            if (keyTask === taskIndex) {
              return taskData;
            } else {
              return task;
            }
          })
          : col.tasks
      }))
    ])

    enqueueSnackbar('Column successfully updated!', { variant: 'success' });
  }

  const handleTaskDelete = (index: number, columnIndex: number) => {
    setColumns([
      ...columns.map((col, key) => ({
        ...col,
        tasks: key === columnIndex
          ? col.tasks.filter((task, keyTask) => keyTask !== index)
            .map((newTask, newTaskKey) => ({ ...newTask, viewIndex: newTaskKey }))
          : col.tasks
      }))
    ])

    enqueueSnackbar('Column successfully removed!', { variant: 'success' });
  }

  /** Effects */

  useEffect(() => {
    StorageService.setItem('app_taskboard_db', columns);
  }, [columns])

  return (
    <TaskContext.Provider value={{
      columns,
      onColumnMove: handleColumnMove,
      onColumnCreate: handleColumnCreate,
      onColumnEdit: handleColumnEdit,
      onColumnDelete: handleColumnDelete,
      onTaskMove: handleTaskMove,
      onTaskCreate: handleTaskCreate,
      onTaskEdit: handleTaskEdit,
      onTaskDelete: handleTaskDelete,
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskApi = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(`useTaskApi must be wrapped in TaskProvider`);
  }

  return context;
}