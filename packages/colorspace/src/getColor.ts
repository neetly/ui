// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../types/culori.d.ts" />

import { clampChroma, formatHex, lch, oklch, xyz50 } from "culori/require";

const getColor = (hue: number, chroma: number, lightness: number) => {
  const luminance = xyz50(lch({ l: lightness })).y as number;

  const color = oklch({
    l: Math.cbrt(luminance),
    c: (chroma / 100) * 0.3,
    h: hue,
  });

  return formatHex(clampChroma(color, "oklch"));
};

export { getColor };
