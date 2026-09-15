import type { MetadataRoute } from "next";

import { getAsset } from "@/lib/asset";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const asset = getAsset();

  const postUrls = asset.posts.map((post) => ({
    url: `${SITE_URL}/asset/${asset.id}/post/${post.id}`,
  }));

  const thesisUrls = asset.theses.map((thesis) => ({
    url: `${SITE_URL}/asset/${asset.id}/thesis/${thesis.id}`,
  }));

  return [{ url: SITE_URL, priority: 1 }, ...postUrls, ...thesisUrls];
}
