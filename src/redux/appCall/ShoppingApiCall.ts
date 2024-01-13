import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  CreateShippingInputType,
  DeliverymanInOrderType,
  NearestDeliverymanResponseType,
  OrderListType,
  OrderType,
  SendCartToServerType,
  VendorInOrderType,
} from "../type.slice";
import axios from "axios";

export const sendCartToServer = createAsyncThunk<
  NearestDeliverymanResponseType,
  SendCartToServerType,
  { rejectValue: string | unknown }
>(
  "shopping/sendCartToServer",
  async (cartItems: SendCartToServerType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8003/order",
        data: cartItems,
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

export const cancelOrderingProcess = createAsyncThunk<
  null,
  number,
  { rejectValue: string | unknown }
>(
  "shopping/cancelOrderingProcess",
  async (orderId: number, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "delete",
        url: `http://localhost:8003/cancel-order/${orderId}`,
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

export const createShipping = createAsyncThunk<
  OrderType,
  CreateShippingInputType,
  { rejectValue: string | unknown }
>(
  "shopping/createShipping",
  async (shippingData: CreateShippingInputType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8003/shipping",
        data: shippingData,
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

export const getDeliverymanForOrder = createAsyncThunk<
  DeliverymanInOrderType,
  string,
  { rejectValue: string | unknown }
>(
  "shopping/getDeliverymanForOrder",
  async (personName: string, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8005/deliveryman/${personName}?isCoords=true`,
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

export const getVendorForOrder = createAsyncThunk<
  VendorInOrderType,
  string,
  { rejectValue: string | unknown }
>(
  "shopping/getVendorForOrder",
  async (address: string, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8004/find-vendor-for-order/${address}`,
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

export const getOrderList = createAsyncThunk<
  OrderListType[],
  undefined,
  { rejectValue: string | unknown }
>("shopping/getOrderList", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8003/orders-list",
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

export const findOrderById = createAsyncThunk<
  OrderType,
  number,
  { rejectValue: string | unknown }
>("shopping/findOrderById", async (orderId: number, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8003/order/${orderId}`,
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
