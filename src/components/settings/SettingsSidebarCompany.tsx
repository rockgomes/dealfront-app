"use client";

import { SettingsSidebar } from "@/components/settings/SettingsSidebar";

export type CompanySubTab =
  | "general-details"
  | "general-accounts"
  | "general-website-tracker"
  | "billing-subscription"
  | "billing-accounts"
  | "billing-website-tracker"
  | "users";

const SIDEBAR_SECTIONS = [
  {
    title: "GENERAL",
    items: [
      { id: "general-details", label: "Details" },
      { id: "general-accounts", label: "Accounts" },
      { id: "general-website-tracker", label: "Website tracker" },
    ],
  },
  {
    title: "BILLING",
    items: [
      { id: "billing-subscription", label: "Subscription" },
      { id: "billing-accounts", label: "Accounts" },
      { id: "billing-website-tracker", label: "Website tracker" },
    ],
  },
  {
    title: "USER MANAGEMENT",
    items: [{ id: "users", label: "Users" }],
  },
] as const;

type SettingsSidebarCompanyProps = {
  activeSubTab: CompanySubTab;
  onSubTabChange: (tab: CompanySubTab) => void;
};

export function SettingsSidebarCompany({
  activeSubTab,
  onSubTabChange,
}: SettingsSidebarCompanyProps) {
  return (
    <SettingsSidebar
      sections={SIDEBAR_SECTIONS}
      activeItemId={activeSubTab}
      onItemClick={(id) => onSubTabChange(id as CompanySubTab)}
    />
  );
}
