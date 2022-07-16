import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";
import { useId } from "react";

import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  args: {
    label: "Checkbox",
  },
  render: (args) => {
    const id = useId(); // eslint-disable-line react-hooks/rules-of-hooks

    return (
      <div
        style={{
          display: "grid",
          justifyItems: "start",
          gap: "0.5rem",
        }}
      >
        <Checkbox name={id} {...args} />
        <Checkbox name={id} {...args} />
        <Checkbox name={id} {...args} />
      </div>
    );
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = {};

export const Invalid: ComponentStory<typeof Checkbox> = {
  args: {
    invalid: true,
  },
};

export const Disabled: ComponentStory<typeof Checkbox> = {
  args: {
    disabled: true,
  },
};
