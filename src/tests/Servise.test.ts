import Servise from "@/services/Servise";
import axios from "axios";
import { describe, test, expect } from "@jest/globals";
import { IProduct } from "@/types/types";

jest.mock("axios");

describe("Servise", () => {
  test("sholud return response as array objet typeof IProduct", async () => {
    const products: IProduct[] = [
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
      },
    ];

    const response = { data: products };

    (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(response);

    return Servise.getAll(10, 1, "url").then((data) =>
      expect(data).toEqual(products)
    );
  });
});
