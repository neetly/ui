import type { ColorGroup } from "../types/ColorGroup";
import { formatName } from "./formatName";

const formatColorGroupName = (group: ColorGroup) => {
  return formatName(group.id);
};

export { formatColorGroupName };
