import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { SwitchField } from "./SwitchField";

export default {
  component: SwitchField,
  args: {
    label: "Switch Field",
  },
} as ComponentMeta<typeof SwitchField>;

export const Default: ComponentStory<typeof SwitchField> = {};

export const Description: ComponentStory<typeof SwitchField> = {
  args: {
    description: "Description",
  },
};

export const Invalid: ComponentStory<typeof SwitchField> = {
  args: {
    invalid: true,
  },
};

export const ErrorMessage: ComponentStory<typeof SwitchField> = {
  args: {
    invalid: true,
    errorMessage: "Error Message",
  },
};

export const ReadOnly: ComponentStory<typeof SwitchField> = {
  args: {
    readOnly: true,
  },
};

export const Disabled: ComponentStory<typeof SwitchField> = {
  args: {
    disabled: true,
  },
};
