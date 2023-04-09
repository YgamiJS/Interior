import { IBoughtProduct } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  boughtMerchandises: IBoughtProduct[];
}

const initialState: IState = {
  boughtMerchandises: [],
};

export const BoughtProductsSlice = createSlice({
  name: "boughtProducts",
  initialState,
  reducers: {
    loadBoughtProducts(state, action: PayloadAction<IBoughtProduct[]>) {
      state.boughtMerchandises.push(...action.payload);
    },
    checkBoughtProducts(state) {
      state.boughtMerchandises = state.boughtMerchandises.filter(
        (bougthProduct) =>
          !(new Date().getTime() == bougthProduct.date) && bougthProduct
      );
    },
  },
});

export const { loadBoughtProducts, checkBoughtProducts } =
  BoughtProductsSlice.actions;

export default BoughtProductsSlice.reducer;
