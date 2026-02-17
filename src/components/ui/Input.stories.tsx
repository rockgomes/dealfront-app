import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { MagnifyingGlassIcon } from "./icons";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: "input-default",
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    id: "input-label",
    label: "Email",
    placeholder: "you@example.com",
  },
};

export const WithError: Story = {
  args: {
    id: "input-error",
    label: "Email",
    placeholder: "you@example.com",
    error: "Please enter a valid email address",
  },
};

export const WithIcon: Story = {
  args: {
    id: "input-icon",
    placeholder: "Search...",
    icon: <MagnifyingGlassIcon className="size-[20px]" />,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    id: "input-disabled",
    label: "Disabled",
    placeholder: "Disabled input",
    disabled: true,
  },
};
