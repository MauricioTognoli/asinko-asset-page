import Link from "next/link";

import { LiveCommentCount } from "@/components/live-comment-count";
import { UserAvatar } from "@/components/user-avatar";
import { VoteControls } from "@/components/vote-controls";
import type { Post } from "@/types/asset";

interface PostCardProps {
  post: Post;
  assetId: string;
}

export function PostCard({ post, assetId }: PostCardProps) {
  const detailPath = `/asset/${assetId}/post/${post.id}`;

  return (
    <article className="relative flex gap-3 rounded-xl border border-border bg-card p-4 transition-colors has-[a:hover]:border-brand/40 has-[a:hover]:bg-accent/40 has-[a:focus-visible]:border-ring has-[a:focus-visible]:ring-3 has-[a:focus-visible]:ring-ring/50 sm:gap-4 sm:p-5">
      <UserAvatar name={post.author} size="lg" />

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <Link
            href={detailPath}
            className="wrap-break-word font-medium text-foreground after:absolute after:inset-0 focus-visible:outline-none"
          >
            @{post.author}
          </Link>
          <time className="text-sm text-muted-foreground">
            {post.publishedAt}
          </time>
        </div>

        <p className="wrap-break-word text-sm leading-relaxed text-foreground/90 sm:text-base">
          {post.content}
        </p>

        <div className="relative z-10 flex items-center gap-4 pt-1">
          <VoteControls contentId={post.id} initialVotes={post.votes} />
          <LiveCommentCount
            contentId={post.id}
            initialCount={post.comments.length}
            href={`${detailPath}#comments`}
          />
        </div>
      </div>
    </article>
  );
}
