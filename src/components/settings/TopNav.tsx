"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BellIcon,
  Cog6ToothIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  UserIcon,
} from "@/components/ui/icons";
import { figmaAssets } from "@/lib/figma-assets";

const navIconClass =
  "relative h-[56px] w-[44px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#f7f9fc] active:bg-[#dbeeff]";
const navIconActiveBar = "absolute bottom-0 left-0 right-0 h-[3px] bg-[#1b70f0]";

export function TopNav() {
  const pathname = usePathname();
  const isLists = pathname?.startsWith("/lists") ?? false;
  const isSettings = pathname?.startsWith("/settings") ?? false;

  return (
    <div className="bg-white border-b border-[#dfe6f0] flex h-[56px] items-center px-[16px] w-full">
      <Link
        href="/"
        className="flex h-full items-center justify-center pl-[8px] pr-[26px] py-px"
      >
        <div className="h-[20px] overflow-clip relative w-[119.31px]">
          <img
            alt="Dealfront"
            className="block max-w-none size-full"
            src={figmaAssets.imgDesign}
          />
        </div>
      </Link>
      <div className="h-full w-px bg-[#dfe6f0]" />
      <div className="flex h-full pl-[12px] items-center">
        {["Target", "Promote", "Leadfeeder"].map((item) => (
          <div
            key={item}
            className="relative flex h-full items-center justify-center px-[12px] py-[8px] cursor-pointer transition-colors"
          >
            <p className="text-[16px] text-[#4d5666] transition-colors hover:text-[#1b70f0] active:text-[#024ec1]">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="flex-1" />
      <div className="flex items-center">
        <div className={`${navIconClass} text-neutral-600`}>
          <Squares2X2Icon className="size-[24px]" />
        </div>
        <div
          className={`${navIconClass} ${isLists ? "text-[#1b70f0]" : "text-neutral-600"}`}
        >
          <Link href="/lists" className="flex size-full items-center justify-center" aria-label="Lists">
            <ListBulletIcon className="size-[24px]" />
          </Link>
          {isLists && <div className={navIconActiveBar} />}
        </div>
        <div className={`${navIconClass} text-neutral-600`}>
          <QuestionMarkCircleIcon className="size-[24px]" />
        </div>
        <div
          className={`${navIconClass} ${isSettings ? "text-[#1b70f0]" : "text-neutral-600"}`}
        >
          <Link href="/settings" className="flex size-full items-center justify-center" aria-label="Settings">
            <Cog6ToothIcon className="size-[24px]" />
          </Link>
          {isSettings && <div className={navIconActiveBar} />}
        </div>
        <div className={`${navIconClass} text-neutral-600`}>
          <UserIcon className="size-[24px]" />
        </div>
        <div className={`${navIconClass} text-neutral-600`}>
          <BellIcon className="size-[24px]" />
        </div>
      </div>
    </div>
  );
}
