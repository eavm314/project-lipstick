export default {
  preset: 'jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.jsx?$": "jest" 
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__ mocks __/fileMock.js',
  },
}