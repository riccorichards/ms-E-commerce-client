import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CartItemsType,
  DashboardDataInput,
  FeedbackType,
  GalleryType,
  GetvendorData,
  OrderCustomerInfo,
  OrderDeliverymanInfo,
  RemovePhotoFromGallery,
  SocUrlType,
  TargetDashboardData,
  VendorAddressType,
  VendorCoordsType,
  VendorFeedResponseType,
  VendorListType,
  VendorOrdersWrapper,
  VendorTeamMembersType,
  VendorTopCustomers,
  VendorType,
  WorkingHrsType,
} from "../type.slice";
import { workingHrsSchemaType } from "../../components/CustomSettingsPage/components/VendorUpdateProfile/components/UpdateProfileSide/UpdateVendorInfo/UpdateWorkHrsAndImage/timeValidation";
import { AddVendorAddressSchemaType } from "../../components/CustomSettingsPage/components/VendorUpdateProfile/components/UpdateProfileSide/AddVendorAddress/vendorAddressValidation";
import { SocUrlValidatorSchemaType } from "../../components/CustomSettingsPage/components/VendorUpdateProfile/components/UpdateProfileSide/VendorSocialUrl/socUrlValidator";
import { updateVendorFormType } from "../../components/CustomSettingsPage/components/VendorUpdateProfile/components/UpdateProfileSide/UpdateVendorInfo/UpdateVendorForm/updateVendorFormschema";

export const vendorLogin = createAsyncThunk<
  GetvendorData,
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
  GetvendorData,
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

export const getAllVendors = createAsyncThunk<
  VendorListType[],
  undefined,
  { rejectValue: string }
>("vendor/getAllVendors", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8004/vendor",
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

export const getSpecVendor = createAsyncThunk<
  VendorType,
  string,
  { rejectValue: string }
>("vendor/getSpecVendor", async (id: string, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8004/find-vendor/${id}`,
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

export const getSpecVendorsFeeds = createAsyncThunk<
  VendorFeedResponseType,
  { vendorId: string; page: number },
  { rejectValue: string }
>(
  "vendor/getSpecVendorsFeeds",
  async (query: { vendorId: string; page: number }, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8004/vendor-feedbacks/${query.vendorId}?page=${query.page}`,
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

export const getVendorFeeds = createAsyncThunk<
  FeedbackType[],
  number,
  { rejectValue: string | unknown }
>("food/getVendorFeeds", async (amount: number, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8004/vendor-feeds?amount=${amount}`,
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

export const getVendorDashboardData = createAsyncThunk<
  TargetDashboardData[],
  DashboardDataInput,
  { rejectValue: string | unknown }
>(
  "food/getVendorDashboardData",
  async (specRequest: DashboardDataInput, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8004/vendor-dashboard?field=${specRequest.field}&time=${specRequest.time}`,
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

export const addNewMember = createAsyncThunk<
  VendorTeamMembersType,
  VendorTeamMembersType,
  { rejectValue: string | unknown }
>(
  "vendor/addNewMember",
  async (newMember: VendorTeamMembersType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8004/vendor-team",
        data: newMember,
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

export const removeMember = createAsyncThunk<
  VendorTeamMembersType,
  string | undefined,
  { rejectValue: string | unknown }
>(
  "vendor/removeMember",
  async (memberId: string | undefined, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "delete",
        url: `http://localhost:8004/vendor-team/${memberId}`,
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

export const updateVendorProfileInfo = createAsyncThunk<
  VendorType,
  updateVendorFormType,
  { rejectValue: string | unknown }
>(
  "vendor/updateVendorProfileInfo",
  async (updatedData: updateVendorFormType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "put",
        url: "http://localhost:8004/update-vendor",
        data: updatedData,
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

export const addWorkingHrs = createAsyncThunk<
  WorkingHrsType,
  workingHrsSchemaType,
  { rejectValue: string | unknown }
>(
  "vendor/addWorkingHrs",
  async (workData: workingHrsSchemaType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8004/working-hrs",
        data: workData,
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

export const addVendorAddress = createAsyncThunk<
  VendorAddressType,
  AddVendorAddressSchemaType,
  { rejectValue: string | unknown }
>(
  "vendor/addVendorAddress",
  async (address: AddVendorAddressSchemaType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8004/address",
        data: address,
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

export const addBioInfo = createAsyncThunk<
  string,
  { bio: string },
  { rejectValue: string | unknown }
>(
  "vendor/addBioInfo",
  async (bioData: { bio: string }, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8004/vendor-bio",
        data: bioData,
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

export const addSocUrl = createAsyncThunk<
  SocUrlType,
  SocUrlValidatorSchemaType,
  { rejectValue: string | unknown }
>(
  "vendor/addSocUrl",
  async (url: SocUrlValidatorSchemaType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8004/social-url",
        data: url,
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

export const removeSocUrl = createAsyncThunk<
  SocUrlType[],
  string,
  { rejectValue: string | unknown }
>("vendor/removeSocUrl", async (title: string, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "delete",
      url: `http://localhost:8004/social-url/${title}`,
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

export const uploadGalleryImg = createAsyncThunk<
  string,
  FormData,
  { rejectValue: string | unknown }
>("vendor/uploadGalleryImg", async (img: FormData, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8007/upload",
      withCredentials: true,
      data: img,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(error);
  }
});

export const removeGalleryImg = createAsyncThunk<
  RemovePhotoFromGallery,
  string,
  { rejectValue: string | unknown }
>("vendor/removeGalleryImg", async (title: string, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "put",
      url: "http://localhost:8007/del-photo",
      data: { title },
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

export const getVendorGallery = createAsyncThunk<
  GalleryType[],
  undefined,
  { rejectValue: string | unknown }
>("vendor/getVendorGallery", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8004/vendor-gallery",
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

export const refreshAccessToken = createAsyncThunk<
  { ttl: number },
  string,
  { rejectValue: string | unknown }
>("vendor/refreshAccessToken", async (port: string, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `http://localhost:${port}/refresh-token`,
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

export const getVendorCoords = createAsyncThunk<
  VendorCoordsType,
  string,
  { rejectValue: string | unknown }
>(
  "vendor/getVendorCoords",
  async (vendorAddress: string, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8007/coords/${vendorAddress}`,
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

export const getVendorOrders = createAsyncThunk<
  VendorOrdersWrapper[],
  boolean,
  { rejectValue: string | unknown }
>(
  "vendor/getVendorOrders",
  async (withCustomerInfo: boolean, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8004/vendor-orders?withCustomerInfo=${withCustomerInfo}`,
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

export const getTopCustomers = createAsyncThunk<
  VendorTopCustomers[],
  undefined,
  { rejectValue: string | unknown }
>("vendor/getTopCustomers", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8004/vendor-top-customers",
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

export const getVendorOrderItemsById = createAsyncThunk<
  CartItemsType[],
  number,
  { rejectValue: string | unknown }
>(
  "vendor/getVendorOrderItemsById",
  async (orderId: number, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8004/vendor-order-items/${orderId}`,
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

export const getCustomerForVendorOrder = createAsyncThunk<
  OrderCustomerInfo,
  string,
  { rejectValue: string | unknown }
>(
  "vendor/getCustomerForVendorOrder",
  async (customerId: string, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8001/order-customer-info/${customerId}`,
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

export const getDeliverymanForVendorOrder = createAsyncThunk<
  OrderDeliverymanInfo,
  string,
  { rejectValue: string | unknown }
>(
  "vendor/getDeliverymanForVendorOrder",
  async (deliverymanName: string, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8005/deliveryman/${deliverymanName}?isCoords=false`,
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
