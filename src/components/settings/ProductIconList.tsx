import { figmaAssets } from "@/lib/figma-assets";

type ProductIconListProps = {
  className?: string;
  variant?: "primary" | "secondary";
};

export function ProductIconList({
  className,
  variant: _variant = "primary",
}: ProductIconListProps) {
  const {
    logoLeadfeederSmall,
    logoPromote,
    logoTarget,
    logoWebVisitors,
    logoConnect,
    logoProspector,
    logoLists,
  } = figmaAssets;

  const promoteIcon = logoPromote;
  const targetIcon = logoTarget;
  const webVisitorsIcon = logoWebVisitors;
  const connectIcon = logoConnect;
  const prospectorIcon = logoProspector;
  const listsIcon = logoLists;

  return (
    <div className={className || "h-[25px] relative w-[229.137px]"}>
      <img
        alt="Leadfeeder"
        className="absolute left-0 top-[1.97px] h-[21.053px] w-[21.053px]"
        src={logoLeadfeederSmall}
      />
      <img
        alt="Promote"
        className="absolute left-[32.89px] top-[0.66px] h-[23.684px] w-[23.684px]"
        src={promoteIcon}
      />
      <img
        alt="Target"
        className="absolute left-[68.42px] top-[0.66px] h-[23.684px] w-[23.684px]"
        src={targetIcon}
      />
      <img
        alt="WebVisitors"
        className="absolute left-[103.95px] top-[3.95px] h-[17.105px] w-[23.325px]"
        src={webVisitorsIcon}
      />
      <img
        alt="Connect"
        className="absolute left-[139.11px] top-0 h-[25px] w-[25px]"
        src={connectIcon}
      />
      <img
        alt="Prospector"
        className="absolute left-[175.96px] top-[3.95px] h-[17.105px] w-[24.232px]"
        src={prospectorIcon}
      />
      <img
        alt="Lists"
        className="absolute left-[212.03px] top-[3.29px] h-[18.421px] w-[17.105px]"
        src={listsIcon}
      />
    </div>
  );
}
