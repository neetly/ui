declare module "culori" {
  type Color<Mode extends string = string, Keys extends string = string> = {
    mode: Mode;
  } & {
    [key in Keys | "alpha"]?: string extends Keys ? Mode | number : number;
  };

  type ColorLike<Mode extends string = string, Keys extends string = string> =
    | Color<Mode, Keys>
    | Mode;

  type ColorValue<Keys extends string = string> = {
    [key in Keys | "alpha"]?: number;
  };

  type ColorFunction<Mode extends string, Keys extends string> = (
    color: ColorLike | ColorValue<Keys>,
  ) => Color<Mode, Keys>;

  const lab: ColorFunction<"lab", "l" | "a" | "b">;
  const lch: ColorFunction<"lch", "l" | "c" | "h">;
  const oklab: ColorFunction<"oklab", "l" | "a" | "b">;
  const oklch: ColorFunction<"oklch", "l" | "c" | "h">;
  const xyz50: ColorFunction<"xyz50", "x" | "y" | "z">;
  const xyz65: ColorFunction<"xyz65", "x" | "y" | "z">;

  const formatCss: (color: ColorLike) => string;
  const formatHex: (color: ColorLike) => string;
  const formatHex8: (color: ColorLike) => string;
  const formatHsl: (color: ColorLike) => string;
  const formatRgb: (color: ColorLike) => string;

  const displayable: (color: ColorLike) => boolean;

  const clampRgb: <Mode extends string = string, Keys extends string = string>(
    color: ColorLike<Mode, Keys>,
  ) => Color<Mode, Keys>;

  const clampChroma: <
    Mode extends string = string,
    Keys extends string = string,
  >(
    color: ColorLike<Mode, Keys>,
    mode?: string,
  ) => Color<Mode, Keys>;

  export type { Color, ColorFunction, ColorLike, ColorValue };
  export {
    clampChroma,
    clampRgb,
    displayable,
    formatCss,
    formatHex,
    formatHex8,
    formatHsl,
    formatRgb,
    lab,
    lch,
    oklab,
    oklch,
    xyz50,
    xyz65,
  };
}
