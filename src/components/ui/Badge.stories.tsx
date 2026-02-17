import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Design System/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["Pro", "Plus", "No seat"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Pro: Story = {
  args: { variant: "Pro" },
};

export const Plus: Story = {
  args: { variant: "Plus" },
};

export const NoSeat: Story = {
  args: { variant: "No seat" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge variant="Pro" />
      <Badge variant="Plus" />
      <Badge variant="No seat" />
    </div>
  ),
};
