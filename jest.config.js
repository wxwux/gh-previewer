module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "collectCoverageFrom": [
    "src/**/*.js",
    "!src/**/*.d.ts"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/jest/setupTests.js",
    './node_modules/jest-enzyme/lib/index.js'
  ],
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.js",
    "<rootDir>/src/**/*.{spec,test}.js"
  ],
  moduleNameMapper: {
    "^@ui(.*)$": "<rootDir>/src/components/UI/$1",
    // ".*components(.*)": "<rootDir>/components/$1",
    // "^~/helpers/(.*)": "<rootDir>/helpers/$1",
    // ".*sections/(.*)": "<rootDir>/components/_sections/$1",
    // "^professions/(.*)": "<rootDir>/components/_sections/_professions/$1",
    // "^course/(.*)": "<rootDir>/components/_sections/_course/$1",
    // "^~?(.*(svg|png|jpg))$": "<rootDir>/__mocks__/fileMock.js",
    // "^.*?(sqip|webp|lqip)$": "<rootDir>/__mocks__/fileMock.js",
    // "^.+\\.(p?css|ttf|woff|woff2)$": "jest-transform-stub",
    // "^vue$": "vue/dist/vue.common.js"
  },
  "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  "modulePaths": [],
  "moduleFileExtensions": [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
