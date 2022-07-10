declare module "culori" {
  type Color = {
    mode: string;
    [key: string]: unknown;
  };

  type ColorLike = Color | string;

  const lch: (value: { l: number; c: number; h: number }) => Color;
  const oklch: (value: { l: number; c: number; h: number }) => Color;

  const clampChroma: (color: ColorLike, mode?: string) => Color;

  const formatHex: (color: ColorLike) => string;

  export type { Color };
  export { clampChroma, formatHex, lch, oklch };
}
