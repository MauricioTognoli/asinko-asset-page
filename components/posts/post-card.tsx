import { ArrowBigDown, ArrowBigUp, MessageSquare } from "lucide-react";

import { UserAvatar } from "@/components/user-avatar";
import type { Post } from "@/types/asset";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex cursor-pointer gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40 hover:bg-accent/40 sm:gap-4 sm:p-5">
      <UserAvatar name={post.author} />

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <span className="font-medium text-foreground">@{post.author}</span>
          <time className="text-sm text-muted-foreground">
            {post.publishedAt}
          </time>
        </div>

        <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
          {post.content}
        </p>

        <div className="flex items-center gap-4 pt-1 text-sm text-muted-foreground">
          <span
            className="inline-flex items-center gap-1 tabular-nums"
            aria-label={`${post.votes.upvotes} votos a favor`}
          >
            <ArrowBigUp className="size-4" aria-hidden="true" />
            <span aria-hidden="true">{post.votes.upvotes}</span>
          </span>
          <span
            className="inline-flex items-center gap-1 tabular-nums"
            aria-label={`${post.votes.downvotes} votos en contra`}
          >
            <ArrowBigDown className="size-4" aria-hidden="true" />
            <span aria-hidden="true">{post.votes.downvotes}</span>
          </span>
          <span
            className="inline-flex items-center gap-1 tabular-nums"
            aria-label={`${post.commentCount} comentarios`}
          >
            <MessageSquare className="size-4" aria-hidden="true" />
            <span aria-hidden="true">{post.commentCount}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
