import BoughtProductsSlice, {
  loadBoughtProducts,
  checkBoughtProducts,
} from "@/store/BoughtProductsSlice";
import { describe, test, expect } from "@jest/globals";

describe("BoughtProductsSlice", () => {
  test("sholud return array IBoughtProducts", () => {
    const action = { type: loadBoughtProducts.type, payload: [] };

    const result = BoughtProductsSlice(
      {
        boughtMerchandises: [
          {
            id: "1",
            title: "title",
            description: "description",
            price: 123,
            img: "https://skammamonta.org",
            rating: 5,
            slider: ["https://skammamonta.org"],
            collection: true,
            old: "123",
            count: 1,
            totalPrice: 1,
            date: 12,
          },
        ],
      },
      action
    );

    expect(result).toEqual({
      boughtMerchandises: [
        {
          id: "1",
          title: "title",
          description: "description",
          price: 123,
          img: "https://skammamonta.org",
          rating: 5,
          slider: ["https://skammamonta.org"],
          collection: true,
          old: "123",
          count: 1,
          totalPrice: 1,
          date: 12,
        },
      ],
    });
  });

  test("should check bought products", () => {
    const result = BoughtProductsSlice(
      {
        boughtMerchandises: [
          {
            id: "1",
            title: "title",
            description: "description",
            price: 123,
            img: "https://skammamonta.org",
            rating: 5,
            slider: ["https://skammamonta.org"],
            collection: true,
            old: "123",
            count: 1,
            totalPrice: 1,
            date: 12,
          },
        ],
      },
      { type: "" }
    );

    expect(result).toBe(result);
  });
});
