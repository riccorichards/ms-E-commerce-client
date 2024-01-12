import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice/auth.slice";
import AdminSlice from "./slice/admin.slice";
import VendorSlice from "./slice/vendor.slice";
import foodSlice from "./slice/food.slice";
import deliverymanSlice from "./slice/deliveryman.slice";
import ShoppingSlice from "./slice/shopping.slice";

export const store = configureStore({
  reducer: {
    customer: AuthSlice,
    admin: AdminSlice,
    vendor: VendorSlice,
    food: foodSlice,
    deliveryman: deliverymanSlice,
    shopping: ShoppingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
