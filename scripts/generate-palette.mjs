#!/usr/bin/env node

import { spawnSync } from "child_process";
import { clampChroma, formatHex, lch, oklch, xyz50 } from "culori";
import fs from "fs";

const schema = JSON.parse(fs.readFileSync("./data/palette/schema.json"));

const palette = [];
for (const role of schema.roles) {
  for (const tone of schema.tones) {
    const luminance = xyz50(lch({ l: tone.tone })).y;

    const color = oklch({
      l: Math.cbrt(luminance),
      c: (role.chroma / 100) * 0.3,
      h: role.hue,
    });

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
