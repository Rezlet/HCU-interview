import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export interface AddTaskFormProps {
  taskTitle: string;
  setTaskTitle: (title: string) => void;
  handleAddTask: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({
  taskTitle,
  setTaskTitle,
  handleAddTask,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!taskTitle.trim()) {
      setError('Task title cannot be empty.');
      return;
    }
    setError(null);
    handleAddTask();
  };
  return (
    <>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        error={!!error}
        helperText={error}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Add Task
      </Button>
    </>
  );
};

export default AddTaskForm;
