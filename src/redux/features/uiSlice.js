import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fontSize: 16,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    fontSizeIncrease: (state) => {
      state.fontSize += 1 && state.fontSize <= 20
    },
    fontSizeDecrease: (state) => {
      state.fontSize -= 1 && state.fontSize >= 12;
    },
    fontSizeOriginal: (state) => {
      state.fontSize = 16;
    },
  },
});

export const { fontSizeIncrease, fontSizeDecrease, fontSizeOriginal } = uiSlice.actions;

export default uiSlice.reducer;