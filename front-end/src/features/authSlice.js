// src/features/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userId: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.userId = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
