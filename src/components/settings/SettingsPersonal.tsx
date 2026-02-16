"use client";

import { useState } from "react";
import type { MainTabId } from "@/components/settings/SettingsNavigation";
import { SettingsContentArea } from "@/components/settings/SettingsContentArea";
import { SettingsNavigation } from "@/components/settings/SettingsNavigation";
import { SettingsSidebarPersonal } from "@/components/settings/SettingsSidebarPersonal";
import { PersonalDetailsPanel } from "@/components/settings/PersonalDetailsPanel";
import { TopNav } from "@/components/settings/TopNav";

type PersonalSubTab =
  | "details"
  | "email-notifications"
  | "google-accounts"
  | "login-services"
  | "invitations"
  | "api-tokens"
  | "zapier";

type SettingsPersonalProps = {
  mainTab: MainTabId;
  onMainTabChange: (tab: MainTabId) => void;
};

function getPersonalSubTabTitle(tab: PersonalSubTab): string {
  const titles: Record<PersonalSubTab, string> = {
    details: "Personal details",
    "email-notifications": "Email notifications",
    "google-accounts": "Google accounts",
    "login-services": "Login services",
    invitations: "Invitations",
    "api-tokens": "API tokens",
    zapier: "Zapier",
  };
  return titles[tab];
}

function getPersonalSubTabSubtitle(tab: PersonalSubTab): string {
  const subtitles: Record<PersonalSubTab, string> = {
    details: "These details are only visible to you.",
    "email-notifications": "Manage your email notification preferences",
    "google-accounts": "Connect and manage your Google accounts",
    "login-services": "Manage login and authentication services",
    invitations: "View and manage your invitations",
    "api-tokens": "Manage your API tokens",
    zapier: "Connect Dealfront to Zapier",
  };
  return subtitles[tab];
}

const CARD_CLASS =
  "bg-white rounded-[5px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.05),0px_4px_8px_0px_rgba(43,49,49,0.15)] p-[24px]";

export function SettingsPersonal({ mainTab, onMainTabChange }: SettingsPersonalProps) {
  const [activeSubTab, setActiveSubTab] = useState<PersonalSubTab>("details");

  return (
    <div className="bg-[#e8ecf1] min-h-screen min-w-[1440px] relative overflow-hidden">
      <div className="fixed left-0 right-0 top-0 z-20">
        <TopNav />
        <SettingsNavigation activeMainTab={mainTab} onMainTabChange={onMainTabChange} />
      </div>
      <div className="fixed left-0 top-[112px] bottom-0 z-10">
        <SettingsSidebarPersonal
          activeSubTab={activeSubTab}
          onSubTabChange={setActiveSubTab}
        />
      </div>
      <SettingsContentArea
        title={getPersonalSubTabTitle(activeSubTab)}
        subtitle={getPersonalSubTabSubtitle(activeSubTab)}
      >
        {activeSubTab === "details" && <PersonalDetailsPanel />}
        {activeSubTab === "email-notifications" && (
          <div className={CARD_CLASS}>
            <p className="text-[14px] text-[#646f83]">Email notifications</p>
          </div>
        )}
        {activeSubTab === "google-accounts" && (
          <div className={CARD_CLASS}>
            <p className="text-[14px] text-[#646f83]">Google accounts</p>
          </div>
        )}
        {activeSubTab === "login-services" && (
          <div className={CARD_CLASS}>
            <p className="text-[14px] text-[#646f83]">Login services</p>
          </div>
        )}
        {activeSubTab === "invitations" && (
          <div className={CARD_CLASS}>
            <p className="text-[14px] text-[#646f83]">Invitations</p>
          </div>
        )}
        {activeSubTab === "api-tokens" && (
          <div className={CARD_CLASS}>
            <p className="text-[14px] text-[#646f83]">API tokens</p>
          </div>
        )}
        {activeSubTab === "zapier" && (
          <div className={CARD_CLASS}>
            <p className="text-[14px] text-[#646f83]">Zapier</p>
          </div>
        )}
      </SettingsContentArea>
    </div>
  );
}
