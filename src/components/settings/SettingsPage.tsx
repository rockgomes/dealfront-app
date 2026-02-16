"use client";

import { useState } from "react";
import type { MainTabId } from "@/components/settings/SettingsNavigation";
import { SettingsPersonal } from "@/components/settings/SettingsPersonal";
import { SettingsCompanyUsers } from "@/components/settings/SettingsCompanyUsers";
import { SettingsNavigation } from "@/components/settings/SettingsNavigation";
import { TopNav } from "@/components/settings/TopNav";

export function SettingsPage() {
  const [mainTab, setMainTab] = useState<MainTabId>("personal");

  if (mainTab === "personal") {
    return (
      <SettingsPersonal mainTab={mainTab} onMainTabChange={setMainTab} />
    );
  }

  if (mainTab === "company") {
    return (
      <SettingsCompanyUsers mainTab={mainTab} onMainTabChange={setMainTab} />
    );
  }

  return (
    <div className="bg-[#e8ecf1] min-h-screen min-w-[1440px] relative overflow-hidden">
      <div className="fixed left-0 right-0 top-0 z-20">
        <TopNav />
        <SettingsNavigation
          activeMainTab={mainTab}
          onMainTabChange={setMainTab}
        />
      </div>
      <div className="relative pt-[112px] px-[24px] pb-[40px]">
        <div className="bg-white rounded-[5px] p-[24px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.05),0px_4px_8px_0px_rgba(43,49,49,0.15)]">
          <p className="text-[18px] font-bold text-[#161616]">Account</p>
          <p className="text-[14px] text-[#646f83] mt-[8px]">Account settings</p>
        </div>
      </div>
    </div>
  );
}
