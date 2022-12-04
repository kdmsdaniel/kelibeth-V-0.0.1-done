import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setProducts } from "./Products.slice";

export const newsSlice = createSlice({
  name: "news",
  initialState: [],
  reducers: {
    setNews: (state, action) => {
      return action.payload;
    }
  }
});

export const getNewsThunk = () => (dispatch) => {
  dispatch(setProducts(true));
  axios
    .get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then((res) => dispatch(setNews(res.data)))
    .finally(() => dispatch(setProducts(false)));
};

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;