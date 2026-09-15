"use client";

import { useEffect, useState } from "react";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { cn } from "cn";

import { applyVoteState, toggleVote, type VoteState } from "@/lib/vote";
import { readStoredVote, writeStoredVote } from "@/lib/vote-storage";
import type { VoteCounts } from "@/types/asset";

interface VoteControlsProps {
  contentId: string;
  initialVotes: VoteCounts;
  className?: string;
}

export function VoteControls({
  contentId,
  initialVotes,
  className,
}: VoteControlsProps) {
  const [voteState, setVoteState] = useState<VoteState>(null);

  useEffect(() => {
    const stored = readStoredVote(contentId);
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restaura el voto guardado en localStorage, invisible para el render estático inicial
      setVoteState(stored);
    }
  }, [contentId]);

  const { upvotes, downvotes } = applyVoteState(initialVotes, voteState);

  function handleVote(next: "up" | "down") {
    setVoteState((current) => {
      const updated = toggleVote(current, next);
      writeStoredVote(contentId, updated);
      return updated;
    });
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        type="button"
        aria-pressed={voteState === "up"}
        aria-label="Votar a favor"
        onClick={() => handleVote("up")}
        className={cn(
          "inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3.5 py-2 text-base font-medium tabular-nums transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          voteState === "up"
            ? "border-brand/40 bg-brand/10 font-semibold text-brand"
            : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <ArrowBigUp
          className={cn(
            "size-5",
            voteState === "up" && "animate-in zoom-in-50 duration-300",
          )}
          fill={voteState === "up" ? "currentColor" : "none"}
          aria-hidden="true"
        />
        <span
          key={upvotes}
          className="inline-block animate-in zoom-in-50 duration-200"
        >
          {upvotes}
        </span>
      </button>

      <button
        type="button"
        aria-pressed={voteState === "down"}
        aria-label="Votar en contra"
        onClick={() => handleVote("down")}
        className={cn(
          "inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3.5 py-2 text-base font-medium tabular-nums transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          voteState === "down"
            ? "border-foreground/40 bg-foreground/10 font-semibold text-foreground"
            : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <ArrowBigDown
          className={cn(
            "size-5",
            voteState === "down" && "animate-in zoom-in-50 duration-300",
          )}
          fill={voteState === "down" ? "currentColor" : "none"}
          aria-hidden="true"
        />
        <span
          key={downvotes}
          className="inline-block animate-in zoom-in-50 duration-200"
        >
          {downvotes}
        </span>
      </button>
    </div>
  );
}
