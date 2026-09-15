import { PostCard } from "@/components/posts/post-card";
import { getAsset } from "@/lib/asset";

export function PostsSection() {
  const asset = getAsset();

  return (
    <ul className="flex flex-col gap-4 pt-4">
      {asset.posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} assetId={asset.id} />
        </li>
      ))}
    </ul>
  );
}
