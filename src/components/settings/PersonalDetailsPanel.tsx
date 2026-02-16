"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

const COUNTRY_OPTIONS = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
];

const TEAM_ROLE_OPTIONS = [
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
  { value: "manager", label: "Manager" },
];

const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "de", label: "German" },
  { value: "fr", label: "French" },
];

export function PersonalDetailsPanel() {
  const [newsletterChecked, setNewsletterChecked] = useState(true);
  const [country, setCountry] = useState<string>("");
  const [teamRole, setTeamRole] = useState<string>("");
  const [language, setLanguage] = useState<string>("");

  return (
    <div className="bg-white rounded-[5px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.05),0px_4px_8px_0px_rgba(43,49,49,0.15)] p-[24px] flex flex-col gap-[24px]">
        <div className="grid grid-cols-2 gap-[24px]">
          <Input id="first-name" label="First name" type="text" placeholder="Placeholder" />
          <Input id="last-name" label="Last name" type="text" placeholder="Enter your username" />
        </div>

        <Input id="email" label="Email" type="email" placeholder="Placeholder" />

        <Input id="password" label="Password" type="password" placeholder="Placeholder" />

        <div className="grid grid-cols-2 gap-[24px]">
          <Select
            id="country"
            label="Country"
            value={country}
            onValueChange={setCountry}
            options={COUNTRY_OPTIONS}
            placeholder="Placeholder"
          />
          <Select
            id="team-role"
            label="Team role"
            value={teamRole}
            onValueChange={setTeamRole}
            options={TEAM_ROLE_OPTIONS}
            placeholder="Enter your username"
          />
        </div>

        <Input
          id="team-role-description"
          label="Team role description"
          type="text"
          placeholder="Placeholder"
        />

        <Select
          id="language"
          label="Language"
          value={language}
          onValueChange={setLanguage}
          options={LANGUAGE_OPTIONS}
          placeholder="Placeholder"
        />

        <div className="flex items-start gap-[12px]">
          <div className="pt-[2px]">
            <Checkbox
              checked={newsletterChecked}
              onToggle={() => setNewsletterChecked(!newsletterChecked)}
              ariaLabel="Receive Dealfront newsletter"
            />
          </div>
          <div>
            <p className="text-[14px] text-neutral-600">
              Recieve Dealfront newsletter
            </p>
            <p className="text-[12px] text-neutral-500 mt-[2px]">
              Our newsletter on product updates and announcements.
            </p>
          </div>
        </div>

        <div>
          <Button>Save</Button>
        </div>
    </div>
  );
}
