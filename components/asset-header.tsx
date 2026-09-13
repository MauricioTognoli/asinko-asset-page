import type { Asset } from "@/types/asset";

interface AssetHeaderProps {
  asset: Asset;
}

export function AssetHeader({ asset }: AssetHeaderProps) {
  return (
    <header className="flex flex-col gap-2 border-b border-border pb-6">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {asset.name}
        </h1>
        <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 font-mono text-sm font-medium text-brand">
          {asset.ticker}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{asset.category}</p>
    </header>
  );
}
