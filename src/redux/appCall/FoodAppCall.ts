import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CartInputType,
  FoodCardType,
  GetFilteredSubC,
  MainCType,
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

export const getPopularFoods = createAsyncThunk<
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

