type BadgeVariant = "Pro" | "Plus" | "No seat";

type BadgeProps = {
  variant: BadgeVariant;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  Pro: "bg-[#ffbe1a] text-[#161616]",
  Plus: "bg-[#024ec1] text-white",
  "No seat": "bg-[#dfe6f0] text-[#646f83]",
};

export function Badge({ variant, className = "" }: BadgeProps) {
  return (
    <div
      className={`flex h-[20px] items-center justify-center rounded-[100px] px-[8px] py-[2px] shrink-0 ${variantStyles[variant]} ${className}`}
    >
      <span className="text-[12px] leading-[1.45]">{variant}</span>
    </div>
  );
}
