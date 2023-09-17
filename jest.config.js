const config = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__ mocks __/fileMock.js',
      "\\.(css|less)$": "<rootDir>/src/app/config/CSSStub.js",
      '^@/(.*)$': '<rootDir>/src/app/config/CSSStub.js'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}

module.exports = config;