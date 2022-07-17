import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";
import { useId } from "react";

import { Radio } from "./Radio";

export default {
  component: Radio,
  args: {
    label: "Radio",
  },
  render: (args) => {
    const id = useId(); // eslint-disable-line react-hooks/rules-of-hooks

    return (
      <div
        style={{
          display: "grid",
          justifyContent: "start",
          gap: "0.5rem",
        }}
      >
        <Radio name={id} {...args} />
        <Radio name={id} {...args} />
        <Radio name={id} {...args} />
      </div>
    );
  },
} as ComponentMeta<typeof Radio>;

export const Default: ComponentStory<typeof Radio> = {};

export const Invalid: ComponentStory<typeof Radio> = {
  args: {
    invalid: true,
  },
};

export const ReadOnly: ComponentStory<typeof Radio> = {
  args: {
    readOnly: true,
  },
};

export const Disabled: ComponentStory<typeof Radio> = {
  args: {
    disabled: true,
  },
};
