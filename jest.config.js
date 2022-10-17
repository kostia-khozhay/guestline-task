module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/test-bundler.js',
  ],
};
