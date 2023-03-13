import { describe, expect, it } from "vitest";
import baseProperty from "../.internel/baseProperty";

describe("test baseProperty", () => {
  it("test", () => {
    const fn = baseProperty("sex");
    const obj = { sex: "female" };
    expect(fn(obj)).toEqual('female');
  });
});
