import { IProduct } from "@/types/types";
import axios from "axios";

export default class Servise {
  static async getAll(limit: number, page: number, url: string) {
    const response = await axios.get<IProduct[]>(url, {
      params: {
        _limit: limit,
        _page: page,
      },
    });

    return response;
  }
}
