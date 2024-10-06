import React from 'react';
import { render, act } from '@testing-library/react';
import TaskGrid from './TaskGrid';

describe('TaskGrid Component', () => {
  const mockHandlePaginationChange = jest.fn();

  const tasksResponse = {
    tasks: [
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: false },
    ],
    total: 2,
    current: 1,
    maxPage: 1,
  };

  const defaultProps = {
    tasksResponse,
    paginationModel: { page: 0, pageSize: 5 },
    handlePaginationChange: mockHandlePaginationChange,
  };

  it('renders completed checkboxes correctly', async () => {
    await act(async () => {
      render(<TaskGrid {...defaultProps} />);
    });
  });
});
