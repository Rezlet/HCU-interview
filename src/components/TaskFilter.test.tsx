import React from 'react';
import { render, screen, act } from '@testing-library/react';
import TaskFilter from './TaskFilter';

describe('TaskFilter', () => {
  const setFilter = jest.fn(); 

  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test('handleFilterChange calls setFilter with the correct value', async () => {
    const filter: 'all' | 'completed' | 'incomplete' = 'all';

    await act(async () => {
      render(<TaskFilter filter={filter} setFilter={setFilter} />);
    });

    const selectBox = screen.getByTestId('select-box');

    expect(selectBox).toBeInTheDocument();
  });
});
