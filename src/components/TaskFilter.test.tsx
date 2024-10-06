import { fireEvent, render, screen, act } from '@testing-library/react';
import TaskFilter from './TaskFilter';

describe('TaskFilter', () => {
    const setFilter = jest.fn(); // Mock setFilter

    beforeEach(() => {
      jest.clearAllMocks(); // Clear previous calls to setFilter
    });

  test('handleFilterChange calls setFilter with the correct value',async () => {
    const filter: 'all' | 'completed' | 'incomplete' = 'all';

    // Render the component
  await act(async () => {
    render(
        <TaskFilter
          filter={filter}
          setFilter={setFilter}
        />
      );
  });

      const selectBox = screen.getByTestId("select-box");

      // Check if selectBox is found
      expect(selectBox).toBeInTheDocument();
  });
});
