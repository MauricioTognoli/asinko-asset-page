import { nvdaAsset } from "@/data/asset";
import type { Asset, Post, Thesis } from "@/types/asset";

export function getAsset(): Asset {
  return nvdaAsset;
}

export function getAssetById(assetId: string): Asset | undefined {
  return nvdaAsset.id === assetId ? nvdaAsset : undefined;
}

export function getPostById(id: string): Post | undefined {
  return nvdaAsset.posts.find((post) => post.id === id);
}

export function getThesisById(id: string): Thesis | undefined {
  return nvdaAsset.theses.find((thesis) => thesis.id === id);
}

export interface VoteSummary {
  upvotes: number;
  downvotes: number;
  total: number;
  positivePercent: number;
}

export function getVoteSummary(asset: Asset): VoteSummary {
  const items = [...asset.posts, ...asset.theses];
  const upvotes = items.reduce((sum, item) => sum + item.votes.upvotes, 0);
  const downvotes = items.reduce((sum, item) => sum + item.votes.downvotes, 0);
  const total = upvotes + downvotes;
  const positivePercent =
    total === 0 ? 50 : Math.round((upvotes / total) * 100);

  return { upvotes, downvotes, total, positivePercent };
}
