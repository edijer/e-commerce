import { createSlice } from "@reduxjs/toolkit";

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState: { title: "" },
  reducers: {
    // non async reducers
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
  extraReducers: {
    // async reducers
  },
});

export const { setTitle } = currentPageSlice.actions;

export default currentPageSlice;
