import productSlices, { sortProducts } from "@/store/ProductsSlice";
import { describe, test, expect } from "@jest/globals";

describe("ProductSlice", () => {
  test("should return sort products", () => {
    const action = { type: sortProducts.type, payload: "price" };

    const result = productSlices(
      { error: null, merchandises: [], status: "fulfilled" },
      action
    );

    expect(result).toEqual({
      error: null,
      merchandises: [],
      status: "fulfilled",
    });
  });
});
