import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../type.slice";
import {
  addAddress,
  addBankInfo,
  fetchLogin,
  fingUserById,
} from "../appCall/AuthAppCall";
import { fetchRegister } from "./../appCall/AuthAppCall";

const initialState: AuthState = {
  customer: null,
  accessToken: null,
  status: null,
  error: null,
};

const AuthSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.customer = action.payload;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(fetchLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.customer = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(fingUserById.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fingUserById.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.accessToken = action.payload;
      })
      .addCase(fingUserById.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(addAddress.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.customer = action.payload;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(addBankInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addBankInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.customer = action.payload;
      })
      .addCase(addBankInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      });
  },
});

export default AuthSlice.reducer;
