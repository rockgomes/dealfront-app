"use client";

import { useState } from "react";
import { TopNav } from "@/components/settings/TopNav";
import { ListsContentArea } from "@/components/lists/ListsContentArea";
import { ListsSidebar } from "@/components/lists/ListsSidebar";
import type { ListTypeId } from "@/components/lists/ListsTypeTabs";
import {
  getMockFolders,
  getMockLists,
} from "@/data/lists-mock";
import { ListsDetailCard } from "@/components/lists/ListsDetailCard";

const EMPTY_CARD_CLASS =
  "bg-white rounded-[5px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.05),0px_4px_8px_0px_rgba(43,49,49,0.15)] p-[24px]";

function createInitialExpanded(type: ListTypeId): Set<string> {
  return type === "companies" ? new Set(["f1"]) : new Set(["tf1"]);
}

export function ListsPage() {
  const [listType, setListType] = useState<ListTypeId>("companies");
  const [selectedListId, setSelectedListId] = useState<string | null>("l1");
  const [expandedFolderIdsByType, setExpandedFolderIdsByType] = useState<
    Record<ListTypeId, Set<string>>
  >(() => ({
    companies: createInitialExpanded("companies"),
    contacts: createInitialExpanded("contacts"),
  }));

  function handleListTypeChange(type: ListTypeId) {
    setListType(type);
    setSelectedListId(null);
  }

  function toggleFolder(folderId: string) {
    setExpandedFolderIdsByType((prev) => {
      const currentSet = prev[listType];
      const nextSet = new Set(currentSet);
      if (nextSet.has(folderId)) nextSet.delete(folderId);
      else nextSet.add(folderId);
      return { ...prev, [listType]: nextSet };
    });
  }

  const folders = getMockFolders(listType);
  const lists = getMockLists(listType);
  const expandedFolderIds = expandedFolderIdsByType[listType];
  const selectedList = selectedListId != null
    ? lists.find((l) => l.id === selectedListId) ?? null
    : null;

  return (
    <div className="bg-[#e8ecf1] min-h-screen min-w-[1440px] relative overflow-hidden">
      <div className="fixed left-0 right-0 top-0 z-20">
        <TopNav />
      </div>
      <div className="fixed left-0 top-[56px] bottom-0 z-10 overflow-y-auto">
        <ListsSidebar
          listType={listType}
          folders={folders}
          lists={lists}
          selectedListId={selectedListId}
          expandedFolderIds={expandedFolderIds}
          onSelectList={setSelectedListId}
          onToggleFolder={toggleFolder}
          onListTypeChange={handleListTypeChange}
        />
      </div>
      <ListsContentArea>
        {selectedList == null ? (
          <div className={EMPTY_CARD_CLASS}>
            <p className="text-[18px] font-bold text-[#161616]">
              Select a list
            </p>
            <p className="text-[14px] text-[#646f83] mt-[8px]">
              Choose a list from the sidebar to view its companies or contacts.
            </p>
          </div>
        ) : (
          <ListsDetailCard list={selectedList} listType={listType} />
        )}
      </ListsContentArea>
    </div>
  );
}
