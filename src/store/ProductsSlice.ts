import {
  PayloadAction,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { IOption, IProduct, IServise } from "@/types/types";
import Servise from "@/services/Servise";
import { data } from "./products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function ({ limit, page, url }: IServise, { rejectWithValue }) {
    try {
      const response = await Servise.getAll(limit, page, url);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface IState {
  merchandises: IProduct[];
  status: "pending" | "fulfilled" | "rejected" | null;
  error: SerializedError | null;
}

const initialState: IState = {
  merchandises: data,
  status: null,
  error: null,
};

export const productSlices = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortProducts(state, action: PayloadAction<IOption["value"]>) {
      state.merchandises.sort((a, b) =>
        typeof b === "string"
          ? (a[action.payload] as string).localeCompare(
              b[action.payload] as string
            )
          : String(a[action.payload]).localeCompare(String(b[action.payload]))
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.status = "fulfilled";
        state.error = null;
        state.merchandises = action.payload;
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error;
    });
  },
});

export const { sortProducts } = productSlices.actions;
export default productSlices.reducer;
