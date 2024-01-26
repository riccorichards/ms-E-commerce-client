import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../type.slice";
import {
  addAddress,
  addBankInfo,
  checkCurrentPassword,
  coordsOfCustomer,
  deleteFeedback,
  fetchLogin,
  findCustomerById,
  getCustomerFeeds,
  logOut,
  updateAddressInfo,
  updateBankInfo,
  updateBasicCustomerInfo,
  uploadImage,
} from "../appCall/AuthAppCall";
import { fetchRegister } from "./../appCall/AuthAppCall";
import { foodToCart, wishlistToggle } from "../appCall/FoodAppCall";
import { sendCartToServer } from "../appCall/ShoppingApiCall";

const initialState: AuthState = {
  customer: null,
  myFeeds: null,
  ttl: null,
  coords: null,
  customerPagination: null,
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
        state.customer = action.payload.customer;
        state.ttl = action.payload.ttl;
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
        if (state.customer && !state.customer.isAdmin) {
          state.customer.url = action.payload.url;
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
        state.customer = action.payload.customer;
        state.ttl = action.payload.ttl;
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
        state.customer = action.payload.customer;
        state.ttl = action.payload.ttl;
        state.currentPassword = null;
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
      .addCase(wishlistToggle.pending, (state) => {
        state.status = "pending";
      })
      .addCase(wishlistToggle.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.customer) {
          const { wishlist } = state.customer;
          const index = wishlist.findIndex(
            (food) => food.id === action.payload.id
          );
          if (index !== -1) {
            wishlist.splice(index, 1);
          } else {
            wishlist.push(action.payload);
          }
        }
      })
      .addCase(foodToCart.pending, (state) => {
        state.status = "pending";
      })
      .addCase(foodToCart.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.customer) {
          const { cart } = state.customer;
          const existingFoodIndex = cart.findIndex(
            (food) => food.id === action.payload.id
          );
          if (existingFoodIndex !== -1) {
            if (action.payload.unit === 0) {
              cart.splice(existingFoodIndex, 1);
            } else {
              cart[existingFoodIndex].unit = action.payload.unit;
            }
          } else {
            cart.push(action.payload);
          }
        }
      })
      .addCase(foodToCart.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getCustomerFeeds.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCustomerFeeds.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.myFeeds = action.payload.feedResult;
        state.customerPagination = action.payload.pagination;
      })
      .addCase(getCustomerFeeds.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(coordsOfCustomer.pending, (state) => {
        state.status = "pending";
      })
      .addCase(coordsOfCustomer.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.coords = action.payload;
      })
      .addCase(coordsOfCustomer.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(deleteFeedback.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.myFeeds) {
          state.myFeeds = state.myFeeds.filter(
            (feed) => feed.feedId !== action.payload.id
          );
        }
      })
      .addCase(deleteFeedback.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(sendCartToServer.pending, (state) => {
        state.status = "pending";
      })
      .addCase(sendCartToServer.fulfilled, (state) => {
        state.status = "fulfilled";
        if (state.customer) {
          state.customer.cart = [];
        }
      })
      .addCase(sendCartToServer.rejected, (state, action) => {
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
