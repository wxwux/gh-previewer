module.exports = {
  roots: [
    "<rootDir>/src",
  ],
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/*.d.ts",
  ],
  setupFilesAfterEnv: [
    "<rootDir>/jest/setupTests.js",
    "./node_modules/jest-enzyme/lib/index.js",
  ],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.js",
    "<rootDir>/src/**/*.{spec,test}.js",
  ],
  moduleNameMapper: {
    "^@ui(.*)$": "<rootDir>/src/components/UI/$1",
    "^~(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  modulePaths: [],
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
