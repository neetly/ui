import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { TextField } from "./TextField";

export default {
  component: TextField,
  args: {
    placeholder: "Placeholder",
  },
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = {};
