import type { ConvictionLevel } from "@/types/asset";

const MONTHS_ES = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
] as const;

const CONVICTION_LABELS: Record<ConvictionLevel, string> = {
  low: "Baja",
  medium: "Media",
  high: "Alta",
  extreme: "Extrema",
};

export function formatDeadline(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  const day = date.getUTCDate();
  const month = MONTHS_ES[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${day} ${month} ${year}`;
}

export function formatConviction(conviction: ConvictionLevel): string {
  return CONVICTION_LABELS[conviction];
}
