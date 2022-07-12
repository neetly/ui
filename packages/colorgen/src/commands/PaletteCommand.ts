import { getColor } from "@neetly/colorspace";
import { Command, Option } from "clipanion";
import { promises as fs } from "fs";
import path from "path";

import type { Palette, PaletteColor } from "../types/Palette";
import type { Schema } from "../types/Schema";

class PaletteCommand extends Command {
  static override paths = [["palette"]];

  schemaFile = Option.String("--schema-file", { required: true });
  outFile = Option.String("--out-file", { required: true });

  async execute() {
    const schema = JSON.parse(
      (await fs.readFile(this.schemaFile)).toString(),
    ) as Schema;

    const colors: PaletteColor[] = [];
    for (const role of schema.roles) {
      for (const tone of schema.tones) {
        colors.push({
          id: `${role.id}--${tone.id}`,
          color: getColor(role.hue, role.chroma, tone.lightness),
        });
      }
    }

    const palette: Palette = { colors };

    await fs.mkdir(path.dirname(this.outFile), { recursive: true });
    await fs.writeFile(this.outFile, JSON.stringify(palette));
  }
}

export { PaletteCommand };
