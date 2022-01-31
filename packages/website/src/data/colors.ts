import { palette } from "@neetly/palette";

import type { Color } from "../types/Color";
import type { ColorGroup } from "../types/ColorGroup";

const colors: readonly Color[] = Object.entries(palette).map(([id, value]) => {
  const segments = id.split("-");
  return {
    id,
    value,
    groupId: segments.slice(0, -1).join("-"),
    tone: segments.slice(-1).join("-"),
  };
});

const colorGroups: readonly ColorGroup[] = Object.entries(
  colors.groupBy((color) => color.groupId),
).map(([groupId, colors]) => {
  return {
    id: groupId,
    colors,
  };
});

export { colorGroups, colors };
