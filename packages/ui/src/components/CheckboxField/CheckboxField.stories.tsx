import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { CheckboxField } from "./CheckboxField";

export default {
  component: CheckboxField,
  args: {
    label: "Checkbox Field",
  },
} as ComponentMeta<typeof CheckboxField>;

export const Default: ComponentStory<typeof CheckboxField> = {};

export const Description: ComponentStory<typeof CheckboxField> = {
  args: {
    description: "Description",
  },
};

export const Invalid: ComponentStory<typeof CheckboxField> = {
  args: {
    invalid: true,
  },
};

export const ErrorMessage: ComponentStory<typeof CheckboxField> = {
  args: {
    invalid: true,
    errorMessage: "Error Message",
  },
};

export const ReadOnly: ComponentStory<typeof CheckboxField> = {
  args: {
    readOnly: true,
  },
};

export const Disabled: ComponentStory<typeof CheckboxField> = {
  args: {
    disabled: true,
  },
};
