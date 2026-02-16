"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon } from "./icons";
import { Badge } from "./Badge";
import { dropdownContentClasses, dropdownItemClasses } from "./dropdown-styles";

export type SelectOption = {
  value: string;
  label: string;
  badgeVariant?: "Pro" | "Plus" | "No seat";
};

type SelectProps = {
  value?: string;
  onValueChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  size?: "default" | "sm";
};

export function Select({
  value,
  onValueChange,
  options,
  placeholder = "Select...",
  label,
  id,
  disabled = false,
  className = "",
  size = "default",
}: SelectProps) {
  const triggerId = id ?? `select-${Math.random().toString(36).slice(2)}`;
  const triggerHeight = size === "sm" ? "h-[32px]" : "h-[40px]";

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={triggerId}
          className="text-[12px] font-bold text-neutral-600 block mb-[6px]"
        >
          {label}
        </label>
      )}
      <SelectPrimitive.Root
        value={value || undefined}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <SelectPrimitive.Trigger
          id={triggerId}
          className={`border border-neutral-400 rounded-[5px] ${triggerHeight} pl-[10px] pr-[12px] text-[14px] text-neutral-600 placeholder:text-neutral-400 w-full flex items-center justify-between gap-[8px] bg-white data-[placeholder]:text-neutral-400 hover:bg-grey-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none`}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronDownIcon className="size-[16px] text-neutral-600 shrink-0" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={4}
            className={`${dropdownContentClasses} min-w-[var(--radix-select-trigger-width)] max-h-[300px] overflow-auto`}
          >
            <SelectPrimitive.Viewport>
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  className={dropdownItemClasses}
                >
                  <SelectPrimitive.ItemText>
                    {option.badgeVariant ? (
                      <Badge variant={option.badgeVariant} />
                    ) : (
                      option.label
                    )}
                  </SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  );
}
