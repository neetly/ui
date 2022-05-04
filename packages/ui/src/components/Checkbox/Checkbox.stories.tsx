import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  args: {
    label: "Checkbox",
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = {};
