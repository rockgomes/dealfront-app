"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownTrayIcon,
  BellIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  EllipsisVerticalIcon,
  TableSettingsIcon,
  MagnifyingGlassIcon,
  ShareIcon,
} from "@/components/ui/icons";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { Avatar } from "@/components/ui/Avatar";
import { DataTable, type DataTableColumn } from "@/components/settings/DataTable";
import { Pagination } from "@/components/settings/Pagination";
import { Input } from "@/components/ui/Input";
import type { ListItem } from "@/data/lists-mock";
import {
  type CompanyRow,
  getMockCompanyRows,
} from "@/data/lists-mock";
import type { ListTypeId } from "@/components/lists/ListsTypeTabs";

const CARD_CLASS =
  "bg-white rounded-[5px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.05),0px_4px_8px_0px_rgba(43,49,49,0.15)]";
const PADDING = "pt-[24px] pr-[24px] pl-[24px] pb-[24px]";

type ListsDetailCardProps = {
  list: ListItem;
  listType: ListTypeId;
};

function formatCount(count: number): string {
  return count >= 1000 ? `${(count / 1000).toFixed(0)}k` : String(count);
}

export function ListsDetailCard({ list, listType }: ListsDetailCardProps) {
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set());
  const companyRows = useMemo(() => getMockCompanyRows(20), []);

  const companyColumns: DataTableColumn<CompanyRow>[] = [
    {
      key: "company",
      header: "Company",
      width: "200px",
      renderCell: (row) => (
        <span className="text-[14px] text-[#161616] truncate block">
          {row.companyName}
        </span>
      ),
    },
    {
      key: "tags",
      header: "Tags",
      width: "140px",
      renderCell: (row) => (
        <div className="flex flex-wrap gap-[4px]">
          {row.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="text-[12px] px-[6px] py-[2px] rounded-full bg-[#e8ecf1] text-[#4d5666]"
            >
              {t}
            </span>
          ))}
          {row.tags.length > 2 && (
            <span className="text-[12px] text-[#646f83]">+{row.tags.length - 2}</span>
          )}
        </div>
      ),
    },
    {
      key: "website",
      header: "Website",
      width: "160px",
      renderCell: (row) => (
        <span className="text-[14px] text-[#4d5666] truncate block">
          {row.website}
        </span>
      ),
    },
    {
      key: "description",
      header: "Company description",
      renderCell: (row) => (
        <span className="text-[14px] text-[#4d5666] truncate block max-w-[200px]">
          {row.description}
        </span>
      ),
    },
    {
      key: "city",
      header: "City",
      width: "100px",
      renderCell: (row) => (
        <span className="text-[14px] text-[#4d5666]">{row.city}</span>
      ),
    },
    {
      key: "country",
      header: "Country",
      width: "80px",
      renderCell: (row) => (
        <span className="text-[14px] text-[#4d5666]">{row.country}</span>
      ),
    },
  ];

  const columnTemplate = "200px 140px 160px 1fr 100px 80px";

  return (
    <div className={`${CARD_CLASS} ${PADDING} flex flex-col gap-[16px] min-h-0`}>
      {/* List header */}
      <div className="flex items-center justify-between gap-[16px] flex-wrap">
        <div className="flex items-center gap-[12px]">
          <h1 className="text-[18px] font-bold text-[#161616]">{list.name}</h1>
          {list.count != null && (
            <span className="text-[12px] font-bold text-[#646f83] bg-[#e8ecf1] rounded-[100px] px-[8px] py-[2px]">
              {formatCount(list.count)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-[8px] flex-wrap">
          {/* Owner pill */}
          <span
            className={`text-[14px] font-bold rounded-[100px] px-[12px] py-[6px] ${
              list.isOwner !== false
                ? "text-[#1b70f0] bg-[#e8f0fc]"
                : "text-[#4d5666] bg-[#e8ecf1]"
            }`}
          >
            {list.isOwner !== false ? "Owner" : "Shared"}
          </span>
          {/* Users with access */}
          {list.sharedWith && list.sharedWith.length > 0 && (
            <div className="flex items-center -space-x-1.5">
              {list.sharedWith.slice(0, 4).map((user) => (
                <Avatar
                  key={user.id}
                  name={user.name}
                  src={user.avatarUrl}
                  size="sm"
                  className="ring-2 ring-white"
                />
              ))}
              {list.sharedWith.length > 4 && (
                <span className="text-[12px] font-bold text-[#4d5666] bg-[#e8ecf1] rounded-full size-[28px] flex items-center justify-center ring-2 ring-white shrink-0">
                  +{list.sharedWith.length - 4}
                </span>
              )}
            </div>
          )}
          <button
            type="button"
            className="size-[36px] flex items-center justify-center rounded-[5px] text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0] transition-colors"
            aria-label="Share list"
          >
            <ShareIcon className="size-[20px]" />
          </button>
          <button
            type="button"
            className="flex items-center gap-[8px] h-[36px] px-[12px] rounded-[5px] border border-[#dfe6f0] text-[14px] font-bold text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0] transition-colors"
          >
            <BellIcon className="size-[20px]" />
            Create alert
          </button>
          <button
            type="button"
            className="size-[36px] flex items-center justify-center rounded-[5px] text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0] transition-colors"
            aria-label="Settings"
          >
            <Cog6ToothIcon className="size-[20px]" />
          </button>
          <DropdownMenu
            align="end"
            sideOffset={4}
            trigger={
              <button
                type="button"
                className="size-[36px] flex items-center justify-center rounded-[5px] text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0] transition-colors"
                aria-label="More actions"
              >
                <EllipsisVerticalIcon className="size-[20px]" />
              </button>
            }
            items={[
              { label: "Edit list", onSelect: () => {} },
              { label: "Duplicate list", onSelect: () => {} },
              { label: "Delete list", onSelect: () => {} },
            ]}
          />
        </div>
      </div>

      {/* Toolbar: search, CRM actions, download, more (left) | Table settings (right) */}
      <div className="flex items-center justify-between gap-[16px] flex-wrap">
        <div className="flex items-center gap-[8px] flex-1 min-w-0">
          <div className="min-w-[200px] max-w-[320px] flex-1">
            <Input
              id="lists-search"
              placeholder={listType === "companies" ? "Search for companies" : "Search for contacts"}
              className="mb-0"
              icon={<MagnifyingGlassIcon className="size-[20px]" />}
            />
          </div>
          <DropdownMenu
            align="start"
            sideOffset={4}
            trigger={
              <button
                type="button"
                className="flex items-center gap-[8px] h-[40px] px-[12px] rounded-[5px] border border-[#dfe6f0] text-[14px] font-bold text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0] transition-colors"
              >
                CRM actions
                <ChevronDownIcon className="size-[20px]" />
              </button>
            }
            items={[
              { label: "Sync with CRM", onSelect: () => {} },
              { label: "View in CRM", onSelect: () => {} },
            ]}
          />
          <button
            type="button"
            className="size-[40px] flex items-center justify-center rounded-[5px] text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0] transition-colors"
            aria-label="Download"
          >
            <ArrowDownTrayIcon className="size-[20px]" />
          </button>
          <DropdownMenu
            align="start"
            sideOffset={4}
            trigger={
              <button
                type="button"
                className="size-[40px] flex items-center justify-center rounded-[5px] text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0] transition-colors"
                aria-label="More options"
              >
                <EllipsisVerticalIcon className="size-[20px]" />
              </button>
            }
            items={[
              { label: "Export", onSelect: () => {} },
              { label: "Bulk edit", onSelect: () => {} },
            ]}
          />
        </div>
        <button
          type="button"
          className="size-[40px] flex items-center justify-center rounded-[5px] text-[#4d5666] hover:bg-[#f7f9fc] hover:text-[#1b70f0] transition-colors"
          aria-label="Table settings"
        >
          <TableSettingsIcon className="size-[20px]" />
        </button>
      </div>

      {/* Table */}
      <div className="min-w-0 overflow-x-auto">
        {listType === "companies" ? (
          <DataTable<CompanyRow>
            columnTemplate={columnTemplate}
            columns={companyColumns}
            data={companyRows}
            getRowId={(row) => row.id}
            selectable
            selectedIds={selectedRowIds}
            onSelectionChange={setSelectedRowIds}
          />
        ) : (
          <div className="border border-[#e8ecf1] rounded-[5px] p-[24px] text-[14px] text-[#646f83]">
            Contact list table coming soon.
          </div>
        )}
      </div>

      {/* Pagination (same as Settings) */}
      {listType === "companies" && (
        <div className="flex items-center justify-end gap-[16px]">
          <p className="text-[14px] text-[#4d5666]">
            1-{companyRows.length} of {list.count != null ? formatCount(list.count) : companyRows.length}
          </p>
          <Pagination />
        </div>
      )}
    </div>
  );
}
