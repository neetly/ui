import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";
import { useState } from "react";

import { Button } from "../Button";
import { Dialog } from "./Dialog";

export default {
  component: Dialog,
  render: ({ children, ...args }) => {
    const [isOpen, setOpen] = useState(false); // eslint-disable-line react-hooks/rules-of-hooks

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={isOpen} onClose={() => setOpen(false)} {...args}>
          <Button onClick={() => setOpen(false)}>Close Dialog</Button>
          {children}
        </Dialog>
      </>
    );
  },
} as ComponentMeta<typeof Dialog>;

export const Default: ComponentStory<typeof Dialog> = {};

export const Scrollable: ComponentStory<typeof Dialog> = {
  args: {
    children: <div style={{ height: "150vh" }} />,
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
