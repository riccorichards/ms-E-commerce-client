import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  DeliveryLoginType,
  DeliverymanType,
  GetDeliveryMan,
} from "../type.slice";

export const loginDeliveryman = createAsyncThunk<
  GetDeliveryMan,
  DeliveryLoginType,
  { rejectValue: string | unknown }
>(
  "deliveryman/loginDeliveryman",
  async (deliveryman: DeliveryLoginType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8005/login",
        data: deliveryman,
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

export const getDeliveryman = createAsyncThunk<
  DeliverymanType,
  undefined,
  { rejectValue: string | unknown }
>("deliveryman/getDeliveryman", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8005/deliveryman",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Erro with creating process of vendor" + error.message
      );
    }
    return rejectWithValue("Unknown Error ===> while creating vendor" + error);
  }
});

export const deliverymanlogOut = createAsyncThunk<
  null,
  undefined,
  { rejectValue: string }
>(
  "deliveryman/deliverymanlogOut",
  async (_: undefined, { rejectWithValue }) => {
    try {
      await axios({
        method: "delete",
        url: "http://localhost:8005/log_out",
        withCredentials: true,
      });
      return null;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          "Error while adding an user bank info" + error.message
        );
      }
      return rejectWithValue("Error while adding an user bank info");
    }
  }
);
