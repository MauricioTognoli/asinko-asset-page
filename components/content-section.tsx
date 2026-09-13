import type { ReactNode } from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function ContentSection({
  id,
  title,
  subtitle,
  children,
}: ContentSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section aria-labelledby={headingId} className="space-y-4">
      <div className="flex items-baseline justify-between border-b border-border pb-3">
        <h2
          id={headingId}
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {title}
        </h2>
        <span className="text-sm text-muted-foreground">{subtitle}</span>
      </div>
      {children}
    </section>
  );
}
