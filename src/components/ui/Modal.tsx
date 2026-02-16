"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { XMarkIcon } from "@/components/ui/icons";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  footer,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal container={typeof document !== "undefined" ? document.body : undefined}>
        <Dialog.Overlay className="fixed inset-0 z-[9998] bg-black/40" />
        <Dialog.Content
          className="fixed left-[50%] top-[50%] z-[9999] w-full max-w-[480px] translate-x-[-50%] translate-y-[-50%] rounded-[5px] bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)]"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between px-[24px] pt-[24px]">
            <Dialog.Title className="text-[18px] font-bold text-neutral-600">
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="flex size-[32px] items-center justify-center rounded transition-colors hover:bg-grey-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Close"
              >
                <XMarkIcon className="size-[20px] text-neutral-600" />
              </button>
            </Dialog.Close>
          </div>
          <div className="max-h-[60vh] overflow-y-auto px-[24px] pb-[24px] pt-[16px]">
            {children}
          </div>
          {footer && (
            <div className="flex justify-end gap-[12px] border-t border-grey-100 px-[24px] pb-[24px] pt-[16px]">
              {footer}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
