import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AddTaskForm from '../components/AddTaskForm';
import TaskFilter from '../components/TaskFilter';
import TaskGrid from '../components/TaskGrid';
import useTaskManager from '../hooks/useTaskManager';

const TaskManager: React.FC = () => {
  const {
    tasksResponse,
    paginationModel,
    filter,
    taskTitle,
    setTaskTitle,
    handleAddTask,
    handlePaginationChange,
    handleFilterChange,
  } = useTaskManager();

  return (
    <Container style={{ marginTop: '40px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Add new task
      </Typography>
      <Box sx={{ mb: 3 }}>
        <AddTaskForm
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          handleAddTask={handleAddTask}
        />
      </Box>
      <TaskFilter filter={filter} setFilter={handleFilterChange} />
      <TaskGrid
        tasksResponse={tasksResponse}
        paginationModel={paginationModel}
        handlePaginationChange={handlePaginationChange}
      />
    </Container>
  );
};

export default TaskManager;
