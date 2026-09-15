"use client";

import { useEffect, useState } from "react";

import { CommentCount } from "@/components/comment-count";
import { readStoredComments } from "@/lib/comment-storage";

interface LiveCommentCountProps {
  contentId: string;
  initialCount: number;
  href?: string;
  className?: string;
}

export function LiveCommentCount({
  contentId,
  initialCount,
  href,
  className,
}: LiveCommentCountProps) {
  const [storedCount, setStoredCount] = useState(0);

  useEffect(() => {
    const stored = readStoredComments(contentId);
    if (stored.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- suma comentarios guardados en localStorage, invisibles para el render estático inicial
      setStoredCount(stored.length);
    }
  }, [contentId]);

  return (
    <CommentCount
      count={initialCount + storedCount}
      href={href}
      className={className}
    />
  );
}
