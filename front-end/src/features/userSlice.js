import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const response = await axios.get("/api/users");
const usersInfo = response.data;

const userSlice = createSlice({
  name: "user",
  initialState: usersInfo,
  reducers: {
    updateAvatar: (state, action) => {
      state[action.payload[0]].userAvatar = action.payload[1];
    },
  },
});

export const { updateAvatar } = userSlice.actions;
export default userSlice.reducer;
