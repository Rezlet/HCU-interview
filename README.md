# Task Management App

A task management application built with React, TypeScript, and Material UI. This application allows users to manage their tasks with features like adding, filtering, and pagination.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Linting and Formatting](#linting-and-formatting)
- [Running Tests](#running-tests)
- [License](#license)

## Installation

To get started with this project, you need to have Node.js and npm (or Yarn) installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/Rezlet/HCU-interview
   cd HCU-interview
   
### `npm install`
It will be get All package to run project 
## Running the application

In the project directory, you can run step by step:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Task Management App
**Description:**
The Task Management App allows users to create, view, and filter tasks easily. This application is built with React and uses a mock API to manage task data.

### Features
**1. Create Task**
Users can add new tasks through a form with a text input and an "Add Task" button. Once a task is created, it will immediately appear in the task list.


**2. Read Tasks**
Upon loading the application, it fetches the task list from the mock API and displays it. Users can view all the tasks that have been created.


**3. Filter Tasks**
Users can filter the task list to show "All", "Completed", or "Incomplete" tasks. The task list will automatically update based on the selected filter.

### Mock API
The application uses Mock Service Worker (MSW) to simulate the following API endpoints:

**GET** /tasks: Returns the current list of tasks.

**POST** /tasks: Adds a new task to the list.

## Linting and Formatting 
### `npm run lint`

Runs the linter to check for code quality issues. This command will analyze your code for potential errors and enforce coding standards, helping to maintain code quality.

### `npm run lint`

Formats the code using Prettier. This command will automatically format your code according to the project's defined style rules, ensuring consistency across your codebase.

- Ensure you have the necessary linting and formatting configurations set up in your project (e.g., ESLint and Prettier).
- You might want to adjust the descriptions or add any additional commands that are relevant to your project.

### Running test 


### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
Let me know if you need further modifications or additions!

### License
- Replace the MIT License link in the License section with the appropriate link to your license file if you are using a different license.
- Make sure you have a LICENSE file in your project repository if you mention licensing in your README. 

Let me know if you need any further modifications or details!