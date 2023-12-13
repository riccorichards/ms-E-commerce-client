import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../type.slice";
import {
  addAddress,
  addBankInfo,
  checkCurrentPassword,
  fetchLogin,
  findCustomerById,
  logOut,
  updateAddressInfo,
  updateBankInfo,
  updateBasicCustomerInfo,
  uploadImage,
} from "../appCall/AuthAppCall";
import { fetchRegister } from "./../appCall/AuthAppCall";

const initialState: AuthState = {
  customer: null,
  _id: null,
  currentPassword: null,
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
        state._id = action.payload;
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
      .addCase(addAddress.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state._id = action.payload;
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
        state._id = action.payload;
      })
      .addCase(addBankInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(uploadImage.pending, (state) => {
        state.status = "pending";
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.customer) {
          state.customer.image = action.payload;
        }
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(findCustomerById.pending, (state) => {
        state.status = "pending";
      })
      .addCase(findCustomerById.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.customer = action.payload;
      })
      .addCase(findCustomerById.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(checkCurrentPassword.pending, (state) => {
        state.status = "pending";
      })
      .addCase(checkCurrentPassword.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.currentPassword = action.payload;
      })
      .addCase(checkCurrentPassword.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(updateBasicCustomerInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateBasicCustomerInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.customer = action.payload;
      })
      .addCase(updateBasicCustomerInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(updateAddressInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateAddressInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.customer) {
          state.customer.address = action.payload;
        }
      })
      .addCase(updateAddressInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(updateBankInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateBankInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.customer) {
          state.customer.bank = action.payload;
        }
      })
      .addCase(updateBankInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(logOut.pending, (state) => {
        state.status = "pending";
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.customer = action.payload;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      });
  },
});

export default AuthSlice.reducer;
