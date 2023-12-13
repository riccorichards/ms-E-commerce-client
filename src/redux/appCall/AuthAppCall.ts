import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EntireCustomerType } from "../type.slice";
import {
  AddressInputType,
  BankInputType,
  LoginInputType,
  RegisterInputType,
} from "../../pages/Auth/authComponents/Validation";
import {
  StateAddressType,
  StateBankInfoType,
  UpdateBasicCustomerInput,
} from "../../pages/Settings/components/UpdateWrapper/update.validation";

export const fetchRegister = createAsyncThunk<
  string,
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
  EntireCustomerType,
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

export const addAddress = createAsyncThunk<
  string,
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
  string,
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

export const uploadImage = createAsyncThunk<
  string,
  FormData,
  { rejectValue: string }
>("customer/uploadImage", async (formData: FormData, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8007/upload",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
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
});

export const checkCurrentPassword = createAsyncThunk<
  boolean,
  string,
  { rejectValue: string }
>(
  "customer/updateCurrentPassword",
  async (currentPassword: string, { rejectWithValue }) => {
    try {
      console.log({ currentPassword });
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8001/check-current-password",
        data: { currentPassword },
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          "Error while checking current password" + error.message
        );
      }
      return rejectWithValue("UnKnown Error while checking current password");
    }
  }
);

export const findCustomerById = createAsyncThunk<
  EntireCustomerType,
  undefined,
  { rejectValue: string }
>("customer/findCustomerById", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8001/find-user",
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
});

export const updateBasicCustomerInfo = createAsyncThunk<
  EntireCustomerType,
  UpdateBasicCustomerInput,
  { rejectValue: string }
>(
  "customer/updateBasicCustomerInfo",
  async (updateData: UpdateBasicCustomerInput, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "put",
        url: "http://localhost:8001/update-user",
        data: updateData,
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

export const updateAddressInfo = createAsyncThunk<
  StateAddressType,
  StateAddressType,
  { rejectValue: string }
>(
  "customer/updateAddressInfo",
  async (updateData: StateAddressType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "put",
        url: "http://localhost:8001/update-address",
        data: updateData,
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

export const updateBankInfo = createAsyncThunk<
  StateBankInfoType,
  StateBankInfoType,
  { rejectValue: string }
>(
  "customer/updateBankInfo",
  async (updateData: StateBankInfoType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "put",
        url: "http://localhost:8001/update-bank",
        data: updateData,
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
  null,
  undefined,
  { rejectValue: string }
>("customer/logout", async (_: undefined, { rejectWithValue }) => {
  try {
    await axios({
      method: "delete",
      url: "http://localhost:8001/log_out",
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
});
