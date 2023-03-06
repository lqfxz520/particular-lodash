import { describe, expect, it } from "vitest";
import isArrayLike from "../isArrayLike";

describe("check isArrayLike", () => {
  it("valid string is true", () => {
    const bool = isArrayLike("aaa");

    expect(bool).toBeTruthy();
  });

  it("valid object has property of length is true", () => {
    const bool = isArrayLike({ length: 0 });
    const bool1 = isArrayLike({});

    expect(bool).toBeTruthy();
    expect(bool1).toBeFalsy();
  });

  it("valid function is false", () => {
    const bool = isArrayLike(new Function());

    expect(bool).toBeFalsy();
  });
});
