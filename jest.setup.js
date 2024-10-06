import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

// Override the default act function to suppress the warning
const originalAct = act;

act = (callback) => {
  return originalAct(() => {
    try {
      return callback();
    } catch (error) {
      throw error;
    }
  });
};
