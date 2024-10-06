import { CustomHttpService } from '../utils/http/CustomHttpService';
import { GetTaskReq } from '../api/get-task-req';
import { PostTaskReq } from '../api/post-task-req';
import { GetTaskRes } from '../api/get-task-res';
import { Task, TaskResponse } from '../api/task';
import { GridPaginationModel } from '@mui/x-data-grid';
import { isEmpty } from 'lodash';

export const fetchTasks = async (
  paginationModel: GridPaginationModel,
  filter: string,
): Promise<TaskResponse | undefined> => {
  try {
    const req = new GetTaskReq({
      completed:
        filter === 'completed'
          ? true
          : filter === 'incomplete'
            ? false
            : undefined,
      page: paginationModel.page,
      pageSize: paginationModel.pageSize,
    });
    const response = await CustomHttpService.send<GetTaskRes>(req);
    const storedTasks = JSON.parse(localStorage.getItem('manualTasks') || '[]');

    const filteredManualTasks = storedTasks.filter((task: Task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'incomplete') return !task.completed;
      return true;
    });

    const mergedTasks = isEmpty(response.tasks)
      ? filteredManualTasks
      : response.tasks;

    return response
      ? {
          current: response.current ?? 0,
          maxPage: response.maxPage ?? 0,
          total: (response?.total || 0) + filteredManualTasks.length,
          tasks: mergedTasks ?? [],
        }
      : { current: 0, maxPage: 0, total: 0, tasks: [] };
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return undefined;
  }
};

export const addTask = async (title: string) => {
  try {
    const req = new PostTaskReq({ title });
    const response = await CustomHttpService.send<GetTaskRes>(req);
    return response;
  } catch (error) {
    console.error('Error adding task:', error);
  }
};
