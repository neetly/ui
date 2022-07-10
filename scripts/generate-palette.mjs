#!/usr/bin/env node

import { spawnSync } from "child_process";
import { clampChroma, formatHex } from "culori";
import fs from "fs";

const schema = JSON.parse(fs.readFileSync("./data/palette/schema.json"));

const palette = [];
for (const role of schema.roles) {
  for (const tone of schema.tones) {
    const color = {
      mode: "oklch",
      l: (tone.tone / 100) * 0.85 + 0.15,
      c: (role.chroma / 100) * 0.3,
      h: role.hue,
    };

    palette.push({
      id: `${role.id}/${tone.id}`,
      color: formatHex(clampChroma(color, "oklch")),
    });
  }
}

fs.writeFileSync("./data/palette/palette.json", JSON.stringify(palette));

spawnSync("yarn", ["prettier", "--write", "./data/palette/palette.json"], {
  stdio: "inherit",
});
