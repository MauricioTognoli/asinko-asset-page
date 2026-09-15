import { describe, expect, it } from "vitest";

import { applyVoteState, toggleVote } from "@/lib/vote";

describe("toggleVote", () => {
  it("selects a side from no vote", () => {
    expect(toggleVote(null, "up")).toBe("up");
    expect(toggleVote(null, "down")).toBe("down");
  });

  it("retracts the vote when the active side is selected again", () => {
    expect(toggleVote("up", "up")).toBeNull();
    expect(toggleVote("down", "down")).toBeNull();
  });

  it("switches sides when the other side is selected", () => {
    expect(toggleVote("up", "down")).toBe("down");
    expect(toggleVote("down", "up")).toBe("up");
  });
});

describe("applyVoteState", () => {
  const baseVotes = { upvotes: 128, downvotes: 124 };

  it("returns the original counts when there is no local vote", () => {
    expect(applyVoteState(baseVotes, null)).toEqual({
      upvotes: 128,
      downvotes: 124,
    });
  });

  it("adds one upvote without touching downvotes", () => {
    expect(applyVoteState(baseVotes, "up")).toEqual({
      upvotes: 129,
      downvotes: 124,
    });
  });

  it("switching from up to down correctly reverts the previous side", () => {
    const afterUpvote = applyVoteState(baseVotes, "up");
    expect(afterUpvote).toEqual({ upvotes: 129, downvotes: 124 });

    const afterSwitchToDownvote = applyVoteState(baseVotes, "down");
    expect(afterSwitchToDownvote).toEqual({ upvotes: 128, downvotes: 125 });
  });

  it("never produces a simultaneous upvote and downvote for the same voter", () => {
    for (const voteState of ["up", "down", null] as const) {
      const result = applyVoteState(baseVotes, voteState);
      const upDelta = result.upvotes - baseVotes.upvotes;
      const downDelta = result.downvotes - baseVotes.downvotes;
      expect(upDelta === 0 || downDelta === 0).toBe(true);
    }
  });
});
