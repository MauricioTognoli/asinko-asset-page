import type { VoteState } from "@/lib/vote";

function storageKey(contentId: string) {
  return `asinko-vote-${contentId}`;
}

export function readStoredVote(contentId: string): VoteState {
  try {
    const raw = localStorage.getItem(storageKey(contentId));
    return raw === "up" || raw === "down" ? raw : null;
  } catch {
    return null;
  }
}

export function writeStoredVote(contentId: string, voteState: VoteState) {
  try {
    if (voteState) {
      localStorage.setItem(storageKey(contentId), voteState);
    } else {
      localStorage.removeItem(storageKey(contentId));
    }
  } catch {}
}
