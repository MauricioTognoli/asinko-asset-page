import type { VoteCounts } from "@/types/asset";

export type VoteState = "up" | "down" | null;

export function toggleVote(current: VoteState, next: "up" | "down"): VoteState {
  return current === next ? null : next;
}

export function applyVoteState(
  votes: VoteCounts,
  voteState: VoteState,
): VoteCounts {
  return {
    upvotes: votes.upvotes + (voteState === "up" ? 1 : 0),
    downvotes: votes.downvotes + (voteState === "down" ? 1 : 0),
  };
}
