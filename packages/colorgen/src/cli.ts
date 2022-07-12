import { Builtins, Cli } from "clipanion";

import { PaletteCommand } from "./commands/PaletteCommand";

const cli = new Cli({
  binaryName: "colorgen",
  binaryLabel: "Color Generator",
});

cli.register(Builtins.HelpCommand);
cli.register(PaletteCommand);

export { cli };
