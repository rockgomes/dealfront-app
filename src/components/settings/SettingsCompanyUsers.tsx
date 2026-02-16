"use client";

import { useState } from "react";
import type { MainTabId } from "@/components/settings/SettingsNavigation";
import type { CompanySubTab } from "@/components/settings/SettingsSidebarCompany";
import { SettingsContentArea } from "@/components/settings/SettingsContentArea";
import { SettingsNavigation } from "@/components/settings/SettingsNavigation";
import { SettingsSidebarCompany } from "@/components/settings/SettingsSidebarCompany";
import { TopNav } from "@/components/settings/TopNav";
import { UsersPanel } from "@/components/settings/UsersPanel";

type SettingsCompanyUsersProps = {
  mainTab: MainTabId;
  onMainTabChange: (tab: MainTabId) => void;
};

function getCompanySubTabTitle(tab: CompanySubTab): string {
  const titles: Record<CompanySubTab, string> = {
    "general-details": "Details",
    "general-accounts": "Accounts",
    "general-website-tracker": "Website tracker",
    "billing-subscription": "Subscription",
    "billing-accounts": "Accounts",
    "billing-website-tracker": "Website tracker",
    users: "Users",
  };
  return titles[tab];
}

function getCompanySubTabSubtitle(tab: CompanySubTab): string {
  const subtitles: Record<CompanySubTab, string> = {
    "general-details": "Company details and settings",
    "general-accounts": "Manage your accounts",
    "general-website-tracker": "Website tracker settings",
    "billing-subscription": "Subscription and billing",
    "billing-accounts": "Billing accounts",
    "billing-website-tracker": "Billing website tracker",
    users: "Manage all your users with ease",
  };
  return subtitles[tab];
}

export function SettingsCompanyUsers({ mainTab, onMainTabChange }: SettingsCompanyUsersProps) {
  const [activeSubTab, setActiveSubTab] = useState<CompanySubTab>("users");

  return (
    <div className="bg-[#e8ecf1] min-h-screen min-w-[1440px] relative overflow-hidden">
      <div className="fixed left-0 right-0 top-0 z-20">
        <TopNav />
        <SettingsNavigation activeMainTab={mainTab} onMainTabChange={onMainTabChange} />
      </div>
      <div className="fixed left-0 top-[112px] bottom-0 z-10">
        <SettingsSidebarCompany
          activeSubTab={activeSubTab}
          onSubTabChange={setActiveSubTab}
        />
      </div>
      <SettingsContentArea
        title={getCompanySubTabTitle(activeSubTab)}
        subtitle={getCompanySubTabSubtitle(activeSubTab)}
      >
        {activeSubTab === "users" ? (
          <UsersPanel />
        ) : (
          <div className="bg-white rounded-[5px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.05),0px_4px_8px_0px_rgba(43,49,49,0.15)] p-[24px]">
            <p className="text-[14px] text-[#646f83]">
              {getCompanySubTabTitle(activeSubTab)}
            </p>
          </div>
        )}
      </SettingsContentArea>
    </div>
  );
}
