import { createSlice } from "@reduxjs/toolkit";
import { FoodState } from "../type.slice";
import {
  fetchMainCategories,
  fetchMainCategorysSubCat,
  fetchSubCategories,
} from "../appCall/FoodAppCall";

const initialState: FoodState = {
  mainC: null,
  //filteredSubC: null,
  subC: null,
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
      });
  },
});

export default FoodSlice.reducer;
