import { createSlice } from "@reduxjs/toolkit";

const bioSlice = createSlice({
  name: "bio",
  initialState: {
    bioText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor turpis vitae mauris bibendum dictum.
    Maecenas sapien ex, blandit fringilla commodo non, consectetur sed orci. Vivamus lacinia nec urna ut
    convallis. Pellentesque imperdiet vitae justo non imperdiet. Duis in porta massa. Nulla egestas mi tortor, in
    consequat sem fermentum ac. In quis porta dolor. Etiam efficitur id lectus nec mollis. Nulla facilisi. Quisque
    molestie diam leo, nec elementum sem lobortis sit amet. Suspendisse ac libero tortor. Aenean dignissim sapien
    in enim tincidunt gravida. Maecenas non justo nisi.`,
  },
  reducers: {
    updateBio: (state, action) => {
      state.bioText = action.payload;
    },
  },
});

export const { updateBio } = bioSlice.actions;
export default bioSlice.reducer;
