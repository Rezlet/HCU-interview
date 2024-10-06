import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import TaskManager from './pages/TaskManager';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskManager />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
