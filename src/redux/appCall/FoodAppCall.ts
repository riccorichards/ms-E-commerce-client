import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CartInputType,
  CreateFoodInputType,
  FeedbackType,
  FoodCardType,
  GetFilteredSubC,
  GetVendorSubC,
  MainCType,
  NewFeedbackInputType,
  ProductType,
  WishlistToggleType,
} from "../type.slice";

export const fetchMainCategories = createAsyncThunk<
  MainCType[],
  undefined,
  { rejectValue: string | unknown }
>("food/fetchMainCategories", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8002/main-cat",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error);
  }
});

export const fetchMainCategorysSubCat = createAsyncThunk<
  GetFilteredSubC[],
  number,
  { rejectValue: string | unknown }
>("food/fetchMainCategorysSubCat", async (id: number, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8002/main-subcat/${id}`,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error);
  }
});

interface SeachOptionType {
  id: number;
  title: string;
}

export const searchFoodInSubCat = createAsyncThunk<
  GetFilteredSubC,
  SeachOptionType,
  { rejectValue: string | unknown }
>(
  "food/searchFoodInSubCat",
  async (option: SeachOptionType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8002/main-subcat/${option.id}?title=${option.title}`,
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error);
    }
  }
);

export const fetchSubCategories = createAsyncThunk<
  GetFilteredSubC[],
  undefined,
  { rejectValue: string | unknown }
>("food/fetchSubCategories", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8002/sub-cat",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error);
  }
});

export const fetchVendorSubCategories = createAsyncThunk<
  GetVendorSubC[],
  undefined,
  { rejectValue: string | unknown }
>(
  "food/fetchVendorSubCategories",
  async (_: undefined, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:8002/vendor-sub-cat",
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error);
    }
  }
);

export const createSubCat = createAsyncThunk<
  GetVendorSubC,
  { title: string; description: string; mainCatId: number },
  { rejectValue: string | unknown }
>(
  "food/createSubCat",
  async (
    subCatData: { title: string; description: string; mainCatId: number },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8002/sub-cat",
        data: subCatData,
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error);
    }
  }
);

export const createFood = createAsyncThunk<
  ProductType,
  CreateFoodInputType,
  { rejectValue: string | unknown }
>("food/createFood", async (food: CreateFoodInputType, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8002/product",
      data: food,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error);
  }
});

export const getFoods = createAsyncThunk<
  ProductType[],
  undefined,
  { rejectValue: string | unknown }
>("food/getPopularFoods", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8002/product",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error);
  }
});

export const getVendorFoods = createAsyncThunk<
  ProductType[],
  string,
  { rejectValue: string | unknown }
>("food/getVendorFoods", async (vendorName: string, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8002/vendor-products/${vendorName}`,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error);
  }
});

export const wishlistToggle = createAsyncThunk<
  ProductType,
  WishlistToggleType,
  { rejectValue: string | unknown }
>(
  "food/wishlistToggle",
  async ({ productId, userId }: WishlistToggleType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8002/add-product-to-wishlist",
        data: { productId, userId },
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error);
    }
  }
);

export const foodToCart = createAsyncThunk<
  FoodCardType,
  CartInputType,
  { rejectValue: string | unknown }
>(
  "food/addFoodToCart",
  async ({ productId, userId, unit }: CartInputType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8002/add-product-to-cart",
        data: { productId, userId, unit },
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error);
    }
  }
);

export const addFeedToFood = createAsyncThunk<
  FeedbackType,
  NewFeedbackInputType,
  { rejectValue: string | unknown }
>(
  "food/addFeedToFood",
  async (newFeedback: NewFeedbackInputType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8006/feedback",
        data: newFeedback,
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error);
    }
  }
);

export const deleteFeed = createAsyncThunk<
  FeedbackType,
  number,
  { rejectValue: string | unknown }
>("food/updateFeed", async (feedId: number, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "delete",
      url: `http://localhost:8006/feedback/${feedId}`,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error);
  }
});

export const getFeedsOfFood = createAsyncThunk<
  FeedbackType[],
  undefined,
  { rejectValue: string | unknown }
>("food/addFeedToFood", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8002/product/1",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error);
  }
});
