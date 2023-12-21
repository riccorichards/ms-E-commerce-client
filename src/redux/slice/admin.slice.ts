import { createSlice } from "@reduxjs/toolkit";
import { AdminState } from "../type.slice";
import { createVendor, uploadVendorImage } from "../appCall/AdminAppCall";

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
      });
  },
});

export default AdminSlice.reducer;
