const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

// Jestのカスタム設定を設置する場所。従来のプロパティはここで定義。
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^libs/(.*)$': '<rootDir>/src/libs/$1',
    '^providers/(.*)$': '<rootDir>/src/providers/$1',
  }
};

module.exports = createJestConfig(customJestConfig);
