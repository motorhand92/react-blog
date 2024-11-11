import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice.js";
import bioReducer from "./features/bioSlice.js";
import userReducer from "./features/userSlice.js";
import contentReducer from "./features/contentSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    bio: bioReducer,
    user: userReducer,
    content: contentReducer,
  },
});

export default store;
