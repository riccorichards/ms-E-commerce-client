import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BasicDeliverymanType, BasicVendorType } from "../type.slice";

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
