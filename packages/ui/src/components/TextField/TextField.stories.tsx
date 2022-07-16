import { SearchIcon } from "@neetly/icons";
import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { TextField } from "./TextField";

export default {
  component: TextField,
  args: {
    label: "Text Field",
    placeholder: "Placeholder",
    defaultValue: "Text",
  },
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = {};

export const Placeholder: ComponentStory<typeof TextField> = {
  args: {
    defaultValue: "",
  },
};

export const IconBefore: ComponentStory<typeof TextField> = {
  args: {
    iconBefore: SearchIcon,
  },
};

export const IconAfter: ComponentStory<typeof TextField> = {
  args: {
    iconAfter: SearchIcon,
  },
};

export const ReadOnly: ComponentStory<typeof TextField> = {
  args: {
    readOnly: true,
  },
};

export const Disabled: ComponentStory<typeof TextField> = {
  args: {
    disabled: true,
  },
};
