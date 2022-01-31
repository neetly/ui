import { palette } from "@neetly/palette";

import type { Color } from "../types/Color";
import type { ColorGroup } from "../types/ColorGroup";

const colors: readonly Color[] = Object.entries(palette).map(([id, color]) => {
  const segments = id.split("-");
  return {
    id,
    groupId: segments.slice(0, -1).join("-"),
    tone: segments.slice(-1).join("-"),
    color,
  };
});

const colorGroupMap = colors.groupByToMap((color) => color.groupId);
const colorGroups: readonly ColorGroup[] = Array.from(colorGroupMap).map(
  ([groupId, colors]) => {
    return {
      id: groupId,
      colors,
    };
  },
);

export { colorGroups, colors };
