"use client";

import { Fragment, useState } from "react";
import {
  ArrowsUpDownIcon,
  EllipsisVerticalIcon,
  InformationCircleIcon,
} from "@/components/ui/icons";
import { Checkbox } from "@/components/ui/Checkbox";
import type {
  Role,
  PermissionCategory,
  PermissionState,
} from "@/data/settings-roles";

type PermissionsMatrixTableProps = {
  roles: Role[];
  categories: PermissionCategory[];
  permissionState: PermissionState;
  onPermissionChange: (
    roleId: string,
    permissionId: string,
    checked: boolean
  ) => void;
};

export function PermissionsMatrixTable({
  roles,
  categories,
  permissionState,
  onPermissionChange,
}: PermissionsMatrixTableProps) {
  const [openMenuRoleId, setOpenMenuRoleId] = useState<string | null>(null);

  const permissionColumnWidth = "minmax(200px, 1fr)";
  const roleColumnWidth = "minmax(120px, 140px)";
  const gridCols = `${permissionColumnWidth} ${roles.map(() => roleColumnWidth).join(" ")}`;

  const headerCellBorder = "border-b border-[#cedaed] border-r border-[#e8ecf1]";
  const lastHeaderCellBorder = "border-b border-[#cedaed]";
  const bodyCellBorder = "border-b border-r border-[#e8ecf1]";
  const lastBodyCellBorder = "border-b border-[#e8ecf1]";

  return (
    <div
      className="border border-[#e8ecf1] overflow-x-auto"
      style={{
        display: "grid",
        gridTemplateColumns: gridCols,
        minWidth: "fit-content",
      }}
    >
      {/* Header row */}
      <div className={`bg-[#f7f9fc] h-[40px] flex items-center gap-[10px] px-[10px] ${headerCellBorder}`}>
        <p className="text-[14px] font-bold text-[#4d5666]">Permission</p>
        <ArrowsUpDownIcon className="size-[16px] text-neutral-600 shrink-0" />
      </div>
      {roles.map((role, roleIdx) => (
        <div
          key={role.id}
          className={`bg-[#f7f9fc] h-[40px] flex items-center gap-[10px] px-[10px] ${roleIdx === roles.length - 1 ? lastHeaderCellBorder : headerCellBorder} relative`}
        >
          <div className="flex items-center gap-[8px] flex-1 min-w-0">
            <p className="text-[14px] font-bold text-[#4d5666] truncate">
              {role.name}
            </p>
            {!role.canEdit && (
              <InformationCircleIcon
                title="Admin role can't be edited"
                className="size-[14px] text-[#9ba6b9] cursor-help shrink-0"
              />
            )}
          </div>
          <button
            type="button"
            className="ml-auto p-1 rounded hover:bg-[#e8ecf1] transition-colors shrink-0"
            onClick={() =>
              setOpenMenuRoleId(openMenuRoleId === role.id ? null : role.id)
            }
            aria-label={`Menu for ${role.name}`}
          >
            <EllipsisVerticalIcon className="size-[16px] text-[#4d5666]" />
          </button>
        </div>
      ))}

      {/* Data rows: category headers and permission rows */}
      {categories.map((category) => (
        <Fragment key={category.id}>
          {/* Category header row - spans full width */}
          <div className="col-span-full bg-[#f7f9fc] h-[40px] flex items-center px-[10px] border-b border-[#cedaed]">
            <p className="text-[14px] font-bold text-[#4d5666]">
              {category.name}
            </p>
          </div>

          {/* Permission rows - each row: permission name + N checkboxes */}
          {category.permissions.map((permission) => (
            <div key={permission.id} className="contents group">
              <div className={`h-[40px] flex items-center px-[10px] ${bodyCellBorder} transition-colors bg-white group-hover:bg-[#f7f9fc]`}>
                <p className="text-[14px] text-[#4d5666]">{permission.name}</p>
              </div>
              {roles.map((role, roleIdx) => {
                const isChecked =
                  permissionState[role.id]?.[permission.id] ?? false;
                const isDisabled = !role.canEdit;
                const isLastRole = roleIdx === roles.length - 1;
                return (
                  <div
                    key={`${permission.id}-${role.id}`}
                    className={`h-[40px] flex items-center justify-center px-[10px] ${isLastRole ? lastBodyCellBorder : bodyCellBorder} transition-colors bg-white group-hover:bg-[#f7f9fc]`}
                  >
                    <Checkbox
                      checked={isChecked}
                      onToggle={() =>
                        onPermissionChange(role.id, permission.id, !isChecked)
                      }
                      ariaLabel={`${permission.name} for ${role.name}`}
                      disabled={isDisabled}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
