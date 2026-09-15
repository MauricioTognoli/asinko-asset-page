import type { Metadata } from "next";

import { AssetActivitySummary } from "@/components/asset-activity-summary";
import { AssetContentTabs } from "@/components/asset-content-tabs";
import { AssetHeader } from "@/components/asset-header";
import { getAsset } from "@/lib/asset";

export function generateMetadata(): Metadata {
  const asset = getAsset();
  const title = `${asset.name} (${asset.ticker})`;
  const description = `Posteos y tesis de inversión de la comunidad sobre ${asset.name} (${asset.ticker}).`;

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

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
