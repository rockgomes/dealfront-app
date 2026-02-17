"use client";

type AvatarProps = {
  name: string;
  src?: string;
  size?: "sm" | "md";
  className?: string;
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

const sizeClasses = {
  sm: "size-[28px] text-[12px]",
  md: "size-[36px] text-[14px]",
};

export function Avatar({ name, src, size = "sm", className = "" }: AvatarProps) {
  const sizeClass = sizeClasses[size];

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`rounded-full object-cover shrink-0 ${sizeClass} ${className}`}
      />
    );
  }

  return (
    <div
      className={`rounded-full shrink-0 flex items-center justify-center font-bold text-[#4d5666] bg-[#e8ecf1] ${sizeClass} ${className}`}
      title={name}
    >
      {getInitials(name)}
    </div>
  );
}
