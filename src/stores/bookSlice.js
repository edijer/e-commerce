import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as bookApi from "../api/bookApi";

export const loadBooks = createAsyncThunk("books/loadBooks", async (args) => {
  try {
    const { page, limit } = args;
    return await bookApi.getBooks(page, limit);
  } catch (error) {
    throw error;
  }
});

const bookSlice = createSlice({
  name: "books",
  initialState: { totalCount: 0, items: [] },
  reducers: {
    // non async reducers
  },
  extraReducers: {
    // async reducers
    [loadBooks.fulfilled]: (state, { payload }) => {
      state.totalCount = payload.totalCount;
      state.items = state.items.concat(payload.books);
    },
  },
});

export default bookSlice;
