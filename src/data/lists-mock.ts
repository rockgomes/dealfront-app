export type ListFolder = {
  id: string;
  name: string;
  locked?: boolean;
};

export type ListSharedWithUser = {
  id: string;
  name: string;
  avatarUrl?: string;
};

export type ListItem = {
  id: string;
  name: string;
  folderId: string | null;
  count?: number;
  /** Whether the current user owns this list (drives "Owner" pill styling). */
  isOwner?: boolean;
  /** Users with access to the list (shown as avatars in header). */
  sharedWith?: ListSharedWithUser[];
};

export type ListTypeId = "companies" | "contacts";

// Companies
export const mockFoldersCompanies: ListFolder[] = [
  { id: "f1", name: "CRM lists", locked: true },
  { id: "f2", name: "German companies" },
  { id: "f3", name: "And another folder" },
];

export const mockListsCompanies: ListItem[] = [
  {
    id: "l1",
    name: "CRM Connected",
    folderId: "f1",
    count: 29000,
    isOwner: true,
    sharedWith: [{ id: "u1", name: "Jane Smith" }],
  },
  { id: "l2", name: "CRM Possible Matches", folderId: "f1", isOwner: false },
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

// Table row data for list detail (companies view)
export type CompanyRow = {
  id: string;
  companyName: string;
  tags: string[];
  website: string;
  description: string;
  city: string;
  country: string;
};

const MAX_TABLE_ROWS = 20;

const companyNames = [
  "Phoenix Flame Foundry",
  "Northern Tech Solutions",
  "Summit Design Co",
  "River Valley Industries",
  "Coastal Analytics Inc",
  "Metro Build Ltd",
  "Horizon Consulting",
  "Peak Performance Group",
  "Swift Logistics",
  "Clear View Software",
  "Green Field Partners",
  "Blue Ocean Ventures",
  "Silver Line Manufacturing",
  "Golden Gate Services",
  "Red Stone Labs",
  "Urban Scale Co",
  "Next Wave Digital",
  "Prime Data Systems",
  "Core Logic Ltd",
  "Vertex Solutions",
];

const tagsPool = ["B2B", "SaaS", "Enterprise", "SMB", "Tech", "Finance", "Healthcare", "Retail", "Games", "Movies"];

function randomTags(): string[] {
  const n = Math.floor(Math.random() * 3) + 1;
  const shuffled = [...tagsPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

export function getMockCompanyRows(count?: number): CompanyRow[] {
  const limit = Math.min(count ?? 20, MAX_TABLE_ROWS);
  return companyNames.slice(0, limit).map((name, i) => ({
    id: `company-${i + 1}`,
    companyName: name,
    tags: randomTags(),
    website: `www.${name.toLowerCase().replace(/\s/g, "")}.com`,
    description: `${name} provides services in their industry.`,
    city: ["Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt"][i % 5],
    country: i % 3 === 0 ? "DE" : "AT",
  }));
}
