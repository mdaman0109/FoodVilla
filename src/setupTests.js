import '@testing-library/jest-dom/vitest'; // adds matchers (toBeInTheDocument, etc.)
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup(); // ensures clean DOM between tests
});
