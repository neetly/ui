import { SearchIcon } from "@neetly/icons";
import type { ComponentMeta, ComponentStory } from "@storybook/react/types-7-0";

import { TextInput } from "./TextInput";

export default {
  component: TextInput,
  args: {
    label: "Text Field",
    placeholder: "Placeholder",
    defaultValue: "Text",
  },
} as ComponentMeta<typeof TextInput>;

export const Default: ComponentStory<typeof TextInput> = {};

export const Placeholder: ComponentStory<typeof TextInput> = {
  args: {
    defaultValue: "",
  },
};

export const IconBefore: ComponentStory<typeof TextInput> = {
  args: {
    iconBefore: SearchIcon,
  },
};

export const IconAfter: ComponentStory<typeof TextInput> = {
  args: {
    iconAfter: SearchIcon,
  },
};

export const ReadOnly: ComponentStory<typeof TextInput> = {
  args: {
    readOnly: true,
  },
};

export const Disabled: ComponentStory<typeof TextInput> = {
  args: {
    disabled: true,
  },
};
