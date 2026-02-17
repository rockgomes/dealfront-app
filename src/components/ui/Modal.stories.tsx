import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";

const meta: Meta<typeof Modal> = {
  title: "Design System/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

function ModalWithTrigger({
  title,
  children,
  footer,
}: {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode | ((close: () => void) => React.ReactNode);
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const resolvedFooter = typeof footer === "function" ? footer(close) : footer;
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onOpenChange={setOpen} title={title} footer={resolvedFooter}>
        {children}
      </Modal>
    </>
  );
}

export const Default: Story = {
  args: {
    open: true,
    title: "Modal title",
    onOpenChange: () => {},
    children: (
      <p className="text-[14px] text-[#4d5666]">
        This is the modal body. You can put any content here.
      </p>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    open: true,
    title: "Confirm action",
    onOpenChange: () => {},
    children: (
      <p className="text-[14px] text-[#4d5666]">
        Are you sure you want to continue?
      </p>
    ),
    footer: (
      <>
        <Button variant="secondary" onClick={() => {}}>Cancel</Button>
        <Button onClick={() => {}}>Confirm</Button>
      </>
    ),
  },
};

export const Interactive: Story = {
  render: () => (
    <ModalWithTrigger title="Interactive modal">
      <p className="text-[14px] text-[#4d5666]">
        Click the button to open, then use the X or overlay to close.
      </p>
    </ModalWithTrigger>
  ),
};

export const InteractiveWithFooter: Story = {
  render: () => (
    <ModalWithTrigger
      title="Confirm"
      footer={(close) => (
        <>
          <Button variant="secondary" onClick={close}>Cancel</Button>
          <Button onClick={close}>Save</Button>
        </>
      )}
    >
      <p className="text-[14px] text-[#4d5666]">
        This modal has footer actions.
      </p>
    </ModalWithTrigger>
  ),
};
