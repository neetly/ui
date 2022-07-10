#!/bin/bash
set -eo pipefail

rm -rf ./src/generated

yarn svgr \
  --typescript \
  --jsx-runtime automatic \
  --svg-props "aria-hidden={true}" \
  --svgo-config ./scripts/svgo.config.js \
  --no-prettier \
  ../../data/icons \
  --out-dir ./src/generated

for file in ./src/generated/*; do
  sed -i "s/\bSVGProps\b/SVGAttributes/g" "$file"
done

yarn run --top-level eslint --max-warnings 0 --fix ./src/generated
yarn run --top-level prettier --write ./src/generated
