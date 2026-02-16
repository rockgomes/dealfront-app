"use client";

import { useCallback, useState } from "react";
import { MagnifyingGlassIcon } from "@/components/ui/icons";
import { PermissionsMatrixTable } from "@/components/settings/PermissionsMatrixTable";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import {
  settingsRoles,
  permissionCategories,
  type PermissionState,
} from "@/data/settings-roles";

function buildInitialPermissionState(): PermissionState {
  const state: PermissionState = {};
  for (const role of settingsRoles) {
    state[role.id] = {};
    for (const category of permissionCategories) {
      for (const perm of category.permissions) {
        // Admin gets all permissions; others start unchecked
        state[role.id][perm.id] = role.id === "admin";
      }
    }
  }
  return state;
}

export function RolesPanel() {
  const [permissionState, setPermissionState] = useState<PermissionState>(
    buildInitialPermissionState
  );
  const [viewRolesFor, setViewRolesFor] = useState<string>("all-accounts");

  const handlePermissionChange = useCallback(
    (roleId: string, permissionId: string, checked: boolean) => {
      setPermissionState((prev) => ({
        ...prev,
        [roleId]: {
          ...prev[roleId],
          [permissionId]: checked,
        },
      }));
    },
    []
  );

  const VIEW_ROLES_OPTIONS = [{ value: "all-accounts", label: "All accounts" }];

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="w-[316px]">
        <Select
          id="view-roles-for"
          label="View roles for"
          value={viewRolesFor}
          onValueChange={setViewRolesFor}
          options={VIEW_ROLES_OPTIONS}
          placeholder="Select"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[24px]">
          <p className="text-[18px] text-[#161616]">
            All roles ({settingsRoles.length})
          </p>
          <Button>Create new role</Button>
        </div>
        <div className="w-[248px]">
          <Input
            id="search-permissions"
            type="search"
            placeholder="Search permissions"
            icon={<MagnifyingGlassIcon className="size-[24px] text-neutral-400" />}
          />
        </div>
      </div>

      <PermissionsMatrixTable
        roles={settingsRoles}
        categories={permissionCategories}
        permissionState={permissionState}
        onPermissionChange={handlePermissionChange}
      />
    </div>
  );
}
