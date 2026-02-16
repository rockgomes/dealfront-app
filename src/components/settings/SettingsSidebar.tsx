"use client";

export type SettingsSidebarSection = {
  title: string;
  items: readonly { id: string; label: string }[];
};

type SettingsSidebarProps = {
  sections: readonly SettingsSidebarSection[];
  activeItemId: string;
  onItemClick: (itemId: string) => void;
};

export function SettingsSidebar({
  sections,
  activeItemId,
  onItemClick,
}: SettingsSidebarProps) {
  return (
    <aside className="bg-white w-[245px] pt-[24px] pb-[24px] min-h-screen self-stretch">
      <div className="flex flex-col gap-[24px] px-[24px]">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-[14px]">
            <p className="text-[12px] font-bold text-[#646f83]">{section.title}</p>
            {section.items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onItemClick(item.id)}
                className={`text-left pl-[16px] text-[14px] cursor-pointer transition-colors hover:text-[#1b70f0] ${
                  activeItemId === item.id
                    ? "font-bold text-[#073572]"
                    : "text-[#4d5666]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
