import { AssetActivitySummary } from "@/components/asset-activity-summary";
import { AssetContentTabs } from "@/components/asset-content-tabs";
import { AssetHeader } from "@/components/asset-header";
import { getAsset } from "@/lib/asset";

export default function Home() {
  const asset = getAsset();

  return (
    <>
      <AssetHeader asset={asset} />
      <div className="mt-4">
        <AssetActivitySummary asset={asset} />
      </div>
      <div className="mt-6">
        <AssetContentTabs />
      </div>
    </>
  );
}
