import { InputHTMLAttributes, forwardRef, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  error?: string;
  className?: string;
  icon?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, className = "", icon, ...inputProps }, ref) => {
    const baseInputClasses =
      "border border-neutral-400 rounded-[5px] h-[40px] px-[10px] text-[14px] text-neutral-600 placeholder:text-neutral-400 w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
    const labelClasses = "text-[12px] font-bold text-neutral-600 block mb-[6px]";
    const inputWithIconClasses = icon ? "pl-[42px]" : "";

    return (
      <div className={className}>
        {label && (
          <label htmlFor={id} className={labelClasses}>
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-[10px] top-1/2 -translate-y-1/2 size-[24px] flex items-center justify-center pointer-events-none text-neutral-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            className={`${baseInputClasses} ${inputWithIconClasses} ${error ? "border-red-500" : ""}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...inputProps}
        />
        </div>
        {error && (
          <p id={`${id}-error`} className="text-[12px] text-red-500 mt-[4px]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
