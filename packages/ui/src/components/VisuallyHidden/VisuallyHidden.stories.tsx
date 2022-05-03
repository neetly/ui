import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { VisuallyHidden } from "./VisuallyHidden";

export default {
  component: VisuallyHidden,
} as ComponentMeta<typeof VisuallyHidden>;

export const Default: ComponentStory<typeof VisuallyHidden> = {
  args: {
    children: "Visually Hidden",
  },
};

export const Button: ComponentStory<typeof VisuallyHidden> = {
  args: {
    children: <button>Visually Hidden</button>,
  },
};
