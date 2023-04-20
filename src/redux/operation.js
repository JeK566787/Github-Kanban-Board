import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

axios.defaults.baseURL = "https://www.boredapi.com/api/";

export const fetchActivity = createAsyncThunk(
  "activity/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/activity");
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
