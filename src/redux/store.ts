import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice/auth.slice";
import AdminSlice from "./slice/admin.slice";
import VendorSlice from "./slice/vendor.slice";
import foodSlice from "./slice/food.slice";

export const store = configureStore({
  reducer: {
    customer: AuthSlice,
    admin: AdminSlice,
    vendor: VendorSlice,
    food: foodSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
