import { nvdaAsset } from "@/data/asset";
import type { Asset, Post, Thesis } from "@/types/asset";

export function getAsset(): Asset {
  return nvdaAsset;
}

/** Resolves an asset by id, so routes can validate the `assetId` param instead of assuming it's always NVDA. */
export function getAssetById(assetId: string): Asset | undefined {
  return nvdaAsset.id === assetId ? nvdaAsset : undefined;
}

export function getPostById(id: string): Post | undefined {
  return nvdaAsset.posts.find((post) => post.id === id);
}

export function getThesisById(id: string): Thesis | undefined {
  return nvdaAsset.theses.find((thesis) => thesis.id === id);
}
