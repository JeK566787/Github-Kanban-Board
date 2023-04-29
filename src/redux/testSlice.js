import { createSlice } from "@reduxjs/toolkit";
import { fetchActivity } from "./operation";

const urlInitialState = {
  formURL: [],
  activity: [],
  error: null,
};

const urlSlice = createSlice({
  name: "getURL",
  initialState: urlInitialState,
  reducers: {
    addURL: {
      reducer(state, action) {
        state.formURL.push(action.payload);
      },
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchActivity.pending, (state, action) => {})
      .addCase(fetchActivity.fulfilled, (state, action) => {
        state.activity = action.payload;
      })
      .addCase(fetchActivity.rejected, (state, action) => {
        state.error = action.payload;
      }),
});
// Экспортируем генераторы экшенов и редюсер
export const { addURL } = urlSlice.actions;
export const urlReducer = urlSlice.reducer;
