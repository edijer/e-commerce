import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";

// This middleware will warn us if we accidentally mutate Redux state
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), reduxImmutableStateInvariant()],
  devTools: true,
});
