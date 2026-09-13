import Link from "next/link";

import { UserAvatar } from "@/components/user-avatar";
import { VoteStats } from "@/components/vote-stats";
import type { Post } from "@/types/asset";

interface PostCardProps {
  post: Post;
  assetId: string;
}

export function PostCard({ post, assetId }: PostCardProps) {
  const authorId = `${post.id}-author`;

  return (
    <Link
      href={`/asset/${assetId}/post/${post.id}`}
      aria-labelledby={authorId}
      className="flex gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40 hover:bg-accent/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:gap-4 sm:p-5"
    >
      <UserAvatar name={post.author} />

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <span id={authorId} className="font-medium text-foreground">
            @{post.author}
          </span>
          <time className="text-sm text-muted-foreground">{post.publishedAt}</time>
        </div>

        <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
          {post.content}
        </p>

        <VoteStats votes={post.votes} commentCount={post.commentCount} className="pt-1" />
      </div>
    </Link>
  );
}
