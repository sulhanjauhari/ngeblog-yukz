const path = require("path");

module.exports = {
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./config/jest/setup-test-env.js"),
    path.resolve(__dirname, "./config/setup-enzyme.js"),
  ],
  transform: {
    "\\.svg": "<rootDir>/config/jest/__mocks__/svgTransform.js",
    "^.+\\.(tsx?|jsx?)$": `<rootDir>/config/jest/jest-preprocess.js`,
  },
  moduleNameMapper: {
    "\\.svg": `<rootDir>/config/jest/__mocks__/svgTransform.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/config/jest/__mocks__/file-mocks.js`,
    "^Components(.*)$": "<rootDir>/src/components$1",
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: "(/__tests__/.*|\\.test)\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  setupFiles: [`<rootDir>/config/jest/loadershim.js`],
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  coveragePathIgnorePatterns: [],
  coverageReporters: ["json", "lcov", "text-summary", "clover"],
  coverageThreshold: {
    global: {
      statements: 1,
      branches: 1,
      lines: 1,
      functions: 1,
    },
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
