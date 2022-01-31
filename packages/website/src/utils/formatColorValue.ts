import type { Color } from "../types/Color";

const formatColorValue = (color: Color) => {
  return color.value.toUpperCase();
};

export { formatColorValue };
