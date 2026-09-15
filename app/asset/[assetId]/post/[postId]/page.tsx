import { notFound } from "next/navigation";

import { AssetHeader } from "@/components/asset-header";
import { BackLink } from "@/components/back-link";
import { CommentsSection } from "@/components/comments/comments-section";
import { UserAvatar } from "@/components/user-avatar";
import { VoteControls } from "@/components/vote-controls";
import { getAsset, getAssetById, getPostById } from "@/lib/asset";

export function generateStaticParams() {
  const asset = getAsset();
  return asset.posts.map((post) => ({
    assetId: asset.id,
    postId: post.id,
  }));
}

export default async function PostDetailPage({
  params,
}: PageProps<"/asset/[assetId]/post/[postId]">) {
  const { assetId, postId } = await params;

  const asset = getAssetById(assetId);
  if (!asset) {
    notFound();
  }

  const post = getPostById(postId);
  if (!post) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <BackLink href="/" label={`Volver a ${asset.name}`} />

      <AssetHeader asset={asset} />

      <article className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <UserAvatar name={post.author} size="lg" />
          <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <span className="wrap-break-word font-medium text-foreground">
              @{post.author}
            </span>
            <time className="text-sm text-muted-foreground">
              {post.publishedAt}
            </time>
          </div>
        </div>

        <p className="wrap-break-word text-base leading-relaxed text-foreground/90">
          {post.content}
        </p>

        <VoteControls
          initialVotes={post.votes}
          className="border-y border-border py-3"
        />
      </article>

      <CommentsSection initialComments={post.comments} />
    </div>
  );
}
