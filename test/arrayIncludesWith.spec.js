import { describe, expect, it } from "vitest";
import arrayIncludesWith from "../.internel/arrayIncludesWith.js";

describe("arrayIncludesWith", function () {
  it("value equal", function () {
    const value = arrayIncludesWith([1.1, 2.2, 3.3], 1, (a, b) => {
      return Math.floor(a) === b;
    });
    expect(value).toBeTruthy();
  });
});
