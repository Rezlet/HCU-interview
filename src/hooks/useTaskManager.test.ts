import { act, renderHook } from '@testing-library/react-hooks';
import useTaskManager from './useTaskManager'; 
import * as taskService from '../service/taskService'; 
import { TaskResponse } from '../api/task';
jest.mock('../service/taskService');
beforeEach(() => {
  localStorage.clear(); 
});

test('fetches tasks on mount', async () => {
  const mockTaskResponse: TaskResponse = {
    tasks: [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ],
    current: 1,
    maxPage: 1,
    total: 2,
  };

  const mockFetchTasks = jest
    .spyOn(taskService, 'fetchTasks')
    .mockResolvedValue(mockTaskResponse);

  const { result, waitForNextUpdate } = renderHook(() => useTaskManager());

  await waitForNextUpdate();

  expect(result.current.tasksResponse).toEqual(mockTaskResponse);

  mockFetchTasks.mockRestore();
});

test('handleAddTask adds a new task and fetches tasks', async () => {
  const mockTaskTitle = 'Test Task';

  (taskService.addTask as jest.Mock).mockReturnValue(true);
  (taskService.fetchTasks as jest.Mock).mockResolvedValue([]);

  const { result } = renderHook(() => useTaskManager());

  act(() => {
    result.current.setTaskTitle(mockTaskTitle);
  });

  await act(async () => {
    await result.current.handleAddTask();
  });

  const storedTasks = JSON.parse(localStorage.getItem('manualTasks') || '[]');
  expect(storedTasks).toHaveLength(1); 
  expect(storedTasks[0]).toEqual(
    expect.objectContaining({ title: mockTaskTitle }),
  );

  expect(taskService.fetchTasks).toHaveBeenCalled();
});

test('handlePaginationChange updates pagination model', () => {
  const { result } = renderHook(() => useTaskManager());

  const newPaginationModel = { pageSize: 10, page: 1 };

  act(() => {
    result.current.handlePaginationChange(newPaginationModel);
  });

  expect(result.current.paginationModel).toEqual(newPaginationModel);
});

test('handleFilterChange updates filter and resets pagination', () => {
  const { result } = renderHook(() => useTaskManager());

  const newFilter = 'completed';

  act(() => {
    result.current.handleFilterChange(newFilter);
  });

  expect(result.current.filter).toBe(newFilter);
  expect(result.current.paginationModel.page).toBe(0);
});
