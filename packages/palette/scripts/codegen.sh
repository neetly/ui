#!/bin/bash
set -eo pipefail

rm -rf ./src/generated

yarn colorgen codegen \
  --palette-file ../../data/palette/palette.json \
  --out-dir ./src/generated

yarn run --top-level eslint --max-warnings 0 --fix ./src/generated
yarn run --top-level prettier --write ./src/generated
