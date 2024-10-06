// components/TaskManager.test.tsx
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import TaskManager from './TaskManager';
import useTaskManager from '../hooks/useTaskManager'; // Import the custom hook

// Mock the useTaskManager hook
jest.mock('../hooks/useTaskManager');

describe('TaskManager', () => {
  const mockTasksResponse = { tasks: [], total: 0 }; // Mock the tasks response

  beforeEach(() => {
    // Reset the mock before each test
    (useTaskManager as jest.Mock).mockReturnValue({
      tasksResponse: mockTasksResponse,
      paginationModel: { pageSize: 5, page: 0 },
      filter: 'all',
      taskTitle: '',
      setTaskTitle: jest.fn(),
      handleAddTask: jest.fn(),
      handlePaginationChange: jest.fn(),
      handleFilterChange: jest.fn(),
    });
  });

  test('renders TaskManager component',async () => {
     await React.act(async () => {
    render(
        <TaskManager />
    );
  });

    // Check if the main elements are rendered
    expect(screen.getByText('Add new task')).toBeInTheDocument();
  });
});
