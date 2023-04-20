import { configureStore } from "@reduxjs/toolkit";
import { urlReducer } from "./testSlice";

export const store = configureStore({
  reducer: {
    mainState: urlReducer,
  },
});
