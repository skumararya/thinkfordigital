import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artistSearchValues: {},
  artistSearchHome: false, 
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateArtistSearchValues: (state, action) => {
      state.artistSearchValues = action.payload;
    },
    setArtistSearchHome: (state, action) => {
      state.artistSearchHome = action.payload;
    },
    resetSearch: () => initialState,
  },
});

export const { updateArtistSearchValues, setArtistSearchHome, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;