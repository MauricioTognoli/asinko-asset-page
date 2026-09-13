import { AssetHeader } from "@/components/asset-header";
import { Header } from "@/components/header";
import { PostsSection } from "@/components/posts/posts-section";
import { ThesesSection } from "@/components/theses/theses-section";
import { getAsset } from "@/lib/asset";

export default function Home() {
  const asset = getAsset();

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <Header />
      <main className="w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <AssetHeader asset={asset} />
        <div className="mt-8 flex flex-col gap-10">
          <PostsSection />
          <ThesesSection />
        </div>
      </main>
    </div>
  );
}
