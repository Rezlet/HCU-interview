import { act, renderHook } from '@testing-library/react-hooks';
import  useTaskManager  from './useTaskManager'; // Adjust import as necessary
import * as taskService from '../service/taskService'; // Adjust import as necessary
import { TaskResponse } from '../api/task';
jest.mock('../service/taskService');
beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

test('fetches tasks on mount', async () => {
  // Create a mock TaskResponse object
  const mockTaskResponse: TaskResponse = {
    tasks: [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ],
    current: 1,
    maxPage: 1,
    total: 2
  };

  // Mock the fetchTasks method to return the mock object
  const mockFetchTasks = jest
    .spyOn(taskService, 'fetchTasks')
    .mockResolvedValue(mockTaskResponse);

  // Render the hook
  const { result, waitForNextUpdate } = renderHook(() => useTaskManager());

  // Wait for the next update after the fetch
  await waitForNextUpdate();

  // Add your assertions here to verify that the tasks are set correctly
  expect(result.current.tasksResponse).toEqual(mockTaskResponse);

  // Clean up the mock
  mockFetchTasks.mockRestore();
});


test('handleAddTask adds a new task and fetches tasks', async () => {
    const mockTaskTitle = 'Test Task';
    
    // Mocking the addTask function to return true
    (taskService.addTask as jest.Mock).mockReturnValue(true);
    (taskService.fetchTasks as jest.Mock).mockResolvedValue([]);

    const { result } = renderHook(() => useTaskManager());

    // Set task title
    act(() => {
      result.current.setTaskTitle(mockTaskTitle);
    });

    // Call handleAddTask
    await act(async () => {
      await result.current.handleAddTask();
    });

    // Check if the new task is added to localStorage
    const storedTasks = JSON.parse(localStorage.getItem('manualTasks') || '[]');
    expect(storedTasks).toHaveLength(1); // Ensure one task is added
    expect(storedTasks[0]).toEqual(expect.objectContaining({ title: mockTaskTitle }));

    // Check if fetchTasks was called after adding the task
    expect(taskService.fetchTasks).toHaveBeenCalled();
  });

  test('handlePaginationChange updates pagination model', () => {
    const { result } = renderHook(() => useTaskManager());

    const newPaginationModel = { pageSize: 10, page: 1 };

    // Call handlePaginationChange
    act(() => {
      result.current.handlePaginationChange(newPaginationModel);
    });

    // Check if the pagination model state has been updated
    expect(result.current.paginationModel).toEqual(newPaginationModel);
  });

  test('handleFilterChange updates filter and resets pagination', () => {
    const { result } = renderHook(() => useTaskManager());

    const newFilter = 'completed';

    // Call handleFilterChange
    act(() => {
      result.current.handleFilterChange(newFilter);
    });

    // Check if the filter state has been updated
    expect(result.current.filter).toBe(newFilter);
    expect(result.current.paginationModel.page).toBe(0); // Ensure pagination resets to 0
  });
