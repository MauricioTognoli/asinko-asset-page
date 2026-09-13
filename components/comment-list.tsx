import type { Comment } from "@/types/asset";

interface CommentListProps {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="rounded-lg border border-border bg-muted/30 p-3 sm:p-4"
        >
          <span className="block text-sm font-medium text-foreground">
            @{comment.author}
          </span>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">
            {comment.content}
          </p>
        </li>
      ))}
    </ul>
  );
}
