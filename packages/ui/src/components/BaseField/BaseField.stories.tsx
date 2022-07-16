import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { BaseField } from "./BaseField";

export default {
  component: BaseField,
  args: {
    label: "Text Field",
  },
} as ComponentMeta<typeof BaseField>;

export const Default: ComponentStory<typeof BaseField> = {};

export const Description: ComponentStory<typeof BaseField> = {
  args: {
    description: "Description",
  },
};

export const Invalid: ComponentStory<typeof BaseField> = {
  args: {
    invalid: true,
  },
};

export const ErrorMessage: ComponentStory<typeof BaseField> = {
  args: {
    invalid: true,
    errorMessage: "Error Message",
  },
};

export const Disabled: ComponentStory<typeof BaseField> = {
  args: {
    disabled: true,
  },
};
