export type ListFolder = {
  id: string;
  name: string;
  locked?: boolean;
};

export type ListItem = {
  id: string;
  name: string;
  folderId: string | null;
  count?: number;
};

export type ListTypeId = "companies" | "contacts";

// Companies
export const mockFoldersCompanies: ListFolder[] = [
  { id: "f1", name: "CRM lists", locked: true },
  { id: "f2", name: "German companies" },
  { id: "f3", name: "And another folder" },
];

export const mockListsCompanies: ListItem[] = [
  { id: "l1", name: "CRM Connected", folderId: "f1", count: 29000 },
  { id: "l2", name: "CRM Possible Matches", folderId: "f1" },
  { id: "l3", name: "And another list", folderId: "f2" },
  { id: "l4", name: "And another...", folderId: "f2" },
  { id: "l5", name: "And another...", folderId: "f3" },
  { id: "l6", name: "And another...", folderId: null },
];

// Contacts
export const mockFoldersContacts: ListFolder[] = [
  { id: "tf1", name: "Sales team", locked: true },
  { id: "tf2", name: "Marketing" },
];

export const mockListsContacts: ListItem[] = [
  { id: "tl1", name: "Decision makers", folderId: "tf1", count: 1200 },
  { id: "tl2", name: "Newsletter signups", folderId: "tf1" },
  { id: "tl3", name: "Event attendees", folderId: "tf2" },
  { id: "tl4", name: "Unassigned contacts", folderId: null },
];

export function getMockFolders(listType: ListTypeId): ListFolder[] {
  return listType === "companies" ? mockFoldersCompanies : mockFoldersContacts;
}

export function getMockLists(listType: ListTypeId): ListItem[] {
  return listType === "companies" ? mockListsCompanies : mockListsContacts;
}
