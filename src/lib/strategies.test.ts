import { describe, expect, it } from "vitest";
import { searchStrategies, strategies } from "./strategies";

describe("searchStrategies", () => {
  it("returns all six strategies for empty query", () => {
    expect(searchStrategies("  ")).toHaveLength(6);
  });
  it("ignores accents and case", () => {
    expect(searchStrategies("PROSPECCAO").map((s) => s.id)).toEqual(["prospeccao"]);
  });
  it("matches tags", () => {
    expect(searchStrategies("garantia").map((s) => s.id)).toEqual(["oferta"]);
  });
  it("returns empty for no match", () => {
    expect(searchStrategies("xyzabc", strategies)).toEqual([]);
  });
});
