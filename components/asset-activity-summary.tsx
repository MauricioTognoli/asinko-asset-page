import type { Asset } from "@/types/asset";
import { getVoteSummary } from "@/lib/asset";

interface AssetActivitySummaryProps {
  asset: Asset;
}

export function AssetActivitySummary({ asset }: AssetActivitySummaryProps) {
  const { upvotes, downvotes, total, positivePercent } = getVoteSummary(asset);

  if (total === 0) {
    return null;
  }

  return (
    <section
      aria-label="Actividad de la comunidad"
      className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4"
    >
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="text-sm font-medium text-foreground">
          Actividad de la comunidad
        </h2>
        <span className="text-xs text-muted-foreground">
          {total} votos en total
        </span>
      </div>

      <div
        role="img"
        aria-label={`${positivePercent}% de los votos son a favor, ${100 - positivePercent}% en contra`}
        className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
      >
        <div
          className="h-full rounded-full bg-brand"
          style={{ width: `${positivePercent}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          <span className="font-medium text-foreground">{upvotes}</span> a favor
          · {positivePercent}%
        </span>
        <span>
          <span className="font-medium text-foreground">{downvotes}</span> en
          contra · {100 - positivePercent}%
        </span>
      </div>
    </section>
  );
}
