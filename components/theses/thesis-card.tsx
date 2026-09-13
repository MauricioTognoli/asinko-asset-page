import Link from "next/link";

import { ThesisStatusBadges } from "@/components/theses/thesis-status-badges";
import { UserAvatar } from "@/components/user-avatar";
import { VoteStats } from "@/components/vote-stats";
import { formatConviction, formatDeadline } from "@/lib/format";
import type { Thesis } from "@/types/asset";

interface ThesisCardProps {
  thesis: Thesis;
  assetId: string;
}

export function ThesisCard({ thesis, assetId }: ThesisCardProps) {
  const claimId = `${thesis.id}-claim`;

  return (
    <Link
      href={`/asset/${assetId}/thesis/${thesis.id}`}
      aria-labelledby={claimId}
      className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40 hover:bg-accent/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:p-5"
    >
      <ThesisStatusBadges thesis={thesis} />

      <div className="flex items-center gap-3">
        <UserAvatar name={thesis.author} />
        <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <span className="font-medium text-foreground">@{thesis.author}</span>
          <time className="text-sm text-muted-foreground">{thesis.publishedAt}</time>
        </div>
      </div>

      <h3
        id={claimId}
        className="text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl"
      >
        {thesis.claim}
      </h3>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-lg bg-muted/50 p-3 sm:grid-cols-4 sm:p-4">
        <div>
          <dt className="text-xs text-muted-foreground">Activo</dt>
          <dd className="font-mono text-sm font-medium text-foreground">
            ${thesis.ticker}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Precio objetivo</dt>
          <dd className="font-mono text-sm font-medium text-foreground">
            ${thesis.targetPrice}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Fecha límite</dt>
          <dd className="text-sm font-medium text-foreground">
            {formatDeadline(thesis.deadline)}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Convicción</dt>
          <dd className="text-sm font-medium text-foreground">
            {formatConviction(thesis.conviction)}
          </dd>
        </div>
      </dl>

      <p className="text-sm leading-relaxed text-foreground/90">
        {thesis.reasoning}
      </p>

      <VoteStats
        votes={thesis.votes}
        commentCount={thesis.commentCount}
        className="border-t border-border pt-3"
      />
    </Link>
  );
}
