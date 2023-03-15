import { describe, expect, it } from "vitest";
import baseSortedIndex from "../.internel/baseSortedIndex";

describe("test baseSortedIndex", () => {
  it("test", () => {
    const arr = [0, 1, 2, 3, 4];
    const index = baseSortedIndex(arr, 1, true);
    expect(index).toBe(2);
  });
  it("test retHighest is false", () => {
    const arr = [0, 1, 2, 3, 4];
    const index = baseSortedIndex(arr, 1, false);
    expect(index).toBe(1);
  });
});

