import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { VendorType } from "../type.slice";

export const vendorLogin = createAsyncThunk<
  VendorType,
  { email: string; password: string },
  { rejectValue: string }
>(
  "vendor/vendorLogin",
  async (
    loginData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8004/login",
        data: loginData,
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error + "<============ Unknown Error!!!");
    }
  }
);

export const fetchVendor = createAsyncThunk<
  VendorType,
  undefined,
  { rejectValue: string }
>("vendor/fetchVendor", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8004/find-vendor",
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error + "<============ Unknown Error!!!");
  }
});

export const uploadMemberImage = createAsyncThunk<
  string,
  FormData,
  { rejectValue: string | unknown }
>(
  "vendor/uploadMemberImage",
  async (memberImage: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8007/upload",
        headers: { "Content-Type": "multipart/form-data" },
        data: memberImage,
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

export const vendorLogOut = createAsyncThunk<
  null,
  undefined,
  { rejectValue: string }
>("vendor/vendorLogOut", async (_: undefined, { rejectWithValue }) => {
  try {
    await axios({
      method: "delete",
      url: "http://localhost:8004/log_out",
      withCredentials: true,
    });
    return null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error + "<============ Unknown Error!!!");
  }
});
