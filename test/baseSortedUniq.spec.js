import { describe, expect, it } from "vitest";
import baseSortedUniq from "../.internel/baseSortedUniq";

describe("test baseSortedUniq", () => {
  it("test", () => {
    const arr = [1, 1, 2, 3, 3.1, 4.2, 4.1];

    expect(baseSortedUniq(arr, Math.floor)).toEqual([1, 2, 3, 4.2]);
  });
});
