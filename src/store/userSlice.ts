import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IUser } from "@/types/types";

const initialState: IUser = {
  id: null,
  email: null,
  password: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      // state = action.payload;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
      state.password = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;
