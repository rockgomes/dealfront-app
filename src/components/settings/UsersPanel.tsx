"use client";

import { useMemo, useState } from "react";
import type { UserRow } from "@/data/settings-users";
import { settingsUsers } from "@/data/settings-users";
import {
  ArrowsUpDownIcon,
  BellIcon,
  ChevronDownIcon,
  KeyIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
} from "@/components/ui/icons";
import { Checkbox } from "@/components/ui/Checkbox";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { Input } from "@/components/ui/Input";
import { Pagination } from "@/components/settings/Pagination";
import { Button } from "@/components/ui/Button";
import { ManageUserAccessModal } from "@/components/settings/ManageUserAccessModal";
import { ProductIconList } from "@/components/settings/ProductIconList";
import { RolesPanel } from "@/components/settings/RolesPanel";
import { Select } from "@/components/ui/Select";

type StatusBadgeProps = {
  status: "Enabled" | "Disabled";
};

function StatusBadge({ status }: StatusBadgeProps) {
  const colors =
    status === "Enabled"
      ? "bg-[#49b149] text-white"
      : "bg-[#dfe6f0] text-[#646f83]";

  return (
    <div
      className={`flex h-[20px] items-center justify-center rounded-[100px] px-[8px] py-[2px] ${colors}`}
    >
      <p className="text-[12px] leading-[1.45]">{status}</p>
    </div>
  );
}

type TabId = "users" | "roles" | "access-requests";

