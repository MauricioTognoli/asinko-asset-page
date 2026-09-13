import { AssetHeader } from "@/components/asset-header";
import { PostsSection } from "@/components/posts/posts-section";
import { ThesesSection } from "@/components/theses/theses-section";
import { getAsset } from "@/lib/asset";

export default function Home() {
  const asset = getAsset();

  return (
    <>
      <AssetHeader asset={asset} />
      <div className="mt-8 flex flex-col gap-10">
        <PostsSection />
        <ThesesSection />
      </div>
    </>
  );
}
