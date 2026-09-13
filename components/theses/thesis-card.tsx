import {
  ArrowBigDown,
  ArrowBigUp,
  Check,
  CircleDot,
  MessageSquare,
} from "lucide-react";

import { UserAvatar } from "@/components/user-avatar";
import { formatConviction, formatDeadline } from "@/lib/format";
import type { Thesis } from "@/types/asset";

interface ThesisCardProps {
  thesis: Thesis;
}

function ThesisStatusBadges({ thesis }: { thesis: Thesis }) {
  const isAcertada = thesis.status === "closed" && thesis.outcome === "correct";

  return (
    <div className="flex flex-wrap items-center gap-2">
      {thesis.status === "open" ? (
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
          <CircleDot className="size-3" aria-hidden="true" />
          Abierta
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Cerrada
        </span>
      )}
      {isAcertada && (
        <span className="inline-flex items-center gap-1 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
          <Check className="size-3" aria-hidden="true" />
          Acertada
        </span>
      )}
    </div>
  );
}

export function ThesisCard({ thesis }: ThesisCardProps) {
  const claimId = `${thesis.id}-claim`;

  return (
    <article
      aria-labelledby={claimId}
      className="flex cursor-pointer flex-col gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40 hover:bg-accent/40 sm:p-5"
    >
      <ThesisStatusBadges thesis={thesis} />

      <div className="flex items-center gap-3">
        <UserAvatar name={thesis.author} />
        <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <span className="font-medium text-foreground">@{thesis.author}</span>
          <time className="text-sm text-muted-foreground">
            {thesis.publishedAt}
          </time>
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

      <div className="flex items-center gap-4 border-t border-border pt-3 text-sm text-muted-foreground">
        <span
          className="inline-flex items-center gap-1 tabular-nums"
          aria-label={`${thesis.votes.upvotes} votos a favor`}
        >
          <ArrowBigUp className="size-4" aria-hidden="true" />
          <span aria-hidden="true">{thesis.votes.upvotes}</span>
        </span>
        <span
          className="inline-flex items-center gap-1 tabular-nums"
          aria-label={`${thesis.votes.downvotes} votos en contra`}
        >
          <ArrowBigDown className="size-4" aria-hidden="true" />
          <span aria-hidden="true">{thesis.votes.downvotes}</span>
        </span>
        <span
          className="inline-flex items-center gap-1 tabular-nums"
          aria-label={`${thesis.commentCount} comentarios`}
        >
          <MessageSquare className="size-4" aria-hidden="true" />
          <span aria-hidden="true">{thesis.commentCount}</span>
        </span>
      </div>
    </article>
  );
}
