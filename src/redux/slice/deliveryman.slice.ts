import { createSlice } from "@reduxjs/toolkit";
import { DeliverymanState } from "../type.slice";
import {
  deliverymanlogOut,
  getDeliveryman,
  loginDeliveryman,
} from "../appCall/DeliverymanAppCall";
import { refreshAccessToken } from "../appCall/VendorAppCall";
import { uploadImage } from "../appCall/AuthAppCall";

const initialState: DeliverymanState = {
  deliveyman: null,
  ttl: null,
  status: null,
  error: null,
};

const DeliverymanSlice = createSlice({
  name: "deliveryman",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginDeliveryman.pending, (state) => {
        state.status = "pending";
      })
      .addCase(loginDeliveryman.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.deliveyman = action.payload.deliveryman;
        state.ttl = action.payload.ttl;
      })
      .addCase(loginDeliveryman.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(getDeliveryman.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getDeliveryman.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.deliveyman = action.payload;
      })
      .addCase(getDeliveryman.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(uploadImage.pending, (state) => {
        state.status = "pending";
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.deliveyman) {
          state.deliveyman.image = action.payload;
        }
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.status = "pending";
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.ttl = action.payload.ttl;
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(deliverymanlogOut.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deliverymanlogOut.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.deliveyman = action.payload;
      })
      .addCase(deliverymanlogOut.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      });
  },
});

export default DeliverymanSlice.reducer;
