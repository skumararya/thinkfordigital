import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "../api/apiService";
import uiReducer from "../features/uiSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    
    ui: uiReducer,
    search: searchReducer,
  },
  

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});