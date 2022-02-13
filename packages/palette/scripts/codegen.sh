#!/bin/bash

set -eo pipefail

python -m venv ../../scripts/.venv
source ../../scripts/.venv/bin/activate
pip install --requirement ../../scripts/requirements.txt

(cd ../.. && python -m scripts.palette_codegen)

deactivate

yarn run --top-level eslint --max-warnings 0 --fix ./src/generated
yarn run --top-level prettier --write ./src/generated
