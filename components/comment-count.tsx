import { MessageSquare } from "lucide-react";
import { cn } from "cn";

interface CommentCountProps {
  count: number;
  className?: string;
}

export function CommentCount({ count, className }: CommentCountProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 tabular-nums text-sm text-muted-foreground",
        className,
      )}
      aria-label={`${count} comentarios`}
    >
      <MessageSquare className="size-4" aria-hidden="true" />
      <span aria-hidden="true">{count}</span>
    </span>
  );
}
