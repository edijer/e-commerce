import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import cartSlice from "./cartSlice";

// This middleware will warn us if we accidentally mutate Redux state
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), reduxImmutableStateInvariant()],
  devTools: true,
});
