import { ReactNode } from "react";

type ListsContentAreaProps = {
  children: ReactNode;
};

/** Main content area for Lists: same left margin and top padding as Settings. */
export function ListsContentArea({ children }: ListsContentAreaProps) {
  return (
    <div className="relative ml-[295px] pt-[56px] px-[24px] pb-[40px]">
      {children}
    </div>
  );
}
