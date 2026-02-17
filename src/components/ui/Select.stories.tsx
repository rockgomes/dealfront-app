import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Design System/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    label: { control: "text" },
    disabled: { control: "boolean" },
    size: { control: "select", options: ["default", "sm"] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Select>;

const simpleOptions = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
];

const optionsWithBadges = [
  { value: "pro", label: "Pro", badgeVariant: "Pro" as const },
  { value: "plus", label: "Plus", badgeVariant: "Plus" as const },
  { value: "none", label: "No seat", badgeVariant: "No seat" as const },
];

function SelectControlled() {
  const [value, setValue] = useState<string | undefined>("b");
  return (
    <Select
      value={value}
      onValueChange={setValue}
      options={simpleOptions}
      placeholder="Select..."
      label="Choose option"
      id="select-controlled"
    />
  );
}

export const Default: Story = {
  args: {
    options: simpleOptions,
    placeholder: "Select...",
    id: "select-default",
  },
};

export const WithLabel: Story = {
  args: {
    options: simpleOptions,
    placeholder: "Select...",
    label: "Choose an option",
    id: "select-label",
  },
};

export const WithBadges: Story = {
  args: {
    options: optionsWithBadges,
    placeholder: "Select seat...",
    label: "Seat type",
    id: "select-badges",
  },
};

export const Controlled: Story = {
  render: () => <SelectControlled />,
};

export const Small: Story = {
  args: {
    options: simpleOptions,
    placeholder: "Select...",
    size: "sm",
    id: "select-sm",
  },
};

export const Disabled: Story = {
  args: {
    options: simpleOptions,
    placeholder: "Select...",
    disabled: true,
    id: "select-disabled",
  },
};
