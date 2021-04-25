// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

module.exports = {
  transform: {
    "^.+\\.(tsx?|jsx?)$": `<rootDir>/tests/jest-preprocess.js`,
  },
  moduleNameMapper: {
    // "\\.svg": `./tests/__mocks__/file-mocks.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/tests/__mocks__/file-mocks.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFilesAfterEnv: [path.resolve(__dirname, "./tests/setup-test-env.js")],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: false,
  coverageReporters: ["lcov", "text", "html"],
}
