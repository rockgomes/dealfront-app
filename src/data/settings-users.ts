export type AccountAccess = {
  name: string;
  status: "Enabled" | "Disabled";
};

export type UserRow = {
  id: string;
  email: string;
  role: string;
  seat: "Pro" | "Plus" | "No seat";
  status: "Enabled" | "Disabled";
  productVariant: "primary" | "secondary";
  accounts?: AccountAccess[];
};

export const settingsUsers: UserRow[] = [
  {
    id: "elmer-hermann",
    email: "Elmer_Hermann@gmail.com",
    role: "User",
    seat: "Pro",
    status: "Enabled",
    productVariant: "primary",
    accounts: [{ name: "Sales team", status: "Enabled" }],
  },
  {
    id: "maximillia-mitchell",
    email: "Maximillia_Mitchell@hotmail.com",
    role: "Admin",
    seat: "Plus",
    status: "Enabled",
    productVariant: "secondary",
    accounts: [{ name: "Sales team", status: "Enabled" }],
  },
  {
    id: "vita-fay",
    email: "Vita.Fay91@gmail.com",
    role: "User",
    seat: "Plus",
    status: "Enabled",
    productVariant: "secondary",
    accounts: [{ name: "Sales team", status: "Enabled" }],
  },
  {
    id: "brody",
    email: "Brody42@hotmail.com",
    role: "No role",
    seat: "No seat",
    status: "Disabled",
    productVariant: "secondary",
    accounts: [{ name: "Sales team", status: "Disabled" }],
  },
];
