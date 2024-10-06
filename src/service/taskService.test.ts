import { CustomHttpService } from '../utils/http/CustomHttpService';
import { GetTaskReq } from '../api/get-task-req';
import { PostTaskReq } from '../api/post-task-req';
import { addTask, fetchTasks } from './taskService';

// Mock the CustomHttpService
jest.mock('../utils/http/CustomHttpService');

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks(); // Restore original console methods
});

beforeEach(() => {
  jest.clearAllMocks(); // Reset mocks before each test
  localStorage.clear(); // Clear localStorage before each test
});

beforeEach(() => {
  jest.clearAllMocks(); // Reset mocks before each test
  localStorage.clear(); // Clear localStorage before each test
});

it('should fetch tasks and merge with local storage tasks', async () => {
  // Set up the mock response from CustomHttpService
  const mockResponse = {
    current: 1,
    maxPage: 1,
    total: 2,
    tasks: [{ id: 1, title: 'Test Task 1', completed: false }],
  };
  (CustomHttpService.send as jest.Mock).mockResolvedValue(mockResponse);

  // Set up local storage with some manual tasks
  const manualTasks = [{ id: 2, title: 'Manual Task', completed: true }];
  localStorage.setItem('manualTasks', JSON.stringify(manualTasks));

  const paginationModel = { page: 0, pageSize: 10 };
  const filter = 'completed';

  const result = await fetchTasks(paginationModel, filter);

  expect(CustomHttpService.send).toHaveBeenCalledWith(expect.any(GetTaskReq));
  expect(result).toEqual({
    current: 1,
    maxPage: 1,
    total: 3, // 2 from API + 1 from manual tasks
    tasks: mockResponse.tasks, // API tasks
  });
});

it('should return only manual tasks if API response is empty', async () => {
  (CustomHttpService.send as jest.Mock).mockResolvedValue({ tasks: [] });

  const manualTasks = [{ id: 1, title: 'Manual Task 1', completed: false }];
  localStorage.setItem('manualTasks', JSON.stringify(manualTasks));

  const paginationModel = { page: 0, pageSize: 10 };
  const filter = 'all';

  const result = await fetchTasks(paginationModel, filter);

  expect(result).toEqual({
    current: 0,
    maxPage: 0,
    total: 1, // Only manual tasks
    tasks: manualTasks,
  });
});

it('should handle errors gracefully', async () => {
  (CustomHttpService.send as jest.Mock).mockRejectedValue(
    new Error('Network error'),
  );

  const result = await fetchTasks({ page: 0, pageSize: 10 }, 'all');

  expect(result).toBeUndefined(); // Error should return undefined
  expect(console.error).toHaveBeenCalledWith(
    'Error fetching tasks:',
    expect.any(Error),
  );
});

it('should add a task successfully', async () => {
  const mockResponse = { id: 1, title: 'New Task', completed: false };
  (CustomHttpService.send as jest.Mock).mockResolvedValue(mockResponse);

  const result = await addTask('New Task');

  expect(CustomHttpService.send).toHaveBeenCalledWith(expect.any(PostTaskReq));
  expect(result).toEqual(mockResponse);
});

it('should handle errors when adding a task', async () => {
  (CustomHttpService.send as jest.Mock).mockRejectedValue(
    new Error('Network error'),
  );

  const result = await addTask('New Task');

  expect(result).toBeUndefined(); // Error should return undefined
  expect(console.error).toHaveBeenCalledWith(
    'Error adding task:',
    expect.any(Error),
  );
});


it('should return only incomplete tasks when filter is set to incomplete', async () => {
    const mockResponse = {
      current: 1,
      maxPage: 1,
      total: 3,
      tasks: [
        { id: 1, title: 'Task 1', completed: true },
        { id: 2, title: 'Task 2', completed: false },
        { id: 3, title: 'Task 3', completed: false },
      ],
    };

    (CustomHttpService.send as jest.Mock).mockResolvedValue(mockResponse);

    const manualTasks = [
      { id: 4, title: 'Manual Task 1', completed: true },
      { id: 5, title: 'Manual Task 2', completed: false },
    ];
    
    localStorage.setItem('manualTasks', JSON.stringify(manualTasks));

    const paginationModel = { page: 1, pageSize: 10 };
    const filter = 'incomplete';

    const result = await fetchTasks(paginationModel, filter);

    expect(result).toEqual({
      current: 1,
      maxPage: 1,
      total: 4, 
      tasks: [
        { id: 1, title: 'Task 1', completed: true },
        { id: 2, title: 'Task 2', completed: false },
        { id: 3, title: 'Task 3', completed: false },
      ],
    });
});
