import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const response = await axios.get("/api/bio");
const bioInfo = response.data;

const bioSlice = createSlice({
  name: "bio",
  initialState: bioInfo,
  reducers: {
    updateBio: async (state, action) => {
      await axios.post("/api/bio/bioSum", { bioSum: action.payload }).then((response) => {
        console.log(response);
        // state.bio.bioSum = response.data.bioSum;
      });
      // console.log(response);
      // console.log(response);
    },
  },
});

export const { updateBio } = bioSlice.actions;
export default bioSlice.reducer;
