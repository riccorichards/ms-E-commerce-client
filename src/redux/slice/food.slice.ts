import { createSlice } from "@reduxjs/toolkit";
import { FoodState, GetVendorSubC } from "../type.slice";
import {
  createFood,
  createSubCat,
  fetchMainCategories,
  fetchMainCategorysSubCat,
  fetchSubCategories,
  fetchVendorSubCategories,
  getFoods,
  getFoodsFeeds,
  getProductUrlForSubCat,
} from "../appCall/FoodAppCall";
import { addFeedback, uploadImage } from "../appCall/AuthAppCall";
import { getVendorFoods } from "@redux/appCall/VendorAppCall";

const initialState: FoodState = {
  mainC: null,
  subC: null,
  productUrl: null,
  foodImage: null,
  foodsFeeds: null,
  foods: null,
  foodPagination: null,
  vendorFoods: null,
  state: null,
  error: null,
};

const FoodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMainCategories.pending, (state) => {
        state.state = "pending";
      })
      .addCase(fetchMainCategories.fulfilled, (state, action) => {
        state.state = "fulfilled";
        state.mainC = action.payload;
      })
      .addCase(fetchMainCategories.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(fetchMainCategorysSubCat.pending, (state) => {
        state.state = "pending";
      })
      .addCase(fetchMainCategorysSubCat.fulfilled, (state, action) => {
        state.state = "fulfilled";
        state.subC = action.payload;
      })
      .addCase(fetchMainCategorysSubCat.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(getProductUrlForSubCat.pending, (state) => {
        state.state = "pending";
      })
      .addCase(getProductUrlForSubCat.fulfilled, (state, action) => {
        state.state = "fulfilled";
        state.productUrl = action.payload;
      })
      .addCase(getProductUrlForSubCat.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(fetchSubCategories.pending, (state) => {
        state.state = "pending";
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.state = "fulfilled";
        state.subC = action.payload;
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(fetchVendorSubCategories.pending, (state) => {
        state.state = "pending";
      })
      .addCase(fetchVendorSubCategories.fulfilled, (state, action) => {
        state.state = "fulfilled";
        state.subC = action.payload;
      })
      .addCase(fetchVendorSubCategories.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(createSubCat.pending, (state) => {
        state.state = "pending";
      })
      .addCase(createSubCat.fulfilled, (state, action) => {
        state.state = "fulfilled";
        if (state.subC) {
          const sub = state.subC as GetVendorSubC[];
          sub.push(action.payload);
        }
      })
      .addCase(createSubCat.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(getFoods.pending, (state) => {
        state.state = "pending";
      })
      .addCase(getFoods.fulfilled, (state, action) => {
        state.state = "fulfilled";
        state.foods = action.payload.products;
        state.foodPagination = action.payload.pagination;
      })
      .addCase(getFoods.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(createFood.pending, (state) => {
        state.state = "pending";
      })
      .addCase(createFood.fulfilled, (state, action) => {
        state.state = "fulfilled";
        if (state.foods) {
          state.foods.push(action.payload);
        }
        state.foodImage = null;
      })
      .addCase(createFood.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(getVendorFoods.pending, (state) => {
        state.state = "pending";
      })
      .addCase(getVendorFoods.fulfilled, (state, action) => {
        state.state = "fulfilled";
        state.vendorFoods = action.payload;
      })
      .addCase(getVendorFoods.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(getFoodsFeeds.pending, (state) => {
        state.state = "pending";
      })
      .addCase(getFoodsFeeds.fulfilled, (state, action) => {
        state.state = "fulfilled";
        state.foodsFeeds = action.payload;
      })
      .addCase(getFoodsFeeds.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(uploadImage.pending, (state) => {
        state.state = "pending";
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.state = "fulfilled";
        if (action.payload.type === "foods") {
          state.foodImage = action.payload;
        }
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(addFeedback.pending, (state) => {
        state.state = "pending";
      })
      .addCase(addFeedback.fulfilled, (state, action) => {
        state.state = "fulfilled";
        if (state.foods) {
          state.foods.forEach((food) => {
            if (
              food.id === action.payload.targetId &&
              action.payload.address === "product"
            ) {
              if (!food.feedbacks) {
                food.feedbacks = [];
              }
              food.feedbacks.push(action.payload);
            }
          });
        }
      })
      .addCase(addFeedback.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message || null;
      });
  },
});

export default FoodSlice.reducer;
