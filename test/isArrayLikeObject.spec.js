import { describe, expect, it } from "vitest";
import isArrayLikeObject from "../isArrayLikeObject";

describe("check isArrayLike", () => {
  it("valid string is true", () => {
    const bool = isArrayLikeObject("aaa");

    expect(bool).toBeFalsy();
  });

  it("valid object has property of length is true", () => {
    const bool = isArrayLikeObject({ length: 0 });
    const bool1 = isArrayLikeObject({});

    expect(bool).toBeTruthy();
    expect(bool1).toBeFalsy();
  });

  it("valid function is false", () => {
    const bool = isArrayLikeObject(new Function());

    expect(bool).toBeFalsy();
  });
});

