import { Check, CircleDot } from "lucide-react";

import type { Thesis } from "@/types/asset";

export function ThesisStatusBadges({ thesis }: { thesis: Thesis }) {
  const isAcertada = thesis.status === "closed" && thesis.outcome === "correct";

  return (
    <div className="flex flex-wrap items-center gap-2">
      {thesis.status === "open" ? (
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
          <CircleDot className="size-3" aria-hidden="true" />
          Abierta
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Cerrada
        </span>
      )}
      {isAcertada && (
        <span className="inline-flex items-center gap-1 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
          <Check className="size-3" aria-hidden="true" />
          Acertada
        </span>
      )}
    </div>
  );
}
