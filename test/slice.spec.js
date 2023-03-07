import { describe, expect, it } from "vitest";
import slice from "../slice.js";

describe("slice", function () {
  it("test slice", () => {
    const array = [1, 2, 3, 4, 5, 6];

    const testA = slice(array);
    const testB = slice(array, 1);
    const testC = slice(null);
    const testD = slice(array, 1, 2);
    const testE = slice(array, 1, -2);
    const testF = slice(array, 1, 'a3');

    expect(testA).toEqual([1, 2, 3, 4, 5, 6]);
    expect(testB).toEqual([2, 3, 4, 5, 6]);
    expect(testC).toEqual([]);
    expect(testD).toEqual([2]);
    expect(testE).toEqual([2, 3, 4]);
    expect(testF).toEqual([2, 3, 4, 5, 6]);
  });
});
