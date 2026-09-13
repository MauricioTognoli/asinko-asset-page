import { ContentSection } from "@/components/content-section";
import { PostCard } from "@/components/posts/post-card";
import { getAsset } from "@/lib/asset";

export function PostsSection() {
  const { posts } = getAsset();

  return (
    <ContentSection
      id="posts"
      title="Posteos"
      subtitle={`${posts.length} publicaciones`}
    >
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </ContentSection>
  );
}
