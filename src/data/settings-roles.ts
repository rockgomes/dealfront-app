export type Role = {
  id: string;
  name: string;
  canEdit: boolean;
};

export type PermissionCategory = {
  id: string;
  name: string;
  permissions: {
    id: string;
    name: string;
  }[];
};

export type PermissionState = Record<string, Record<string, boolean>>; // roleId -> permissionId -> checked

export const settingsRoles: Role[] = [
  { id: "admin", name: "Admin", canEdit: false },
  { id: "user", name: "User", canEdit: true },
  { id: "sales-manager", name: "Sales manager", canEdit: true },
  { id: "team-lead", name: "Team lead", canEdit: true },
  { id: "another-role", name: "Another role", canEdit: true },
];

export const permissionCategories: PermissionCategory[] = [
  {
    id: "company",
    name: "Company",
    permissions: [
      { id: "general-settings", name: "General settings" },
      { id: "billings", name: "Billings" },
      { id: "payment-methods", name: "Payment methods" },
      { id: "user-management", name: "User management" },
    ],
  },
  {
    id: "leadfeeder",
    name: "Leadfeeder",
    permissions: [
      { id: "lf-perm-1", name: "Permission name" },
      { id: "lf-perm-2", name: "Permission name" },
    ],
  },
  {
    id: "promote",
    name: "Promote",
    permissions: [
      { id: "prom-perm-1", name: "Permission name that takes two lines" },
      { id: "prom-perm-2", name: "Permission name" },
    ],
  },
  {
    id: "target",
    name: "Target",
    permissions: [
      { id: "tgt-perm-1", name: "Permission name" },
      { id: "tgt-perm-2", name: "Permission name" },
      { id: "tgt-perm-3", name: "Permission name" },
    ],
  },
  {
    id: "lists",
    name: "Lists",
    permissions: [
      { id: "list-perm-1", name: "Permission name" },
      { id: "list-perm-2", name: "Permission name" },
    ],
  },
];
