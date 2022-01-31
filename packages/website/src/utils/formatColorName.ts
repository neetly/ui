import type { Color } from "../types/Color";
import { formatName } from "./formatName";

const formatColorName = (color: Color) => {
  return formatName(color.groupId) + " / " + formatName(color.tone);
};

export { formatColorName };
