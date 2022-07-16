import { palette } from "@neetly/palette";

import {
  ColorGroupItem,
  ColorGroupList,
} from "../../components/ColorGroupList";
import { ColorItem, ColorList } from "../../components/ColorList";
import { PageLayout } from "../../components/PageLayout";

const groups = Object.entries(
  Object.entries(palette)
    .map(([name, color]) => {
      const [groupName, colorName] = name.split("--") as [string, string];
      return { name, groupName, colorName, color };
    })
    .groupBy((color) => color.groupName),
).map(([name, colors]) => {
  return { name, colors };
});

const PalettePage = () => {
  return (
    <PageLayout title="Color Palette">
      <ColorGroupList>
        {groups.map((group) => (
          <ColorGroupItem key={group.name} name={formatName(group.name)}>
            <ColorList>
              {group.colors.map((color) => (
                <ColorItem
                  key={color.name}
                  name={formatName(color.colorName)}
                  color={color.color}
                />
              ))}
            </ColorList>
          </ColorGroupItem>
        ))}
      </ColorGroupList>
    </PageLayout>
  );
};

const formatName = (name: string) => {
  return name
    .replace(/-/g, " ")
    .replace(/(?<=^| )[a-z]/g, (char) => char.toUpperCase());
};

export { PalettePage };
