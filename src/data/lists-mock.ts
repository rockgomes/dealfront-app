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

export const mockFolders: ListFolder[] = [
  { id: "f1", name: "CRM lists", locked: true },
  { id: "f2", name: "German companies" },
  { id: "f3", name: "And another folder" },
];

export const mockLists: ListItem[] = [
  { id: "l1", name: "CRM Connected", folderId: "f1", count: 29000 },
  { id: "l2", name: "CRM Possible Matches", folderId: "f1" },
  { id: "l3", name: "And another list", folderId: "f2" },
  { id: "l4", name: "And another...", folderId: "f2" },
  { id: "l5", name: "And another...", folderId: "f3" },
  { id: "l6", name: "And another...", folderId: null },
];
