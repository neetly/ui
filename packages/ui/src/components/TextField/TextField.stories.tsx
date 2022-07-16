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

export const Description: ComponentStory<typeof TextField> = {
  args: {
    description: "Description",
  },
};

export const Invalid: ComponentStory<typeof TextField> = {
  args: {
    invalid: true,
  },
};

export const ErrorMessage: ComponentStory<typeof TextField> = {
  args: {
    invalid: true,
    errorMessage: "Error Message",
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
