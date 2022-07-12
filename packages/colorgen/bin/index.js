#!/usr/bin/env node

try {
  require.resolve("../src/index.ts");
  require("./register");
} catch {} // eslint-disable-line no-empty

const { Cli } = require("clipanion");

require("@neetly/colorgen").cli.runExit(
  process.argv.slice(2),
  Cli.defaultContext,
);
