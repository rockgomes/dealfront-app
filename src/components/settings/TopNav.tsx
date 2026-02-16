import {
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  UserIcon,
} from "@/components/ui/icons";
import { figmaAssets } from "@/lib/figma-assets";

export function TopNav() {
  const { imgDesign } = figmaAssets;

  return (
    <div className="bg-white border-b border-[#dfe6f0] flex h-[56px] items-center px-[16px] w-full">
      <div className="flex h-full items-center justify-center pl-[8px] pr-[26px] py-px">
        <div className="h-[20px] overflow-clip relative w-[119.31px]">
          <img
            alt="Dealfront"
            className="block max-w-none size-full"
            src={imgDesign}
          />
        </div>
      </div>
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
        <div className="relative h-[56px] w-[44px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#f7f9fc] active:bg-[#dbeeff]">
          <Squares2X2Icon className="size-[24px] text-neutral-600" />
        </div>
        <div className="relative h-[56px] w-[44px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#f7f9fc] active:bg-[#dbeeff]">
          <QuestionMarkCircleIcon className="size-[24px] text-neutral-600" />
        </div>
        <div className="relative h-[56px] w-[44px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#f7f9fc] active:bg-[#dbeeff]">
          <Cog6ToothIcon className="size-[24px] text-neutral-600" />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1b70f0]" />
        </div>
        <div className="relative h-[56px] w-[44px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#f7f9fc] active:bg-[#dbeeff]">
          <UserIcon className="size-[24px] text-neutral-600" />
        </div>
      </div>
    </div>
  );
}
