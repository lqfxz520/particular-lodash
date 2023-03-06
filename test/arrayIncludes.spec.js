import { describe, expect, it } from "vitest";
import arrayIncludes from "../.internel/arrayIncludes";

describe("test arrayIncludes", function () {
  const array = [1, 2, 3, "4"]
  it("expect boolean", () => {
    const value = arrayIncludes(array, "4");
    expect(value).toBeTruthy();
  });

  it("expect false", () => {
    const value = arrayIncludes(array, 5);
    expect(value).toBeFalsy();
  })
});
