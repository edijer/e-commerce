import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as cartApi from "../api/cartApi";

export const loadCart = createAsyncThunk("cart/loadCart", async (args) => {
  try {
    return await cartApi.getCart();
  } catch (error) {
    throw error;
  }
});

export const addToCart = createAsyncThunk("cart/addToCart", async (args) => {
  const { bookId } = args;
  try {
    await cartApi.addToCart(bookId);
  } catch (error) {
    throw error;
  }
});

const totalCount = (items) => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { totalCount: 0, items: [] },
  reducers: {
    // non async reducers
  },
  extraReducers: {
    // async reducers
    [loadCart.fulfilled]: (state, { payload }) => {
      state.items = payload.items;
      state.totalCount = totalCount(state.items);
    },
    [addToCart.fulfilled]: (state, { payload }) => {
      const copy = [...state.items];
      copy.push(payload.addedItem);
      state.items = copy;
      state.totalCount = totalCount(state.items);
    },
  },
});

export default cartSlice;
