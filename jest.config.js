module.exports = {
  collectCoverageFrom: ['index.js'],
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 75,
      lines: 80,
      statements: 80,
    },
  },
};
