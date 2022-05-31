#!/bin/bash
set -eo pipefail

rm -rf ./src/generated

(cd ../.. && pipenv run python -m scripts.palette_codegen)

yarn run --top-level eslint --max-warnings 0 --fix ./src/generated
yarn run --top-level prettier --write ./src/generated
