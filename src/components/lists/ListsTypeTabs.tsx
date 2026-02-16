"use client";

export type ListTypeId = "companies" | "contacts";

type ListsTypeTabsProps = {
  activeListType: ListTypeId;
  onListTypeChange?: (type: ListTypeId) => void;
  variant?: "default" | "sidebar";
};

export function ListsTypeTabs({
  activeListType,
  onListTypeChange,
  variant = "default",
}: ListsTypeTabsProps) {
  const tabs: { id: ListTypeId; label: string }[] = [
    { id: "companies", label: "Companies" },
    { id: "contacts", label: "Contacts" },
  ];

  const isSidebar = variant === "sidebar";
  const wrapperClass = isSidebar
    ? "flex h-[40px] items-center gap-[16px]"
    : "bg-white border-b border-[#dfe6f0] flex h-[56px] items-center px-[16px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)]";
  const innerClass = isSidebar ? "flex h-full items-center gap-[16px]" : "flex h-full items-center gap-[24px]";
  const buttonClass = isSidebar ? "px-[8px] py-[6px]" : "px-[12px] py-[8px]";

  return (
    <div className={wrapperClass}>
      <div className={innerClass}>
        {tabs.map((tab) => {
          const isActive = activeListType === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onListTypeChange?.(tab.id)}
              className={`relative flex h-full cursor-pointer items-center justify-center rounded-[5px] transition-colors ${buttonClass} ${
                isActive
                  ? "text-[#1b70f0] font-bold"
                  : "text-[#4d5666] font-bold hover:bg-[#f7f9fc] hover:text-[#1b70f0]"
              }`}
            >
              <p className="text-[14px] font-bold">{tab.label}</p>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1b70f0]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
