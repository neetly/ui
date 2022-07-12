#!/bin/bash
set -eo pipefail

yarn colorgen palette \
  --schema ./data/palette/schema.json \
  --output ./data/palette/palette.json

yarn prettier --write ./data/palette/palette.json
