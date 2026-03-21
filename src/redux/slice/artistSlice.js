import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artistSearchData: [],
  artistSearchResponse: [],
  fromHomePage: false
};

export const artistSlice = createSlice({
  name: "artistSlice",
  initialState,
  reducers: {
    setArtistSearchData: (state, data) => {
      //   console.log("data received is : ", data.payload);
      state.artistSearchData = data.payload;
    },
    setArtistSearchResponse: (state, data) => {
      //   console.log("Response received is : ", data.payload);
      state.artistSearchResponse = data.payload;
    },
    setFromHomePage: (state) => {
      state.fromHomePage = true;
    },
  },
});

export const { setArtistSearchData, setArtistSearchResponse, setFromHomePage } =
  artistSlice.actions;
export default artistSlice.reducer;
