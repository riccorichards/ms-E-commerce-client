import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice/auth.slice";

export const store = configureStore({
  reducer: {
    customer: AuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
