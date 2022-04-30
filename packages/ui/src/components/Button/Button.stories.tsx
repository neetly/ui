import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { Button } from "./Button";

export default { component: Button } as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = {
  args: {
    children: "Button",
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <Button {...args} />
        <Button {...args} />
        <Button {...args} />
        <Button {...args} />
      </div>
    );
  },
};
