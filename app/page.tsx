import { AssetHeader } from "@/components/asset-header";
import { ContentSection } from "@/components/content-section";
import { Header } from "@/components/header";
import { getAsset } from "@/lib/asset";

export default function Home() {
  const asset = getAsset();

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <Header />
      <main className="w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <AssetHeader asset={asset} />
        <div className="mt-8 flex flex-col gap-10">
          <ContentSection
            id="posts"
            title="Posteos"
            subtitle={`${asset.posts.length} publicaciones`}
          />
          <ContentSection
            id="theses"
            title="Tesis"
            subtitle={`${asset.theses.length} tesis`}
          />
        </div>
      </main>
    </div>
  );
}
