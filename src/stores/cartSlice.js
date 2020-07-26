import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    // non async reducers
    addToCart: (state, action) => {
      const copy = [...state.items];
      copy.push(action.payload);
      state.items = copy;
    },
  },
  extraReducers: {
    // async reducers
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice;
