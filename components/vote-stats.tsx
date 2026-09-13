import { ArrowBigDown, ArrowBigUp, MessageSquare } from "lucide-react";
import { cn } from "cn";

import type { VoteCounts } from "@/types/asset";

interface VoteStatsProps {
  votes: VoteCounts;
  commentCount: number;
  className?: string;
}

export function VoteStats({ votes, commentCount, className }: VoteStatsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 text-sm text-muted-foreground",
        className,
      )}
    >
      <span
        className="inline-flex items-center gap-1 tabular-nums"
        aria-label={`${votes.upvotes} votos a favor`}
      >
        <ArrowBigUp className="size-4" aria-hidden="true" />
        <span aria-hidden="true">{votes.upvotes}</span>
      </span>
      <span
        className="inline-flex items-center gap-1 tabular-nums"
        aria-label={`${votes.downvotes} votos en contra`}
      >
        <ArrowBigDown className="size-4" aria-hidden="true" />
        <span aria-hidden="true">{votes.downvotes}</span>
      </span>
      <span
        className="inline-flex items-center gap-1 tabular-nums"
        aria-label={`${commentCount} comentarios`}
      >
        <MessageSquare className="size-4" aria-hidden="true" />
        <span aria-hidden="true">{commentCount}</span>
      </span>
    </div>
  );
}
