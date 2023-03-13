import { describe, expect, it } from "vitest";
import eq from "../eq";

describe("test eq", () => {
  it("test number", () => {
    expect(eq(1, 1)).toBeTruthy();
  });

  it("test NaN", () => {
    expect(eq(NaN, NaN)).toBeTruthy();
  });
});
