import { cn } from "cn";

import type { Comment } from "@/types/asset";

interface CommentListProps {
  comments: Comment[];
  newCommentId?: string | null;
}

export function CommentList({ comments, newCommentId }: CommentListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className={cn(
            "rounded-lg border border-border bg-muted/30 p-3 sm:p-4",
            comment.id === newCommentId &&
              "animate-in fade-in slide-in-from-top-2 duration-300",
          )}
        >
          <span className="wrap-break-word block text-sm font-medium text-foreground">
            @{comment.author}
          </span>
          <p className="wrap-break-word mt-1 text-sm leading-relaxed text-foreground/90">
            {comment.content}
          </p>
        </li>
      ))}
    </ul>
  );
}
