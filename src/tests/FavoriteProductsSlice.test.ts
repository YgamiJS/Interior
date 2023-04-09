import FavoriteProductSlice, {
  addFavorite,
  removeFavorite,
  clearFavorite,
  incrementCount,
  decrementCount,
} from "@/store/FavoriteProductsSlice";
import { describe, test, expect } from "@jest/globals";

describe("FavoriteProductSlice", () => {
  test("should add favorite product", () => {
    const action = {
      type: addFavorite.type,
      payload: {
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
      },
    };

    const result = FavoriteProductSlice({ merchandises: [] }, action);

    expect(result).toEqual({
      merchandises: [
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
        },
      ],
    });
  });

  test("should remove favorite product", () => {
    const action = { type: removeFavorite.type, payload: "1" };

    const result = FavoriteProductSlice(
      {
        merchandises: [
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
          },
        ],
      },
      action
    );

    expect(result).toEqual({ merchandises: [] });
  });

  test("sholud clear favorire products", () => {
    const action = { type: clearFavorite.type };

    const result = FavoriteProductSlice(
      {
        merchandises: [
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
          },
        ],
      },
      action
    );

    expect(result).toEqual({ merchandises: [] });
  });

  test("should increment count products", () => {
    const action = { type: incrementCount.type, payload: "1" };

    const result = FavoriteProductSlice(
      {
        merchandises: [
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
          },
        ],
      },
      action
    );

    expect(result.merchandises[0].count).toEqual(2);
  });

  test("should decrement count products", () => {
    const action = { type: decrementCount.type, payload: "1" };

    const result = FavoriteProductSlice(
      {
        merchandises: [
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
            count: 2,
            totalPrice: 1,
          },
        ],
      },
      action
    );

    expect(result.merchandises[0].count).toEqual(1);
  });
});
