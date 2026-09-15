import Link from "next/link";

import { LiveCommentCount } from "@/components/live-comment-count";
import { ThesisStatusBadges } from "@/components/theses/thesis-status-badges";
import { UserAvatar } from "@/components/user-avatar";
import { VoteControls } from "@/components/vote-controls";
import { formatConviction, formatDeadline } from "@/lib/format";
import type { Thesis } from "@/types/asset";

interface ThesisCardProps {
  thesis: Thesis;
  assetId: string;
}

export function ThesisCard({ thesis, assetId }: ThesisCardProps) {
  const detailPath = `/asset/${assetId}/thesis/${thesis.id}`;

  return (
    <article className="relative flex flex-col gap-4 rounded-xl border border-border bg-card p-4 transition-colors has-[a:hover]:border-brand/40 has-[a:hover]:bg-accent/40 has-[a:focus-visible]:border-ring has-[a:focus-visible]:ring-3 has-[a:focus-visible]:ring-ring/50 sm:p-5">
      <ThesisStatusBadges thesis={thesis} />

      <div className="flex items-center gap-3">
        <UserAvatar name={thesis.author} size="lg" />
        <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <span className="wrap-break-word font-medium text-foreground">
            @{thesis.author}
          </span>
          <time className="text-sm text-muted-foreground">
            {thesis.publishedAt}
          </time>
        </div>
      </div>

      <h3 className="wrap-break-word text-lg font-semibold leading-snug tracking-tight sm:text-xl">
        <Link
          href={detailPath}
          className="text-foreground after:absolute after:inset-0 focus-visible:outline-none"
        >
          {thesis.claim}
        </Link>
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

      <p className="wrap-break-word text-sm leading-relaxed text-foreground/90">
        {thesis.reasoning}
      </p>

      <div className="relative z-10 flex items-center gap-4 border-t border-border pt-3">
        <VoteControls contentId={thesis.id} initialVotes={thesis.votes} />
        <LiveCommentCount
          contentId={thesis.id}
          initialCount={thesis.comments.length}
          href={`${detailPath}#comments`}
        />
      </div>
    </article>
  );
}
