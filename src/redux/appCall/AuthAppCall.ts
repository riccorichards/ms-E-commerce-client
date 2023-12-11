import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CookiesType, CustomerId, VerifyUser } from "../type.slice";
import {
  AddressInputType,
  BankInputType,
  LoginInputType,
  RegisterInputType,
} from "../../pages/Auth/authComponents/Validation";

export const fetchRegister = createAsyncThunk<
  CookiesType,
  RegisterInputType,
  { rejectValue: string }
>(
  "customer/fetchRegister",
  async (user: RegisterInputType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8001/register",
        data: user,
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue("Error while Sign up" + error.message);
      }
      return rejectWithValue("Error while Sign up");
    }
  }
);

export const fetchLogin = createAsyncThunk<
  CookiesType,
  LoginInputType,
  { rejectValue: string }
>("customer/fetchLogin", async (user: LoginInputType, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8001/login",
      data: user,
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Error while create a new session" + error.message
      );
    }
    return rejectWithValue("Error while create a new session");
  }
});

export const fingUserById = createAsyncThunk<VerifyUser, string>(
  "customer/verifyValideUser",
  async (userId: string, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8001/check-valide-session/${userId}`,
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          "Error while fetching the user's access token" + error.message
        );
      }
      return rejectWithValue("Error while fetching the user's access token");
    }
  }
);

export const addAddress = createAsyncThunk<
  CustomerId,
  AddressInputType,
  { rejectValue: string }
>(
  "customer/addAddress",
  async (address: AddressInputType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8001/address",
        data: address,
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          "Error while adding an user address" + error.message
        );
      }
      return rejectWithValue("Error while adding an user address");
    }
  }
);

export const addBankInfo = createAsyncThunk<
  CustomerId,
  BankInputType,
  { rejectValue: string }
>(
  "customer/addBankInfo",
  async (bankInfo: BankInputType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8001/bank-acc",
        data: bankInfo,
        withCredentials: true,
      });
      return data;
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

export const logOut = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string }
>("customer/addBankInfo", async (_: undefined, { rejectWithValue }) => {
  try {
    await axios({
      method: "delete",
      url: "http://localhost:8001/log_out",
      withCredentials: true,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        "Error while adding an user bank info" + error.message
      );
    }
    return rejectWithValue("Error while adding an user bank info");
  }
});
