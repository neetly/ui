type Palette = {
  colors: readonly PaletteColor[];
};

type PaletteColor = {
  id: string;
  color: string;
};

export type { Palette, PaletteColor };
