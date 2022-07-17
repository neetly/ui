import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { Switch } from "./Switch";

export default {
  component: Switch,
  args: {
    label: "Switch",
  },
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = {};

export const Invalid: ComponentStory<typeof Switch> = {
  args: {
    invalid: true,
  },
};

export const ReadOnly: ComponentStory<typeof Switch> = {
  args: {
    readOnly: true,
  },
};

export const Disabled: ComponentStory<typeof Switch> = {
  args: {
    disabled: true,
  },
};
