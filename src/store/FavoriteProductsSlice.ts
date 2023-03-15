import { IFavoriteProduct } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  merchandises: IFavoriteProduct[];
}

const initialState: IState = {
  merchandises: [],
};

export const FavoriteProductSlice = createSlice({
  name: "favorilteProduct",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IFavoriteProduct>) {
      state.merchandises.push(action.payload);
    },

    removeFavorite(state, action: PayloadAction<string>) {
      state.merchandises = state.merchandises.filter(
        (merchandise) => merchandise.id !== action.payload
      );
    },

    clearFavorite(state) {
      state.merchandises = [];
    },

    incrementCount(state, action: PayloadAction<string>) {
      const item = state.merchandises.find(
        (merchandi) => merchandi.id === action.payload
      )!;

      ++item.count;

      item.totalPrice = item.price * item.count;
    },

    decrementCount(state, action: PayloadAction<string>) {
      const item = state.merchandises.find(
        (merchandi) => merchandi.id === action.payload
      )!;

      if (item.count <= 1) return;

      --item.count;

      item.totalPrice -= item.price;
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  clearFavorite,
  incrementCount,
  decrementCount,
} = FavoriteProductSlice.actions;

export default FavoriteProductSlice.reducer;
