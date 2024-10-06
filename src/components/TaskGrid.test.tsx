import { render, fireEvent, screen, act } from '@testing-library/react';
import TaskGrid from './TaskGrid';
import { DataGrid } from '@mui/x-data-grid';

jest.mock('@mui/x-data-grid', () => ({
    ...jest.requireActual('@mui/x-data-grid'),
    DataGrid: jest.fn(({ rows, columns }) => (
      <div>
        {rows.map((row: any) => (
          <div key={row.id} data-testid={`row-${row.id}`}>
            {columns.map((col: any) => (
              <div key={col.field}>
                {col.field === 'completed' ? (
                  <input
                    type="checkbox"
                    checked={row.completed}
                    readOnly
                    data-testid={row.id} // Ensure data-testid corresponds to the task ID
                  />
                ) : (
                  <span>{row[col.field]}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    )),
  }));

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

  it('renders completed checkboxes correctly',async () => {
    await act(async () => {
        render(
            <TaskGrid {...defaultProps} />
          );
      });
  });
});
