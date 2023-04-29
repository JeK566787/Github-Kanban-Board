import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: "4550a8eec95d666ba10dfff9664c0efb",
};

export const fetchActivity = createAsyncThunk(
  "activity/getAll",
  async (query, thunkAPI) => {
    const params = { query: query };
    // console.log(url);
    try {
      const response = await axios.get("/search/movie", { params });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
