import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  BasicDeliverymanType,
  BasicVendorType,
  EmployeeResponseType,
  OrderCustomerInfo,
  OrderType,
  PopularFoodsType,
  TotalOrdersDataType,
  WeeklyTopVendors,
} from "../type.slice";

export const createVendor = createAsyncThunk<
  BasicVendorType,
  BasicVendorType,
  { rejectValue: string | unknown }
>(
  "admin/createVendor",
  async (creationData: BasicVendorType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8004/register",
        data: creationData,
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          "Erro with creating process of vendor" + error.message
        );
      }
      return rejectWithValue(
        "Unknown Error ===> while creating vendor" + error
      );
    }
  }
);

export const createDeliveryman = createAsyncThunk<
  BasicDeliverymanType,
  BasicDeliverymanType,
  { rejectValue: string | unknown }
>(
  "admin/createDeliveryman",
  async (creationData: BasicDeliverymanType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8005/signup",
        data: creationData,
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          "Erro with creating process of vendor" + error.message
        );
      }
      return rejectWithValue(
        "Unknown Error ===> while creating vendor" + error
      );
    }
  }
);

export const uploadVendorImage = createAsyncThunk<
  string,
  FormData,
  { rejectValue: string | unknown }
>("admin/uploadVendorImage", async (image: FormData, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8007/upload",
      headers: { "Content-Type": "multipart/form-data" },
      data: image,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue(
      "Unknown Error ===> while upload vendor's image" + error
    );
  }
});

export const getTotalOrdersData = createAsyncThunk<
  TotalOrdersDataType,
  undefined,
  { rejectValue: string | unknown }
>("admin/getLenghtOfOrders", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8003/orders-data",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue(
      "Unknown Error ===> while upload vendor's image" + error
    );
  }
});

export const getLenghtOfFoods = createAsyncThunk<
  number,
  undefined,
  { rejectValue: string | unknown }
>("admin/getLenghtOfFoods", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8002/foods-length",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue(
      "Unknown Error ===> while upload vendor's image" + error
    );
  }
});

export const getLenghtOfCustomers = createAsyncThunk<
  number,
  undefined,
  { rejectValue: string | unknown }
>("admin/getLenghtOfCustomers", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8001/customers-length",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue(
      "Unknown Error ===> while upload vendor's image" + error
    );
  }
});

export const getLenghtOfFeedbacks = createAsyncThunk<
  number,
  undefined,
  { rejectValue: string | unknown }
>("admin/getLenghtOfFeedbacks", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8006/feedbacks-length",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue(
      "Unknown Error ===> while upload vendor's image" + error
    );
  }
});

export const getTopVendors = createAsyncThunk<
  WeeklyTopVendors,
  undefined,
  { rejectValue: string | unknown }
>("admin/getTopVendors", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8004/top-vendors",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue(
      "Unknown Error ===> while upload vendor's image" + error
    );
  }
});

export const getPopularFoods = createAsyncThunk<
  PopularFoodsType,
  undefined,
  { rejectValue: string | unknown }
>("admin/getPopularFoods", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8003/popular-foods",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue(
      "Unknown Error ===> while upload vendor's image" + error
    );
  }
});

export const getTopCustomers = createAsyncThunk<
  OrderCustomerInfo[],
  undefined,
  { rejectValue: string | unknown }
>("admin/getTopCustomers", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8003/top-customers",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue(
      "Unknown Error ===> while upload vendor's image" + error
    );
  }
});

export const getEmployees = createAsyncThunk<
  EmployeeResponseType,
  number,
  { rejectValue: string | unknown }
>("admin/getEmployees", async (page: number, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8005/all-deliveryman?page=${page}`,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue(
      "Unknown Error ===> while upload vendor's image" + error
    );
  }
});

export const getAllOrders = createAsyncThunk<
  OrderType[],
  undefined,
  { rejectValue: string | unknown }
>("admin/getAllOrders", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8003/orders",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue(
      "Unknown Error ===> while upload vendor's image" + error
    );
  }
});
