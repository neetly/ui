import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { TextField } from "./TextField";

export default {
  component: TextField,
  args: {
    label: "Text Field",
    defaultValue: "Text",
  },
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = {};

export const Placeholder: ComponentStory<typeof TextField> = {
  args: {
    placeholder: "Placeholder",
    defaultValue: "",
  },
};

export const Disabled: ComponentStory<typeof TextField> = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: ComponentStory<typeof TextField> = {
  args: {
    readOnly: true,
  },
};

export const TextArea: ComponentStory<typeof TextField> = {
  args: {
    as: "textarea",
    rows: 3,
  },
};
