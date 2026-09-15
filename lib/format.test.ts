import { describe, expect, it } from "vitest";

import {
  formatCommentCount,
  formatConviction,
  formatDeadline,
} from "@/lib/format";

describe("formatDeadline", () => {
  it("formats the real thesis deadlines from the seed content", () => {
    expect(formatDeadline("2027-03-15")).toBe("15 mar 2027");
    expect(formatDeadline("2026-06-30")).toBe("30 jun 2026");
  });

  it("does not shift the day across a UTC timezone boundary", () => {
    expect(formatDeadline("2026-01-01")).toBe("1 ene 2026");
    expect(formatDeadline("2026-12-31")).toBe("31 dic 2026");
  });
});

describe("formatConviction", () => {
  it("maps every conviction level to its Spanish label", () => {
    expect(formatConviction("low")).toBe("Baja");
    expect(formatConviction("medium")).toBe("Media");
    expect(formatConviction("high")).toBe("Alta");
    expect(formatConviction("extreme")).toBe("Extrema");
  });
});

describe("formatCommentCount", () => {
  it("uses the singular for exactly one comment", () => {
    expect(formatCommentCount(1)).toBe("1 comentario");
  });

  it("uses the plural for zero or more than one comment", () => {
    expect(formatCommentCount(0)).toBe("0 comentarios");
    expect(formatCommentCount(2)).toBe("2 comentarios");
    expect(formatCommentCount(2812)).toBe("2812 comentarios");
  });
});
