import { ReactNode } from "react";

type SettingsContentAreaProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

/** Blue header with title/subtitle + content container. Children (e.g. white card) go below the header. */
export function SettingsContentArea({
  title,
  subtitle,
  children,
}: SettingsContentAreaProps) {
  return (
    <div className="relative ml-[245px] pt-[112px]">
      <div className="bg-[#024ec1] h-[163px] px-[24px] pt-[24px] text-white">
        <div className="relative h-[84px]">
          <p className="absolute left-0 top-[29px] text-[18px] font-bold">
            {title}
          </p>
          <p className="absolute left-0 top-[56px] text-[14px] leading-[1.45]">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="-mt-[35px] px-[24px] pb-[40px] relative">{children}</div>
    </div>
  );
}
