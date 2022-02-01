import { palette } from "@neetly/palette";

import type { Color } from "../types/Color";
import type { ColorGroup } from "../types/ColorGroup";

const colors: readonly Color[] = Object.entries(palette).map(([id, value]) => {
  const [groupId, tone] = id.split("--");
  return {
    id,
    value,
    groupId: groupId!, // eslint-disable-line @typescript-eslint/no-non-null-assertion
    tone: tone!, // eslint-disable-line @typescript-eslint/no-non-null-assertion
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
