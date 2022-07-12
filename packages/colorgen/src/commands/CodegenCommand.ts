import { Command, Option } from "clipanion";
import { promises as fs } from "fs";
import path from "path";

import type { Palette } from "../types/Palette";

class CodegenCommand extends Command {
  static override paths = [["codegen"]];

  paletteFile = Option.String("--palette-file", { required: true });
  outDir = Option.String("--out-dir", { required: true });

  async execute() {
    const palette = JSON.parse(
      (await fs.readFile(this.paletteFile)).toString(),
    ) as Palette;

    await fs.mkdir(this.outDir, { recursive: true });

    await fs.writeFile(
      path.join(this.outDir, "index.ts"),
      file([
        "// This file is auto-generated.",
        "",
        "const palette = {",
        ...indent(
          palette.colors.map(({ id, color }) => {
            return `"${id}": "${color}",`;
          }),
        ),
        "};",
        "",
        "export { palette };",
      ]),
    );

    await fs.writeFile(
      path.join(this.outDir, "index.scss"),
      file([
        "// This file is auto-generated.",
        "",
        ...palette.colors.map(({ id, color }) => {
          return `$${id}: ${color};`;
        }),
      ]),
    );
  }
}

const file = (lines: readonly string[]) => {
  return lines.map((line) => line + "\n").join("");
};

const indent = (lines: readonly string[]) => {
  return lines.map((line) => "  " + line);
};

export { CodegenCommand };
