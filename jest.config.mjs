// jest.config.mjs

export default {
  // The `transform` option defines how Jest should transform different file types.
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel for JavaScript and TypeScript files
  },

  // The `testRegex` option specifies the pattern Jest uses to look for test files.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$', // Match files with .test.js, .spec.js, .test.jsx, .spec.jsx, etc.

  // Other common options can include `moduleFileExtensions`, `moduleNameMapper`, `setupFiles`, etc.
  extensionsToTreatAsEsm: ['.mjs'], // Set the file extensions to treat as ESM
};
