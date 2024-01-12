import { createSlice } from "@reduxjs/toolkit";
import { AdminState } from "../type.slice";
import {
  createDeliveryman,
  createVendor,
  uploadVendorImage,
} from "../appCall/AdminAppCall";
import { uploadImage } from "../appCall/AuthAppCall";

const initialState: AdminState = {
  createdVendor: null,
  imageUrl: null,
  createdDeliveryman: null,
  status: null,
  error: null,
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createVendor.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createVendor.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.createdVendor) {
          state.createdVendor = action.payload;
        }
      })
      .addCase(createVendor.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(createDeliveryman.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createDeliveryman.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.createdDeliveryman = action.payload;
        state.imageUrl = null;
      })
      .addCase(createDeliveryman.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(uploadVendorImage.pending, (state) => {
        state.status = "pending";
      })
      .addCase(uploadVendorImage.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.imageUrl = action.payload;
        }
      })
      .addCase(uploadVendorImage.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(uploadImage.pending, (state) => {
        state.status = "pending";
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.imageUrl = action.payload;
        }
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export default AdminSlice.reducer;
