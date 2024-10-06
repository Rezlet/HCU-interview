
import '@testing-library/jest-dom/extend-expect';

const originalConsoleError = console.error;

console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('Warning: ReactDOMTestUtils.act is deprecated')
  ) {
  }

  originalConsoleError(...args);
};
