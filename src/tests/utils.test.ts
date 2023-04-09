import { describe, test, expect } from "@jest/globals";
import { uuid, randomDate } from "@/utils/utils";

describe("utils", () => {
  test("should return string", () => {
    expect(uuid()).toMatch(/(\d|\w)+/);
  });
  test("should return date", () => {
    expect(randomDate(new Date(), new Date())).toEqual(
      randomDate(new Date(), new Date())
    );
  });
});
