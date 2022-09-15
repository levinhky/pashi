import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "slices/authSlice";
import cartSlice from "slices/cartSlice";

const reducer = combineReducers({
  cart: cartSlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer
});