import { getColor } from "@neetly/colorspace";
import { Command, Option } from "clipanion";
import { promises as fs } from "fs";

import type { Palette, PaletteColor } from "../types/Palette";
import type { Schema } from "../types/Schema";

class PaletteCommand extends Command {
  static override paths = [["palette"]];

  schema = Option.String("--schema", { required: true });
  output = Option.String("--output", { required: true });

  async execute() {
    const schema = JSON.parse(
      (await fs.readFile(this.schema)).toString(),
    ) as Schema;

    const colors: PaletteColor[] = [];
    for (const role of schema.roles) {
      for (const tone of schema.tones) {
        colors.push({
          id: `${role.id}/${tone.id}`,
          color: getColor(role.hue, role.chroma, tone.lightness),
        });
      }
    }

    const palette: Palette = { colors };
    await fs.writeFile(this.output, JSON.stringify(palette));
  }
}

export { PaletteCommand };
