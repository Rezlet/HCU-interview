import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskManager from './TaskManager';
import useTaskManager from '../hooks/useTaskManager'; 

jest.mock('../hooks/useTaskManager');

describe('TaskManager', () => {
  const mockTasksResponse = { tasks: [], total: 0 }; 

  beforeEach(() => {
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

  test('renders TaskManager component', async () => {
    await React.act(async () => {
      render(<TaskManager />);
    });

    expect(screen.getByText('Add new task')).toBeInTheDocument();
  });
});
