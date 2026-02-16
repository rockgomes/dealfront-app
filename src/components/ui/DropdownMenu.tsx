"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { dropdownContentClasses, dropdownItemClasses } from "./dropdown-styles";

export type DropdownMenuItem = {
  label: string;
  icon?: ReactNode;
  onSelect?: () => void;
};

type DropdownMenuProps = {
  trigger: ReactNode;
  items: DropdownMenuItem[];
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

export function DropdownMenu({
  trigger,
  items,
  align = "end",
  sideOffset = 4,
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align={align}
          sideOffset={sideOffset}
          className={dropdownContentClasses}
        >
          <div className="flex flex-col min-w-[160px]">
            {items.map((item, index) => (
              <DropdownMenuPrimitive.Item
                key={index}
                onSelect={item.onSelect}
                className={dropdownItemClasses}
              >
                {item.icon && (
                  <div className="relative size-[24px] shrink-0 overflow-clip flex items-center justify-center">
                    {item.icon}
                  </div>
                )}
                <span>{item.label}</span>
              </DropdownMenuPrimitive.Item>
            ))}
          </div>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
