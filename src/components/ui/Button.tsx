import { ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  variant = "primary",
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "text-[14px] font-bold rounded-[5px] px-[18px] py-[8px] h-[40px] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2";

  const variantClasses = {
    primary:
      "text-white bg-primary hover:bg-primary-hover active:bg-primary-active focus-visible:outline-primary",
    secondary:
      "text-neutral-600 bg-white border border-neutral-400 hover:bg-grey-50 focus-visible:outline-primary",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}
