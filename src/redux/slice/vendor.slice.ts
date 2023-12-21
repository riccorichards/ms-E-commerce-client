import { createSlice } from "@reduxjs/toolkit";
import { VendorState } from "../type.slice";
import {
  fetchVendor,
  uploadMemberImage,
  vendorLogOut,
  vendorLogin,
} from "../appCall/VendorAppCall";

const initialState: VendorState = {
  vendor: null,
  imageUrl: null,
  status: null,
  error: null,
};

const VendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(vendorLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(vendorLogin.fulfilled, (state, action) => {
        state.status = "pending";
        state.vendor = action.payload;
      })
      .addCase(vendorLogin.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(fetchVendor.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchVendor.fulfilled, (state, action) => {
        state.status = "pending";
        state.vendor = action.payload;
      })
      .addCase(fetchVendor.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(uploadMemberImage.pending, (state) => {
        state.status = "pending";
      })
      .addCase(uploadMemberImage.fulfilled, (state, action) => {
        state.status = "pending";
        state.imageUrl = action.payload;
      })
      .addCase(uploadMemberImage.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(vendorLogOut.pending, (state) => {
        state.status = "pending";
      })
      .addCase(vendorLogOut.fulfilled, (state, action) => {
        state.status = "pending";
        state.vendor = action.payload;
      })
      .addCase(vendorLogOut.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      });
  },
});

export default VendorSlice.reducer;
