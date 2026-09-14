"use client";

import { useState } from "react";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { cn } from "cn";

import type { VoteCounts } from "@/types/asset";

type VoteState = "up" | "down" | null;

interface VoteControlsProps {
  initialVotes: VoteCounts;
  className?: string;
}

export function VoteControls({ initialVotes, className }: VoteControlsProps) {
  const [voteState, setVoteState] = useState<VoteState>(null);

  const upvotes = initialVotes.upvotes + (voteState === "up" ? 1 : 0);
  const downvotes = initialVotes.downvotes + (voteState === "down" ? 1 : 0);

  function handleVote(next: "up" | "down") {
    setVoteState((current) => (current === next ? null : next));
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        type="button"
        aria-pressed={voteState === "up"}
        aria-label="Votar a favor"
        onClick={() => handleVote("up")}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-medium tabular-nums transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          voteState === "up"
            ? "border-brand/40 bg-brand/10 font-semibold text-brand"
            : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <ArrowBigUp
          className={cn(
            "size-4",
            voteState === "up" && "animate-in zoom-in-50 duration-300",
          )}
          fill={voteState === "up" ? "currentColor" : "none"}
          aria-hidden="true"
        />
        {upvotes}
      </button>

      <button
        type="button"
        aria-pressed={voteState === "down"}
        aria-label="Votar en contra"
        onClick={() => handleVote("down")}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-medium tabular-nums transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          voteState === "down"
            ? "border-foreground/40 bg-foreground/10 font-semibold text-foreground"
            : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <ArrowBigDown
          className={cn(
            "size-4",
            voteState === "down" && "animate-in zoom-in-50 duration-300",
          )}
          fill={voteState === "down" ? "currentColor" : "none"}
          aria-hidden="true"
        />
        {downvotes}
      </button>
    </div>
  );
}
