import { describe, expect, it } from "vitest";
import map from "../map";

describe("test map", function () {
  const values = [1, 2, 3];
  it("valid array", () => {
    const result = map(values, (value) => {
      return value * value;
    });

    expect(result).toEqual([1, 4, 9]);
  });

  it("valid empty Array", () => {
    const result = map(null, (value) => {
      return value;
    });

    expect(result).toEqual([]);
  });
});
