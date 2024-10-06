import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTaskForm from './AddTaskForm';
import { act } from 'react';
let taskTitle: string;
let setTaskTitle: jest.Mock;
let handleAddTask: jest.Mock;

beforeEach(() => {
  taskTitle = '';
  setTaskTitle = jest.fn((title) => {
    taskTitle = title;
  });
  handleAddTask = jest.fn();
});

test('renders AddTaskForm', async () => {
  await act(async () => {
    render(
      <AddTaskForm
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        handleAddTask={handleAddTask}
      />,
    );
  });

  expect(screen.getByLabelText(/new task/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
});

test('updates input value when changed', async () => {
  let taskTitle: string = '';
  const setTaskTitle = jest.fn((title: string) => {
    taskTitle = title;
  });
  const handleAddTask = jest.fn();

  await act(async () => {
    render(
      <AddTaskForm
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        handleAddTask={handleAddTask}
      />,
    );
  });

  const input = screen.getByLabelText(/new task/i);

  await act(async () => {
    fireEvent.change(input, { target: { value: 'New Task' } });
  });

  expect(setTaskTitle).toHaveBeenCalledWith('New Task');
  expect(taskTitle).toBe('New Task');
});

test('shows an error message when the title is empty', async () => {
  await act(async () => {
    render(
      <AddTaskForm
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        handleAddTask={handleAddTask}
      />,
    );
  });

  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /add task/i }));
  });

  expect(screen.getByText(/task title cannot be empty/i)).toBeInTheDocument();
});

test('calls handleAddTask and sets error to null when a valid title is submitted', async () => {
  let taskTitle = 'ahhaha';
  const setTaskTitle = jest.fn((title: string) => {
    taskTitle = title;
  });
  const handleAddTask = jest.fn();

  await act(async () => {
    render(
      <AddTaskForm
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        handleAddTask={handleAddTask}
      />,
    );
  });

  const input = screen.getByLabelText(/new task/i);
  const button = screen.getByRole('button', { name: /add task/i });

  await act(async () => {
    fireEvent.change(input, { target: { value: 'New Task' } });
  });

  await act(async () => {
    fireEvent.click(button);
  });

  expect(handleAddTask).toHaveBeenCalled();

  expect(
    screen.queryByText(/task title cannot be empty/i),
  ).not.toBeInTheDocument();
});
