#!/bin/bash

set -eo pipefail

rm -rf ./data/icons

unzip "$1" -d ./data/icons

for file in ./data/icons/*; do
  mv "$file" "$(echo "$file" | tr "[:upper:]" "[:lower:]" | sed "s/ /-/g")"
done

yarn run svgo --input ./data/icons
yarn run prettier --write ./data/icons
