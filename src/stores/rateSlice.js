import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as rateApi from "../api/rateApi";

export const loadRates = createAsyncThunk("rate/loadRates", async () => {
  try {
    return await rateApi.getRate();
  } catch (error) {
    throw error;
  }
});

const rateSlice = createSlice({
  name: "rate",
  initialState: { tax: null, shipping: null },
  reducers: {
    // non async reducers
  },
  extraReducers: {
    // async reducers
    [loadRates.fulfilled]: (state, { payload }) => {
      state.tax = payload.rate.tax;
      state.shipping = payload.rate.shipping;
    },
  },
});

export default rateSlice;
