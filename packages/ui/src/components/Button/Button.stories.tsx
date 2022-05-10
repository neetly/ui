import { AddIcon } from "@neetly/icons";
import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";
import type { MouseEvent } from "react";

import { Button } from "./Button";

const variants = ["default", "primary", "outline", "text"] as const;
const colors = ["primary", "secondary", "tertiary"] as const;

export default {
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    onClick: { action: true },
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
          justifyContent: "start",
          gap: "1rem",
        }}
      >
        {variants.map((variant) =>
          colors.map((color) => (
            <Button
              key={`${variant}/${color}`}
              variant={variant}
              color={color}
              {...args}
            />
          )),
        )}
      </div>
    );
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = {};

export const Icon: ComponentStory<typeof Button> = {
  args: {
    icon: AddIcon,
  },
};

export const IconBefore: ComponentStory<typeof Button> = {
  args: {
    iconBefore: AddIcon,
  },
};

export const IconAfter: ComponentStory<typeof Button> = {
  args: {
    iconAfter: AddIcon,
  },
};

export const Disabled: ComponentStory<typeof Button> = {
  args: {
    disabled: true,
  },
};

export const Link: ComponentStory<typeof Button> = {
  args: {
    as: "a",
    href: "#",
    onClick: (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
    },
  },
};
