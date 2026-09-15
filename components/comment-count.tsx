import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { cn } from "cn";

interface CommentCountProps {
  count: number;
  href?: string;
  className?: string;
}

export function CommentCount({ count, href, className }: CommentCountProps) {
  const icon = <MessageSquare className="size-5" aria-hidden="true" />;
  const number = <span aria-hidden="true">{count}</span>;

  if (href) {
    return (
      <Link
        href={href}
        aria-label={`Ver ${count} comentarios`}
        className={cn(
          "inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 py-2 tabular-nums text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
      >
        {icon}
        {number}
      </Link>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 tabular-nums text-base text-muted-foreground",
        className,
      )}
      aria-label={`${count} comentarios`}
    >
      {icon}
      {number}
    </span>
  );
}
