import { notFound } from "next/navigation";

import { AssetHeader } from "@/components/asset-header";
import { BackLink } from "@/components/back-link";
import { CommentsSection } from "@/components/comments/comments-section";
import { ThesisStatusBadges } from "@/components/theses/thesis-status-badges";
import { UserAvatar } from "@/components/user-avatar";
import { VoteControls } from "@/components/vote-controls";
import { formatConviction, formatDeadline } from "@/lib/format";
import { getAsset, getAssetById, getThesisById } from "@/lib/asset";

export function generateStaticParams() {
  const asset = getAsset();
  return asset.theses.map((thesis) => ({
    assetId: asset.id,
    thesisId: thesis.id,
  }));
}

export default async function ThesisDetailPage({
  params,
}: PageProps<"/asset/[assetId]/thesis/[thesisId]">) {
  const { assetId, thesisId } = await params;

  const asset = getAssetById(assetId);
  if (!asset) {
    notFound();
  }

  const thesis = getThesisById(thesisId);
  if (!thesis) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <BackLink href="/" label={`Volver a ${asset.name}`} />

      <AssetHeader asset={asset} />

      <article className="flex flex-col gap-4">
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

        <h2 className="wrap-break-word text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
          {thesis.claim}
        </h2>

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

        <p className="wrap-break-word text-base leading-relaxed text-foreground/90">
          {thesis.reasoning}
        </p>

        <VoteControls
          initialVotes={thesis.votes}
          className="border-y border-border py-3"
        />
      </article>

      <CommentsSection
        contentId={thesis.id}
        initialComments={thesis.comments}
      />
    </div>
  );
}
