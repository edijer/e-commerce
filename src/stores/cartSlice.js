import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as cartApi from "../api/cartApi";

export const loadCart = createAsyncThunk("cart/loadCart", async () => {
  try {
    return await cartApi.getCart();
  } catch (error) {
    throw error;
  }
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (args, thunkApi) => {
    const { bookId } = args;
    const { dispatch } = thunkApi;
    try {
      await cartApi.addToCart(bookId);
      await dispatch(loadCart());
    } catch (error) {
      throw error;
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/addToCart",
  async (args, thunkApi) => {
    const { bookId } = args;
    const { dispatch } = thunkApi;
    try {
      await cartApi.removeFromCart(bookId);
      await dispatch(loadCart());
    } catch (error) {
      throw error;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    // non async reducers
  },
  extraReducers: {
    // async reducers
    [loadCart.fulfilled]: (state, { payload }) => {
      state.items = payload.items;
    },
  },
});

export default cartSlice;
