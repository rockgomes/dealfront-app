/**
 * Re-export Heroicons for consistent icon usage across the app.
 * Use outline variant (24x24). Pass className for sizing/color, e.g.:
 * <MagnifyingGlassIcon className="size-[24px] text-neutral-600" />
 */
export {
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowsUpDownIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  BellIcon,
  KeyIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  UserIcon,
  InformationCircleIcon,
  EllipsisVerticalIcon,
  ListBulletIcon,
  PlusIcon,
  FolderIcon,
  DocumentTextIcon,
  LockClosedIcon,
  ArrowDownTrayIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

/** Custom table/grid settings icon (e.g. column settings). Use className for size/color. */
export function TableSettingsIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="1.66"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10H20M10 4V20M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z" />
    </svg>
  );
}
