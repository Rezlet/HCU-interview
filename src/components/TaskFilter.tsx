import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

interface TaskFilterProps {
  filter: 'all' | 'completed' | 'incomplete';
  setFilter: (filter: 'all' | 'completed' | 'incomplete') => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => {
  const handleFilterChange = (
    event: SelectChangeEvent<'all' | 'completed' | 'incomplete'>,
  ) => {
    setFilter(event.target.value as 'all' | 'completed' | 'incomplete');
  };

  return (
    <FormControl style={{ width: '50vw' }}>
      <InputLabel>Status</InputLabel>
      <Select
        labelId="task-filter-label"
        value={filter}
        label="Status"
        data-testid="select-box"
        onChange={handleFilterChange}
        inputProps={{
          'aria-labelledby': 'task-filter-label',
        }}
      >
        <MenuItem data-testid="select-all" value={'all'}>
          All
        </MenuItem>
        <MenuItem data-testid="select-completed" value={'completed'}>
          Completed
        </MenuItem>
        <MenuItem data-testid="select-incomplete" value={'incomplete'}>
          Incomplete
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default TaskFilter;
