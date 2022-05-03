import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { TextField } from "./TextField";

export default {
  component: TextField,
  args: {
    label: "Text Field",
  },
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = {
  args: {
    defaultValue: "Text",
  },
};

export const Placeholder: ComponentStory<typeof TextField> = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Disabled: ComponentStory<typeof TextField> = {
  args: {
    value: "Text",
    disabled: true,
  },
};

export const ReadOnly: ComponentStory<typeof TextField> = {
  args: {
    value: "Text",
    readOnly: true,
  },
};
