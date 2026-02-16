import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

export function Pagination() {
  return (
    <div className="flex items-start gap-[14px]">
      <div className="bg-white flex items-center justify-center opacity-40 p-[8px] rounded-[5px] size-[36px]">
        <div className="flex items-center justify-center size-[28px]">
          <ChevronLeftIcon className="size-[28px] text-neutral-600" />
        </div>
      </div>
      <div className="flex isolate items-start pr-[10px]">
        <div className="bg-white border border-[#cedaed] flex h-[36px] items-center justify-center gap-[12px] mr-[-10px] px-[10px] py-[8px] rounded-[5px] z-2">
          <p className="text-[14px] text-[#4d5666] text-center w-[16px]">1</p>
        </div>
        <div className="bg-[#f7f9fc] border border-[#cedaed] flex h-[36px] items-center justify-center mr-[-10px] pl-[16px] pr-[10px] py-[10px] rounded-[5px] z-1">
          <p className="text-[14px] text-[#9ba6b9]">of 10</p>
        </div>
      </div>
      <div className="bg-white flex items-center justify-center p-[8px] rounded-[5px] size-[36px]">
        <div className="flex items-center justify-center size-[28px]">
          <ChevronRightIcon className="size-[28px] text-neutral-600" />
        </div>
      </div>
    </div>
  );
}
