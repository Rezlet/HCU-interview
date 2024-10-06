import { useEffect, useState } from 'react';
import { GridPaginationModel } from '@mui/x-data-grid';
import { TaskResponse } from '../api/task';
import { addTask, fetchTasks } from '../service/taskService';

const useTaskManager = () => {
  const [tasksResponse, setTasksResponse] = useState<
    TaskResponse | undefined
  >();
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>(
    'all',
  );
  const [taskTitle, setTaskTitle] = useState<string>('');

  useEffect(() => {
    handleFetchTasks(paginationModel, filter);
  }, [paginationModel, filter]);

  const handleFetchTasks = async (
    newPaginationModel: GridPaginationModel,
    filter: string,
  ) => {
    const response = await fetchTasks(newPaginationModel, filter);
    setTasksResponse(response);
  };

  const handleAddTask = async () => {
    const newTask = {
      id: Math.floor(Math.random() * 1000) + 21,
      title: taskTitle,
      completed: false,
    };
    const isSuccess = addTask(taskTitle);

    if (!isSuccess) return;
    const storedTasks = JSON.parse(localStorage.getItem('manualTasks') || '[]');
    const updatedTasks = [...storedTasks, newTask];
    localStorage.setItem('manualTasks', JSON.stringify(updatedTasks));

    setTaskTitle('');
    handleFetchTasks(paginationModel, filter);
  };

  const handlePaginationChange = (newPaginationModel: GridPaginationModel) => {
    setPaginationModel(newPaginationModel);
  };

  const handleFilterChange = (
    newFilter: 'all' | 'completed' | 'incomplete',
  ) => {
    setFilter(newFilter);
    setPaginationModel((prev) => ({ ...prev, page: 0 })); 
  };

  return {
    tasksResponse,
    paginationModel,
    filter,
    taskTitle,
    setTaskTitle,
    handleAddTask,
    handlePaginationChange,
    handleFilterChange,
  };
};

export default useTaskManager;
