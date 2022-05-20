import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";
import { useState } from "react";

import { Button } from "../Button";
import { Dialog } from "./Dialog";

export default {
  component: Dialog,
  args: {
    children: "Dialog",
  },
  render: (args) => {
    const [isOpen, setOpen] = useState(false); // eslint-disable-line react-hooks/rules-of-hooks

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={isOpen} onClose={() => setOpen(false)} {...args} />
      </>
    );
  },
} as ComponentMeta<typeof Dialog>;

export const Default: ComponentStory<typeof Dialog> = {};

export const Scrollable: ComponentStory<typeof Dialog> = {
  args: {
    children: <div style={{ height: "150vh" }}>Dialog</div>,
  },
};

export const NonCloseable: ComponentStory<typeof Dialog> = {
  args: {
    closeable: false,
  },
};

export const NonDismissible: ComponentStory<typeof Dialog> = {
  args: {
    dismissible: false,
  },
};

export const EscapeOnly: ComponentStory<typeof Dialog> = {
  args: {
    dismissible: "escape-only",
  },
};
