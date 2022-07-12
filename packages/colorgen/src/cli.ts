import { Builtins, Cli } from "clipanion";

import { CodegenCommand } from "./commands/CodegenCommand";
import { PaletteCommand } from "./commands/PaletteCommand";

const cli = new Cli({
  binaryName: "colorgen",
  binaryLabel: "Color Generator",
});

cli.register(Builtins.HelpCommand);
cli.register(PaletteCommand);
cli.register(CodegenCommand);

export { cli };
