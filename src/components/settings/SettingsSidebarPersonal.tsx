"use client";

import { SettingsSidebar } from "@/components/settings/SettingsSidebar";

export type PersonalSubTab =
  | "details"
  | "email-notifications"
  | "google-accounts"
  | "login-services"
  | "invitations"
  | "api-tokens"
  | "zapier";

const SIDEBAR_SECTIONS = [
  {
    title: "PERSONAL",
    items: [
      { id: "details", label: "Details" },
      { id: "email-notifications", label: "Email notifications" },
      { id: "google-accounts", label: "Google accounts" },
      { id: "login-services", label: "Login services" },
      { id: "invitations", label: "Invitations" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { id: "api-tokens", label: "API tokens" },
      { id: "zapier", label: "Zapier" },
    ],
  },
] as const;

type SettingsSidebarPersonalProps = {
  activeSubTab: PersonalSubTab;
  onSubTabChange: (tab: PersonalSubTab) => void;
};

export function SettingsSidebarPersonal({
  activeSubTab,
  onSubTabChange,
}: SettingsSidebarPersonalProps) {
  return (
    <SettingsSidebar
      sections={SIDEBAR_SECTIONS}
      activeItemId={activeSubTab}
      onItemClick={(id) => onSubTabChange(id as PersonalSubTab)}
    />
  );
}
