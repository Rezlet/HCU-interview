// src/setupTests.js

// Import required dependencies for testing
import '@testing-library/jest-dom/extend-expect'; // Optional: for improved assertions

// Store the original console.error
const originalConsoleError = console.error;

// Override console.error to filter out specific warnings
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('Warning: ReactDOMTestUtils.act is deprecated')
  ) {
    return; // Suppress the specific deprecation warning
  }

  // Call the original console.error for all other messages
  originalConsoleError(...args);
};
