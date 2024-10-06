import React from 'react';
import { DataGrid, GridPaginationModel, GridColDef } from '@mui/x-data-grid';
import { Checkbox } from '@mui/material';
import { TaskResponse, Task } from '../api/task';

interface TaskGridProps {
  tasksResponse: TaskResponse | undefined;
  paginationModel: GridPaginationModel;
  handlePaginationChange: (model: GridPaginationModel) => void;
}

const TaskGrid: React.FC<TaskGridProps> = ({
  tasksResponse,
  paginationModel,
  handlePaginationChange,
}) => {
  const columns: GridColDef<Task>[] = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'title', headerName: 'Title', width: 240 },
    {
      field: 'completed',
      headerName: 'Completed',
      width: 120,
      renderCell: (params) => (
        <Checkbox checked={params.value} color="primary" data-testid={params.row.id}  aria-label={`Task ${params.row.title} completed`}/>
      ),
    },
  ];

  return (
    <DataGrid
      rows={tasksResponse?.tasks || []}
      columns={columns}
      checkboxSelection
      paginationModel={paginationModel}
      onPaginationModelChange={handlePaginationChange}
      pageSizeOptions={[5, 10]}
      sx={{ border: 0 }}
      rowCount={tasksResponse?.total}
      paginationMode="server"
    />
  );
};

export default TaskGrid;
