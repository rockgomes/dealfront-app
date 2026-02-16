"use client";

import { useState } from "react";
import { TopNav } from "@/components/settings/TopNav";
import { ListsContentArea } from "@/components/lists/ListsContentArea";
import { ListsSidebar } from "@/components/lists/ListsSidebar";
import { ListsTypeTabs, type ListTypeId } from "@/components/lists/ListsTypeTabs";
import { mockFolders, mockLists } from "@/data/lists-mock";

const CARD_CLASS =
  "bg-white rounded-[5px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.05),0px_4px_8px_0px_rgba(43,49,49,0.15)] p-[24px]";

export function ListsPage() {
  const [listType, setListType] = useState<ListTypeId>("companies");
  const [selectedListId, setSelectedListId] = useState<string | null>(null);
  const [expandedFolderIds, setExpandedFolderIds] = useState<Set<string>>(
    () => new Set(["f1"])
  );

  function toggleFolder(folderId: string) {
    setExpandedFolderIds((prev) => {
      const next = new Set(prev);
      if (next.has(folderId)) next.delete(folderId);
      else next.add(folderId);
      return next;
    });
  }

  return (
    <div className="bg-[#e8ecf1] min-h-screen min-w-[1440px] relative overflow-hidden">
      <div className="fixed left-0 right-0 top-0 z-20">
        <TopNav />
        <ListsTypeTabs
          activeListType={listType}
          onListTypeChange={setListType}
        />
      </div>
      <div className="fixed left-0 top-[112px] bottom-0 z-10 overflow-y-auto">
        <ListsSidebar
          listType={listType}
          folders={mockFolders}
          lists={mockLists}
          selectedListId={selectedListId}
          expandedFolderIds={expandedFolderIds}
          onSelectList={setSelectedListId}
          onToggleFolder={toggleFolder}
        />
      </div>
      <ListsContentArea>
        {selectedListId == null ? (
          <div className={CARD_CLASS}>
            <p className="text-[18px] font-bold text-[#161616]">
              Select a list
            </p>
            <p className="text-[14px] text-[#646f83] mt-[8px]">
              Choose a list from the sidebar to view its companies or contacts.
            </p>
          </div>
        ) : (
          <div className={CARD_CLASS}>
            <p className="text-[18px] font-bold text-[#161616]">
              List content
            </p>
            <p className="text-[14px] text-[#646f83] mt-[8px]">
              List detail, toolbar, and table will go here.
            </p>
          </div>
        )}
      </ListsContentArea>
    </div>
  );
}
