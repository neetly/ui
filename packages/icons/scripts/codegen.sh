#!/bin/bash

set -eo pipefail

yarn svgr \
  --typescript \
  --jsx-runtime automatic \
  --svg-props aria-hidden={true} \
  --no-prettier \
  ../../data/icons \
  --out-dir ./src/generated

yarn run --top-level eslint --max-warnings 0 --fix ./src/generated
yarn run --top-level prettier --write ./src/generated
