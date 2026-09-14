"use client";

import { useState } from "react";

import { CommentForm } from "@/components/comments/comment-form";
import { CommentList } from "@/components/comments/comment-list";
import { ContentSection } from "@/components/content-section";
import { formatCommentCount } from "@/lib/format";
import type { Comment } from "@/types/asset";

interface CommentsSectionProps {
  initialComments: Comment[];
}

export function CommentsSection({ initialComments }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newCommentId, setNewCommentId] = useState<string | null>(null);

  function handleAddComment(content: string) {
    const id = crypto.randomUUID();
    setComments((prev) => [{ id, author: "usuario", content }, ...prev]);
    setNewCommentId(id);
  }

  return (
    <ContentSection
      id="comments"
      title="Comentarios"
      subtitle={formatCommentCount(comments.length)}
    >
      <div className="flex flex-col gap-6">
        <CommentForm onSubmit={handleAddComment} />
        {comments.length > 0 ? (
          <CommentList comments={comments} newCommentId={newCommentId} />
        ) : (
          <p className="text-sm text-muted-foreground">
            Todavía no hay comentarios.
          </p>
        )}
      </div>
    </ContentSection>
  );
}
