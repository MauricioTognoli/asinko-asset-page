"use client";

import { useEffect, useRef, useState } from "react";

import { CommentForm } from "@/components/comments/comment-form";
import { CommentList } from "@/components/comments/comment-list";
import { ContentSection } from "@/components/content-section";
import { readStoredComments, writeStoredComments } from "@/lib/comment-storage";
import { formatCommentCount } from "@/lib/format";
import type { Comment } from "@/types/asset";

interface CommentsSectionProps {
  contentId: string;
  initialComments: Comment[];
}

export function CommentsSection({
  contentId,
  initialComments,
}: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newCommentId, setNewCommentId] = useState<string | null>(null);
  const processedContentId = useRef<string | null>(null);

  useEffect(() => {
    if (processedContentId.current === contentId) {
      return;
    }

    processedContentId.current = contentId;

    const stored = readStoredComments(contentId);

    setComments(
      stored.length > 0 ? [...stored, ...initialComments] : initialComments,
    );
  }, [contentId, initialComments]);

  function handleAddComment(content: string) {
    const id = crypto.randomUUID();
    const comment: Comment = {
      id,
      author: "usuario",
      content,
    };

    setComments((prev) => [comment, ...prev]);
    setNewCommentId(id);

    writeStoredComments(contentId, [comment, ...readStoredComments(contentId)]);
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
          <p
            role="status"
            aria-live="polite"
            className="text-sm text-muted-foreground"
          >
            Todavía no hay comentarios.
          </p>
        )}

        <div
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {newCommentId ? "Comentario publicado correctamente." : ""}
        </div>
      </div>
    </ContentSection>
  );
}
