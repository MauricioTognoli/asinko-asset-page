import { describe, expect, it } from "vitest";

import { getAsset, getVoteSummary } from "@/lib/asset";

describe("getVoteSummary", () => {
  it("sums upvotes and downvotes across every real post and thesis", () => {
    expect(getVoteSummary(getAsset())).toEqual({
      upvotes: 655,
      downvotes: 154,
      total: 809,
      positivePercent: 81,
    });
  });

  it("falls back to 50% when there are no votes at all", () => {
    const emptyAsset = {
      id: "empty",
      name: "Empty Co.",
      ticker: "EMPTY",
      category: "Test",
      posts: [],
      theses: [],
    };
    expect(getVoteSummary(emptyAsset)).toEqual({
      upvotes: 0,
      downvotes: 0,
      total: 0,
      positivePercent: 50,
    });
  });
});
