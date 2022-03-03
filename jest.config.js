/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  verbose: true,
  testEnvironment: "jsdom",
};

module.exports = config;