export function UsersPanel() {
  const [activeTab, setActiveTab] = useState<TabId>("users");
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [account, setAccount] = useState<string>("my-company");
  const [seatByUser, setSeatByUser] = useState<Record<string, string>>({});
  const [accessModalUser, setAccessModalUser] = useState<UserRow | null>(null);
  const allSelected = useMemo(
    () =>
      selectedRows.size === settingsUsers.length && settingsUsers.length > 0,
    [selectedRows],
  );
  function toggleRowSelection(rowId: string) {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(rowId)) {
        next.delete(rowId);
      } else {
        next.add(rowId);
      }
      return next;
    });
  }

  function toggleAllRows() {
    setSelectedRows((prev) => {
      if (prev.size === settingsUsers.length) {
        return new Set();
      }
      return new Set(settingsUsers.map((user) => user.id));
    });
  }

  const ACCOUNT_OPTIONS = [
    { value: "my-company", label: "My Company's account" },
  ];
  const SEAT_OPTIONS = [
    { value: "Pro", label: "Pro", badgeVariant: "Pro" as const },
    { value: "Plus", label: "Plus", badgeVariant: "Plus" as const },
    { value: "No seat", label: "No seat", badgeVariant: "No seat" as const },
  ];

  return (
    <div className="bg-white rounded-[5px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.05),0px_4px_8px_0px_rgba(43,49,49,0.15)] p-[24px] flex flex-col gap-[16px]">
      <div className="border-b border-[#ced6e3] flex items-center gap-[24px]">
        <button
          type="button"
          onClick={() => setActiveTab("users")}
          className={`relative flex h-[48px] w-[85px] cursor-pointer items-center justify-center rounded-[5px] transition-colors ${
            activeTab === "users"
              ? "text-[#1b70f0] font-bold"
              : "text-[#646f83] hover:bg-[#f7f9fc] hover:text-[#4d5666]"
          }`}
        >
          <p className="text-[14px] font-bold">Users</p>
          {activeTab === "users" && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1b70f0]" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("roles")}
          className={`relative flex h-[48px] w-[85px] cursor-pointer items-center justify-center rounded-[5px] transition-colors ${
            activeTab === "roles"
              ? "text-[#1b70f0] font-bold"
              : "text-[#646f83] hover:bg-[#f7f9fc] hover:text-[#4d5666]"
          }`}
        >
          <p className="text-[14px] font-bold">Roles</p>
          {activeTab === "roles" && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1b70f0]" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("access-requests")}
          className={`relative flex h-[48px] w-[263px] cursor-pointer items-center justify-center rounded-[5px] transition-colors ${
            activeTab === "access-requests"
              ? "text-[#1b70f0] font-bold"
              : "text-[#646f83] hover:bg-[#f7f9fc] hover:text-[#4d5666]"
          }`}
        >
          <p className="text-[14px]">Access requests and suggestions</p>
          {activeTab === "access-requests" && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1b70f0]" />
          )}
        </button>
      </div>

      {activeTab === "roles" ? (
        <RolesPanel />
      ) : activeTab === "access-requests" ? (
        <div className="py-12 text-center text-[#646f83] text-[14px]">
          Access requests and suggestions
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-[8px] w-full max-w-[316px]">
            <Select
              id="account"
              label="Account"
              value={account}
              onValueChange={setAccount}
              options={ACCOUNT_OPTIONS}
              placeholder="Select account"
            />
            <p className="text-[12px] text-[#4d5666]">
              You&apos;re about to run out of seats.{" "}
              <span className="font-bold text-[#1b70f0] underline">
                Buy more seats here.
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[16px]">
            <div className="flex flex-wrap items-center gap-[16px] sm:gap-[24px]">
              <p className="text-[18px] text-[#161616]">
                All company users (4)
              </p>
              <Button>Invite new user</Button>
            </div>
            <div className="w-full sm:w-[248px] min-w-0">
              <Input
                id="search-users"
                type="search"
                placeholder="Search by name or email"
                icon={
                  <MagnifyingGlassIcon className="size-[24px] text-neutral-400" />
                }
              />
            </div>
          </div>

          <div
            className="border border-[#e8ecf1] overflow-x-auto"
            style={{ minWidth: 0 }}
          >
            <div
              className="min-w-fit grid gap-x-0 gap-y-0"
              style={{
                gridTemplateColumns:
                  "48px minmax(120px, 1fr) minmax(90px, 130px) minmax(100px, 130px) minmax(70px, 90px) minmax(220px, 1fr) minmax(85px, 105px)",
              }}
            >
              <div className="bg-[#f7f9fc] h-[40px] flex items-center justify-center border-b border-[#cedaed] border-r border-[#e8ecf1]">
                <Checkbox
                  checked={allSelected}
                  onToggle={toggleAllRows}
                  ariaLabel="Select all rows"
                />
              </div>
              <div className="bg-[#f7f9fc] h-[40px] flex items-center gap-[10px] px-[10px] border-b border-[#cedaed] border-r border-[#e8ecf1]">
                <p className="text-[14px] font-bold text-[#4d5666]">User</p>
                <ArrowsUpDownIcon className="size-[16px] text-neutral-600 shrink-0" />
              </div>
              <div className="bg-[#f7f9fc] h-[40px] flex items-center gap-[10px] px-[10px] border-b border-[#cedaed] border-r border-[#e8ecf1]">
                <p className="text-[14px] font-bold text-[#4d5666]">Roles</p>
                <ArrowsUpDownIcon className="size-[16px] text-neutral-600 shrink-0" />
              </div>
              <div className="bg-[#f7f9fc] h-[40px] flex items-center gap-[10px] px-[10px] border-b border-[#cedaed] border-r border-[#e8ecf1]">
                <p className="text-[14px] font-bold text-[#4d5666]">Seat</p>
                <QuestionMarkCircleIcon className="size-[16px] text-neutral-600 shrink-0" />
              </div>
              <div className="bg-[#f7f9fc] h-[40px] flex items-center px-[10px] border-b border-[#cedaed] border-r border-[#e8ecf1]">
                <p className="text-[14px] font-bold text-[#4d5666]">Status</p>
              </div>
              <div className="bg-[#f7f9fc] h-[40px] flex items-center justify-between px-[10px] border-b border-[#cedaed] border-r border-[#e8ecf1]">
                <p className="text-[14px] font-bold text-[#4d5666]">Products</p>
                <div className="h-[22px] w-[2px] bg-[#f7f9fc]" />
              </div>
              <div className="bg-[#f7f9fc] h-[40px] flex items-center px-[10px] border-b border-[#cedaed]">
                <p className="text-[14px] font-bold text-[#4d5666]">Actions</p>
              </div>

              {settingsUsers.map((user) => {
                const isSelected = selectedRows.has(user.id);
                const rowBg = isSelected
                  ? "bg-[#dbeeff]"
                  : "bg-white group-hover:bg-[#f7f9fc]";

                return (
                  <div key={user.id} className="contents group">
                    <div
                      className={`h-[40px] flex items-center justify-center border-b border-r border-[#e8ecf1] transition-colors ${rowBg}`}
                    >
                      <Checkbox
                        checked={isSelected}
                        onToggle={() => toggleRowSelection(user.id)}
                        ariaLabel={`Select row for ${user.email}`}
                      />
                    </div>
                    <div
                      className={`h-[40px] flex items-center px-[10px] border-b border-r border-[#e8ecf1] transition-colors min-w-0 ${rowBg}`}
                    >
                      <p className="text-[14px] text-[#4d5666] lowercase truncate min-w-0">
                        {user.email}
                      </p>
                    </div>
                    <div
                      className={`h-[40px] flex items-center px-[10px] border-b border-r border-[#e8ecf1] transition-colors ${rowBg}`}
                    >
                      <p
                        className={`text-[14px] ${
                          user.role === "No role"
                            ? "text-[#b1bccf]"
                            : "text-[#4d5666]"
                        }`}
                      >
                        {user.role}
                      </p>
                    </div>
                    <div
                      className={`h-[40px] flex items-center px-[10px] border-b border-r border-[#e8ecf1] relative transition-colors ${rowBg}`}
                    >
                      <Select
                        value={seatByUser[user.id] ?? user.seat}
                        onValueChange={(value) =>
                          setSeatByUser((prev) => ({
                            ...prev,
                            [user.id]: value,
                          }))
                        }
                        options={SEAT_OPTIONS}
                        placeholder="Select seat"
                        className="w-[112px]"
                        size="sm"
                      />
                    </div>
                    <div
                      className={`h-[40px] flex items-center px-[10px] border-b border-r border-[#e8ecf1] transition-colors ${rowBg}`}
                    >
                      <StatusBadge status={user.status} />
                    </div>
                    <div
                      className={`h-[40px] flex items-center px-[10px] border-b border-r border-[#e8ecf1] transition-colors min-w-0 ${rowBg}`}
                    >
                      <ProductIconList
                        className="h-[25px] relative min-w-[220px] shrink-0"
                        variant={user.productVariant}
                      />
                    </div>
                    <div
                      className={`h-[40px] flex items-center px-[10px] border-b border-[#e8ecf1] relative transition-colors ${rowBg}`}
                    >
                      <DropdownMenu
                        align="end"
                        sideOffset={4}
                        trigger={
                          <button
                            className="border border-neutral-600 rounded-[5px] h-[24px] px-[10.5px] py-[3.5px] flex items-center gap-[4px] transition-colors hover:bg-grey-50 active:bg-grey-selected focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
                            type="button"
                          >
                            <span className="text-[12px] text-neutral-600">
                              Manage
                            </span>
                            <ChevronDownIcon className="size-[16px] text-neutral-600 shrink-0" />
                          </button>
                        }
                        items={[
                          {
                            label: "Notifications",
                            icon: (
                              <BellIcon className="size-[24px] text-neutral-600" />
                            ),
                          },
                          {
                            label: "Access",
                            icon: (
                              <KeyIcon className="size-[24px] text-neutral-600" />
                            ),
                            onSelect: () => setAccessModalUser(user),
                          },
                        ]}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-end gap-[16px]">
            <p className="text-[14px] text-[#4d5666]">1-20 of 348</p>
            <Pagination />
          </div>

          <ManageUserAccessModal
            open={!!accessModalUser}
            onOpenChange={(open) => !open && setAccessModalUser(null)}
            user={accessModalUser}
          />
        </>
      )}
    </div>
  );
}
