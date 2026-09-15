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
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-20 space-y-4"
    >
      <div className="flex items-baseline justify-between border-b border-border pb-3">
        <h2
          id={headingId}
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {title}
        </h2>
        <span
          key={subtitle}
          className="inline-block animate-in fade-in-0 zoom-in-95 text-sm text-muted-foreground duration-200"
        >
          {subtitle}
        </span>
      </div>
      {children}
    </section>
  );
}
