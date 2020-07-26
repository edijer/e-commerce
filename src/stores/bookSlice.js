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
  initialState: { totalCount: 0, items: [], selectedBook: null },
  reducers: {
    // non async reducers
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
  extraReducers: {
    // async reducers
    [loadBooks.fulfilled]: (state, { payload }) => {
      state.totalCount = payload.totalCount;
      state.items =
        payload.page === 1 ? payload.books : state.items.concat(payload.books);
    },
  },
});

export const { setSelectedBook } = bookSlice.actions;

export default bookSlice;
