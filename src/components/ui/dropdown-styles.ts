/** Shared styles for dropdown content and items - matches Company->Manage design */
/** z-[10000] ensures dropdowns appear above modal overlay (z-9998) and content (z-9999) */
export const dropdownContentClasses =
  "bg-white rounded-[5px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] p-[8px] z-[10000]";

export const dropdownItemClasses =
  "h-[40px] flex items-center gap-[12px] px-[10px] text-left text-[14px] text-neutral-600 transition-colors hover:bg-grey-50 active:bg-grey-selected cursor-pointer outline-none data-[highlighted]:bg-grey-50";
