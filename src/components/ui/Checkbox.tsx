type CheckboxProps = {
  checked: boolean;
  onToggle: () => void;
  ariaLabel: string;
  disabled?: boolean;
};

export function Checkbox({
  checked,
  onToggle,
  ariaLabel,
  disabled = false,
}: CheckboxProps) {
  return (
    <button
      className={`size-[20px] rounded-[3px] border flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
        disabled
          ? "opacity-60 cursor-not-allowed " +
            (checked ? "bg-primary border-primary" : "bg-grey-50 border-grey-300")
          : checked
            ? "bg-primary border-primary"
            : "bg-white border-neutral-400 hover:bg-grey-50 active:bg-grey-selected"
      }`}
      onClick={disabled ? undefined : onToggle}
      type="button"
      aria-checked={checked}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      disabled={disabled}
      role="checkbox"
    >
      {checked ? (
        <svg
          aria-hidden="true"
          className="size-[10px]"
          viewBox="0 0 12 9"
          fill="none"
        >
          <path
            d="M1 4.5L4.5 8L11 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </button>
  );
}
