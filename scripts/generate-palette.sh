#!/bin/bash
set -eo pipefail

yarn colorgen palette \
  --schema-file ./data/palette/schema.json \
  --out-file ./data/palette/palette.json

yarn prettier --write ./data/palette/palette.json
