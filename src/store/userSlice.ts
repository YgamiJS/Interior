import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IUser } from "@/types/types";

const initialState: IUser = {
  id: null,
  email: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state = action.payload;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;
