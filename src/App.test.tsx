import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';
import TaskManager from './pages/TaskManager';

jest.mock('./pages/TaskManager', () => {
  return jest.fn(() => <div>Task Manager Component</div>);
});

test('renders TaskManager on root path', async () => {
  (TaskManager as jest.Mock).mockImplementation(() => (
    <div>Task Manager Component</div>
  ));

  await act(async () => {
    render(<App />);
  });

  expect(screen.getByText(/Task Manager Component/i)).toBeInTheDocument();
});
