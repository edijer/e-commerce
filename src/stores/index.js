import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import cartSlice from "./cartSlice";
import rateSlice from "./rateSlice";
import orderSlice from "./orderSlice";
import shippingInfoSlice from "./shippingInfoSlice";

// This middleware will warn us if we accidentally mutate Redux state
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import currentPageSlice from "./currentPageSlice";

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
    cart: cartSlice.reducer,
    currentPage: currentPageSlice.reducer,
    rate: rateSlice.reducer,
    orders: orderSlice.reducer,
    shippingInfo: shippingInfoSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), reduxImmutableStateInvariant()],
  devTools: true,
});
