import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const response = await axios.get("/api/articles");
const articleInfo = response.data;

const contentSlice = createSlice({
  name: "content",
  initialState: articleInfo,
  reducers: {
    increaseLike: (state, action) => {
      state[action.payload].like = state[action.payload].like + 1;
    },
    decreaseLike: (state, action) => {
      state[action.payload].like = state[action.payload].like - 1;
    },
    updateComment: (state, action) => {
      state[action.payload[0]].comments.unshift({
        id: action.payload[1],
        user: action.payload[2],
        userAvatar: action.payload[3],
        commentText: action.payload[4],
      });
    },
    updateContentAvatar: (state, action) => {
      // for (let i = 0; i < state.contents.length; i++) {
      //   for (let j = 0; j < state.contents[i].comments.length; j++) {
      //     return state.contents[i].comments[j].userAvatar === action.payload[1];
      //   }
      // }
      return state.contents[action.payload[0]].comments[action.payload[1]].userAvatar === action.payload[2];
    },
  },
});

export const { increaseLike, decreaseLike, updateComment, updateContentAvatar } = contentSlice.actions;
export default contentSlice.reducer;
