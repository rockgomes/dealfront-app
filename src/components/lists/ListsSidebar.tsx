"use client";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  EllipsisVerticalIcon,
  FolderIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import type { ListFolder, ListItem } from "@/data/lists-mock";

type ListsSidebarProps = {
  listType: "companies" | "contacts";
  folders: ListFolder[];
  lists: ListItem[];
  selectedListId: string | null;
  expandedFolderIds: Set<string>;
  onSelectList: (listId: string) => void;
  onToggleFolder: (folderId: string) => void;
  onCreateList?: () => void;
  onCreateFolder?: () => void;
};

export function ListsSidebar({
  listType,
  folders,
  lists,
  selectedListId,
  expandedFolderIds,
  onSelectList,
  onToggleFolder,
  onCreateList,
  onCreateFolder,
}: ListsSidebarProps) {
  const createLabel =
    listType === "companies" ? "Create company list" : "Create contact list";

  return (
    <aside className="bg-white w-[245px] min-h-screen self-stretch flex flex-col border-r border-[#e8ecf1]">
      <div className="flex flex-col flex-1 min-h-0 pt-[24px] pb-[24px] px-[16px]">
        <div className="flex items-center justify-between gap-[8px] mb-[16px]">
          <span className="text-[16px] font-bold text-[#161616]">Lists</span>
          <button
            type="button"
            className="size-[24px] flex items-center justify-center text-[#646f83] hover:text-[#1b70f0] cursor-pointer"
            aria-label="Search lists"
          >
            <MagnifyingGlassIcon className="size-[20px]" />
          </button>
        </div>

        <div className="flex items-center gap-[8px] mb-[24px]">
          <Button onClick={onCreateList} type="button">
            <span className="flex items-center gap-[8px]">
              <PlusIcon className="size-[20px]" />
              {createLabel}
            </span>
          </Button>
          <button
            type="button"
            onClick={onCreateFolder}
            className="size-[40px] flex items-center justify-center rounded-[5px] border border-[#dfe6f0] text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0] cursor-pointer transition-colors"
            aria-label="Create folder"
          >
            <FolderIcon className="size-[20px]" />
          </button>
        </div>

        <div className="flex flex-col gap-[2px] overflow-y-auto">
          {folders.map((folder) => {
            const isExpanded = expandedFolderIds.has(folder.id);
            const folderLists = lists.filter((l) => l.folderId === folder.id);
            return (
              <div key={folder.id} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => onToggleFolder(folder.id)}
                  className="flex items-center gap-[8px] py-[6px] px-[8px] rounded-[5px] text-left cursor-pointer transition-colors hover:bg-[#f7f9fc] text-[#4d5666]"
                >
                  {isExpanded ? (
                    <ChevronDownIcon className="size-[16px] shrink-0" />
                  ) : (
                    <ChevronRightIcon className="size-[16px] shrink-0" />
                  )}
                  <FolderIcon className="size-[18px] shrink-0 text-[#646f83]" />
                  {folder.locked && (
                    <LockClosedIcon className="size-[14px] shrink-0 text-[#646f83]" />
                  )}
                  <span className="text-[14px] truncate flex-1 min-w-0">
                    {folder.name}
                  </span>
                </button>
                {isExpanded &&
                  folderLists.map((list) => {
                    const isSelected = selectedListId === list.id;
                    return (
                      <button
                        key={list.id}
                        type="button"
                        onClick={() => onSelectList(list.id)}
                        className={`flex items-center gap-[8px] py-[6px] pl-[32px] pr-[8px] rounded-[5px] text-left cursor-pointer transition-colors group ${
                          isSelected
                            ? "bg-[#dbeeff] text-[#073572] font-bold"
                            : "text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0]"
                        }`}
                      >
                        <DocumentTextIcon className="size-[18px] shrink-0" />
                        <span className="text-[14px] truncate flex-1 min-w-0">
                          {list.name}
                        </span>
                        {list.count != null && (
                          <span className="text-[12px] text-[#646f83] shrink-0">
                            {list.count >= 1000
                              ? `${(list.count / 1000).toFixed(0)}k`
                              : list.count}
                          </span>
                        )}
                        <span className="opacity-0 group-hover:opacity-100 shrink-0 p-[2px] rounded hover:bg-[#e8ecf1]">
                          <EllipsisVerticalIcon className="size-[16px]" />
                        </span>
                      </button>
                    );
                  })}
              </div>
            );
          })}
          {lists
            .filter((l) => l.folderId === null)
            .map((list) => {
              const isSelected = selectedListId === list.id;
              return (
                <button
                  key={list.id}
                  type="button"
                  onClick={() => onSelectList(list.id)}
                  className={`flex items-center gap-[8px] py-[6px] px-[8px] rounded-[5px] text-left cursor-pointer transition-colors group ${
                    isSelected
                      ? "bg-[#dbeeff] text-[#073572] font-bold"
                      : "text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0]"
                  }`}
                >
                  <DocumentTextIcon className="size-[18px] shrink-0" />
                  <span className="text-[14px] truncate flex-1 min-w-0">
                    {list.name}
                  </span>
                  {list.count != null && (
                    <span className="text-[12px] text-[#646f83] shrink-0">
                      {list.count >= 1000
                        ? `${(list.count / 1000).toFixed(0)}k`
                        : list.count}
                    </span>
                  )}
                  <span className="opacity-0 group-hover:opacity-100 shrink-0 p-[2px] rounded hover:bg-[#e8ecf1]">
                    <EllipsisVerticalIcon className="size-[16px]" />
                  </span>
                </button>
              );
            })}
        </div>
      </div>
    </aside>
  );
}
