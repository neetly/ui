import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { RadioField } from "./RadioField";

export default {
  component: RadioField,
  args: {
    label: "Radio Field",
  },
} as ComponentMeta<typeof RadioField>;

export const Default: ComponentStory<typeof RadioField> = {};

export const Description: ComponentStory<typeof RadioField> = {
  args: {
    description: "Description",
  },
};

export const Invalid: ComponentStory<typeof RadioField> = {
  args: {
    invalid: true,
  },
};

export const ErrorMessage: ComponentStory<typeof RadioField> = {
  args: {
    invalid: true,
    errorMessage: "Error Message",
  },
};

export const Disabled: ComponentStory<typeof RadioField> = {
  args: {
    disabled: true,
  },
};
