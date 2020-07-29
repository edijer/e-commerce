import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as shippingInfoApi from "../api/shippingInfoApi";

export const loadShippingInfo = createAsyncThunk(
  "shippingInfo/loadShippingInfo",
  async () => {
    try {
      return await shippingInfoApi.getShippingInfo();
    } catch (error) {
      throw error;
    }
  }
);

export const addOrUpdateShippingInfo = createAsyncThunk(
  "shippingInfo/addOrUpdateShippingInfo",
  async (args, thunkApi) => {
    const { address } = args;
    const { dispatch } = thunkApi;
    try {
      await shippingInfoApi.addOrUpdateShippingInfo(address);
      await dispatch(loadShippingInfo());
    } catch (error) {
      throw error;
    }
  }
);

const shippingInfoSlice = createSlice({
  name: "shippingInfo",
  initialState: {
    address: {
      id: null,
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      country: "",
      postalCode: "",
      phoneNumber: "",
    },
  },
  reducers: {
    // non async reducers
  },
  extraReducers: {
    // async reducers
    [loadShippingInfo.fulfilled]: (state, { payload }) => {
      if (payload.address) state.address = payload.address;
    },
  },
});

export default shippingInfoSlice;
