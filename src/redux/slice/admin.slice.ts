import { createSlice } from "@reduxjs/toolkit";
import { AdminState } from "../type.slice";
import {
  createDeliveryman,
  createVendor,
  getAllOrders,
  getEmployees,
  getLenghtOfCustomers,
  getLenghtOfFeedbacks,
  getLenghtOfFoods,
  getPopularFoods,
  getTopCustomers,
  getTopVendors,
  getTotalOrdersData,
  uploadVendorImage,
} from "../appCall/AdminAppCall";
import { uploadImage } from "../appCall/AuthAppCall";

const initialState: AdminState = {
  createdVendor: null,
  imageUrl: null,
  ordersLength: null,
  orders: null,
  topVendors: null,
  employees: null,
  topCustomers: null,
  popularItems: null,
  feedbacksLength: null,
  ordersTotalAmount: null,
  foodsLength: null,
  customersLength: null,
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
      })
      .addCase(getTotalOrdersData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getTotalOrdersData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.ordersLength = action.payload.length;
          state.ordersTotalAmount = action.payload.total;
        }
      })
      .addCase(getTotalOrdersData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(getLenghtOfCustomers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getLenghtOfCustomers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.customersLength = action.payload;
        }
      })
      .addCase(getLenghtOfCustomers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(getLenghtOfFeedbacks.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getLenghtOfFeedbacks.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.feedbacksLength = action.payload;
        }
      })
      .addCase(getLenghtOfFeedbacks.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(getLenghtOfFoods.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getLenghtOfFoods.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.foodsLength = action.payload;
        }
      })
      .addCase(getLenghtOfFoods.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(getTopVendors.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getTopVendors.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.topVendors = action.payload;
        }
      })
      .addCase(getTopVendors.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(getPopularFoods.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getPopularFoods.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.popularItems = action.payload;
        }
      })
      .addCase(getPopularFoods.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(getTopCustomers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getTopCustomers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.topCustomers = action.payload;
        }
      })
      .addCase(getTopCustomers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(getEmployees.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.employees = action.payload;
        }
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(getAllOrders.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state) {
          state.orders = action.payload;
        }
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export default AdminSlice.reducer;
