import { createSlice } from "@reduxjs/toolkit";
import { ShoppingStateType } from "../type.slice";
import {
  cancelOrderingProcess,
  createShipping,
  getDeliverymanForOrder,
  getVendorForOrder,
  sendCartToServer,
} from "../appCall/ShoppingApiCall";
import { foodToCart } from "../appCall/FoodAppCall";

const initialState: ShoppingStateType = {
  nearestDeliveryman: null,
  orderId: null,
  order: null,
  deliverymanForOrder: null,
  vendorForOrder: [],
  status: null,
  error: null,
};

const ShoppingSlice = createSlice({
  name: "shopping",
  reducers: {},
  initialState,
  extraReducers(builder) {
    builder
      .addCase(sendCartToServer.pending, (state) => {
        state.status = "pending";
      })
      .addCase(sendCartToServer.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.nearestDeliveryman = action.payload.nearestPersons;
        state.orderId = action.payload.orderId;
      })
      .addCase(sendCartToServer.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(cancelOrderingProcess.pending, (state) => {
        state.status = "pending";
      })
      .addCase(cancelOrderingProcess.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.nearestDeliveryman = action.payload;
        state.orderId = action.payload;
      })
      .addCase(cancelOrderingProcess.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(createShipping.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createShipping.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.order = action.payload;
        state.nearestDeliveryman = null;
      })
      .addCase(createShipping.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(getDeliverymanForOrder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getDeliverymanForOrder.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.deliverymanForOrder = action.payload;
      })
      .addCase(getDeliverymanForOrder.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(foodToCart.pending, (state) => {
        state.status = "pending";
      })
      .addCase(foodToCart.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (action.payload) {
          state.deliverymanForOrder = null;
          state.vendorForOrder = [];
        }
      })
      .addCase(foodToCart.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(getVendorForOrder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getVendorForOrder.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendorForOrder) {
          state.vendorForOrder.push(action.payload);
        }
      })
      .addCase(getVendorForOrder.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      });
  },
});

export default ShoppingSlice.reducer;
