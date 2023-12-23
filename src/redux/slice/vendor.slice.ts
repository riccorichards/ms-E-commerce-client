import { createSlice } from "@reduxjs/toolkit";
import { VendorState } from "../type.slice";
import {
  addNewMember,
  fetchVendor,
  removeMember,
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
        state.status = "fulfilled";
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
        state.status = "fulfilled";
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
        state.status = "fulfilled";
        state.imageUrl = action.payload;
      })
      .addCase(uploadMemberImage.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(addNewMember.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addNewMember.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendor?.teamMember.push(action.payload);
        state.imageUrl = null;
      })
      .addCase(addNewMember.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(removeMember.pending, (state) => {
        state.status = "pending";
      })
      .addCase(removeMember.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendor) {
          state.vendor.teamMember = state.vendor.teamMember.filter(
            (member) =>
              member._id?.toString() !== action.payload._id?.toString()
          );
        }
      })
      .addCase(removeMember.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(vendorLogOut.pending, (state) => {
        state.status = "pending";
      })
      .addCase(vendorLogOut.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendor = action.payload;
      })
      .addCase(vendorLogOut.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      });
  },
});

export default VendorSlice.reducer;
