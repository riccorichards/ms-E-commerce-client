import { createSlice } from "@reduxjs/toolkit";
import { DeliverymanState, EarnStats, OrderType } from "../type.slice";
import {
  deliverymanlogOut,
  getDeliveryman,
  getdeliverymanFeeds,
  getdeliverymanOrders,
  loginDeliveryman,
} from "../appCall/DeliverymanAppCall";
import { refreshAccessToken } from "../appCall/VendorAppCall";
import { uploadImage } from "../appCall/AuthAppCall";

const initialState: DeliverymanState = {
  deliveyman: null,
  ttl: null,
  ordersLen: null,
  deliveryFeedbacks: null,
  earnStats: null,
  deliverymanOrders: null,
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
      })
      .addCase(getdeliverymanFeeds.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getdeliverymanFeeds.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.deliveryFeedbacks = action.payload;
      })
      .addCase(getdeliverymanFeeds.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(getdeliverymanOrders.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getdeliverymanOrders.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (action.payload.isStats) {
          state.earnStats = action.payload.res as EarnStats[];
        } else {
          state.deliverymanOrders = action.payload.res as OrderType[];
        }
        state.ordersLen = action.payload.len;
      })
      .addCase(getdeliverymanOrders.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      });
  },
});

export default DeliverymanSlice.reducer;
