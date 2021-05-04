module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/config/test/setup-test.js"],
  testMatch: [`<rootDir>/__tests__/**/*.{test,spec}.{ts,tsx}`],
  transform: {
    "\\.svg": "<rootDir>/config/test/svg-transform.js",
    "^.+\\.(tsx?|jsx?)$": `<rootDir>/config/test/jest-preprocess.js`,
    "^.+\\.css$": "<rootDir>/config/test/css-transform.js",
  },
  moduleNameMapper: {
    "\\.svg": `<rootDir>/config/test/svg-transform.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/config/test/file-mocks.js`,
    "^Components(.*)$": "<rootDir>/src/components$1",
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  setupFiles: [`<rootDir>/config/test/loadershim.js`],
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  coveragePathIgnorePatterns: [],
  coverageReporters: ["json", "lcov", "text-summary", "clover"],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      lines: 10,
      functions: 10,
    },
  },
  testEnvironment: "jsdom",
  resetMocks: true,
};
