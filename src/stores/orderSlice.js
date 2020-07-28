import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as orderApi from "../api/orderApi";

export const loadOrders = createAsyncThunk(
  "orders/loadOrders",
  async (args) => {
    try {
      const { page, limit } = args;
      return await orderApi.getOrders(page, limit);
    } catch (error) {
      throw error;
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: { totalCount: 0, items: [] },
  reducers: {
    // non async reducers
  },
  extraReducers: {
    // async reducers
    [loadOrders.fulfilled]: (state, { payload }) => {
      state.totalCount = payload.totalCount;
      state.items =
        payload.page === 1 ? payload.items : state.items.concat(payload.items);
    },
  },
});

export default orderSlice;
