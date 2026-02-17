import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Design System/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

function CheckboxWithState({ initialChecked = false, disabled = false }: { initialChecked?: boolean; disabled?: boolean }) {
  const [checked, setChecked] = useState(initialChecked);
  return (
    <Checkbox
      checked={checked}
      onToggle={() => setChecked((c) => !c)}
      ariaLabel="Toggle"
      disabled={disabled}
    />
  );
}

export const Unchecked: Story = {
  args: {
    checked: false,
    onToggle: () => {},
    ariaLabel: "Unchecked",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onToggle: () => {},
    ariaLabel: "Checked",
  },
};

export const Interactive: Story = {
  render: () => <CheckboxWithState />,
};

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    onToggle: () => {},
    ariaLabel: "Disabled unchecked",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    onToggle: () => {},
    ariaLabel: "Disabled checked",
    disabled: true,
  },
};
