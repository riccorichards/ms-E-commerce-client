import { createSlice } from "@reduxjs/toolkit";
import { VendorState } from "../type.slice";
import {
  addBioInfo,
  addNewMember,
  addSocUrl,
  addVendorAddress,
  addWorkingHrs,
  fetchVendor,
  getAllVendors,
  getCustomerForVendorOrder,
  getDeliverymanForVendorOrder,
  getSpecVendor,
  getTopCustomers,
  getVendorCoords,
  getVendorDashboardData,
  getVendorGallery,
  getVendorOrderItemsById,
  getVendorOrders,
  getVendorSpecData,
  refreshAccessToken,
  removeGalleryImg,
  removeMember,
  updateVendorProfileInfo,
  uploadGalleryImg,
  uploadMemberImage,
  vendorLogOut,
  vendorLogin,
} from "../appCall/VendorAppCall";
import { deleteFeedback, uploadImage } from "../appCall/AuthAppCall";
import { removeSocUrl } from "./../appCall/VendorAppCall";

const initialState: VendorState = {
  vendor: null,
  vendorList: null,
  specVendor: null,
  vendorFeeds: null,
  imageUrl: null,
  dashboard: null,
  coords: null,
  orderCustomerInfo: null,
  vendorOrders: null,
  vendorOrderItems: null,
  topCustomers: null,
  orderDeliverymanInfo: null,
  ttl: null,
  status: null,
  error: null,
};

const VendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(vendorLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(vendorLogin.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendor = action.payload.vendor;
        state.ttl = action.payload.ttl;
      })
      .addCase(vendorLogin.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(fetchVendor.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchVendor.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendor = action.payload.vendor;
        state.ttl = action.payload.ttl;
      })
      .addCase(fetchVendor.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getAllVendors.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendorList = action.payload;
      })
      .addCase(getAllVendors.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getSpecVendor.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getSpecVendor.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.specVendor = action.payload;
      })
      .addCase(getSpecVendor.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(uploadMemberImage.pending, (state) => {
        state.status = "pending";
      })
      .addCase(uploadMemberImage.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.imageUrl = action.payload;
      })
      .addCase(uploadMemberImage.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(addNewMember.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addNewMember.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendor?.teamMember.push(action.payload);
        state.imageUrl = null;
      })
      .addCase(addNewMember.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(removeMember.pending, (state) => {
        state.status = "pending";
      })
      .addCase(removeMember.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendor) {
          state.vendor.teamMember = state.vendor.teamMember.filter(
            (member) =>
              member._id?.toString() !== action.payload._id?.toString()
          );
        }
      })
      .addCase(removeMember.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(uploadImage.pending, (state) => {
        state.status = "pending";
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendor) {
          state.vendor.image = action.payload;
          state.imageUrl = action.payload;
        }
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(updateVendorProfileInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateVendorProfileInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendor = action.payload;
      })
      .addCase(updateVendorProfileInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(addWorkingHrs.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addWorkingHrs.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendor) {
          state.vendor.workingHrs = action.payload;
        }
      })
      .addCase(addWorkingHrs.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(addBioInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addBioInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendor) {
          state.vendor.about = action.payload;
        }
      })
      .addCase(addBioInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(addVendorAddress.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addVendorAddress.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendor) {
          state.vendor.address = action.payload.street;
        }
      })
      .addCase(addVendorAddress.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(vendorLogOut.pending, (state) => {
        state.status = "pending";
      })
      .addCase(vendorLogOut.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendor = action.payload;
      })
      .addCase(vendorLogOut.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(addSocUrl.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addSocUrl.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendor) {
          state.vendor.socialMedia.push(action.payload);
        }
      })
      .addCase(addSocUrl.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(uploadGalleryImg.pending, (state) => {
        state.status = "pending";
      })
      .addCase(uploadGalleryImg.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.imageUrl = action.payload;
      })
      .addCase(uploadGalleryImg.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(removeGalleryImg.pending, (state) => {
        state.status = "pending";
      })
      .addCase(removeGalleryImg.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendor) {
          state.vendor.gallery = state.vendor.gallery.filter(
            (img) => img.title !== action.payload.title
          );
        }
      })
      .addCase(removeGalleryImg.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(removeSocUrl.pending, (state) => {
        state.status = "pending";
      })
      .addCase(removeSocUrl.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendor) {
          state.vendor.socialMedia = action.payload;
        }
      })
      .addCase(removeSocUrl.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getVendorGallery.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getVendorGallery.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendor) {
          state.vendor.gallery = action.payload;
          state.imageUrl = null;
        }
      })
      .addCase(getVendorGallery.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getVendorSpecData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getVendorSpecData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendorFeeds = action.payload;
      })
      .addCase(getVendorSpecData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(deleteFeedback.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (state.vendorFeeds) {
          state.vendorFeeds = state.vendorFeeds.filter(
            (feed) => feed.feedId !== action.payload.id
          );
        }
      })
      .addCase(deleteFeedback.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getVendorDashboardData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getVendorDashboardData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.dashboard = action.payload;
      })
      .addCase(getVendorDashboardData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getVendorCoords.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getVendorCoords.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.coords = action.payload;
      })
      .addCase(getVendorCoords.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getVendorOrders.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getVendorOrders.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendorOrders = action.payload;
      })
      .addCase(getVendorOrders.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getCustomerForVendorOrder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCustomerForVendorOrder.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.orderCustomerInfo = action.payload;
      })
      .addCase(getCustomerForVendorOrder.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getDeliverymanForVendorOrder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getDeliverymanForVendorOrder.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.orderDeliverymanInfo = action.payload;
      })
      .addCase(getDeliverymanForVendorOrder.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getTopCustomers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getTopCustomers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.topCustomers = action.payload;
      })
      .addCase(getTopCustomers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(getVendorOrderItemsById.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getVendorOrderItemsById.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.vendorOrderItems = action.payload;
      })
      .addCase(getVendorOrderItemsById.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.status = "pending";
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.ttl = action.payload.ttl;
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || null;
      });
  },
});

export default VendorSlice.reducer;
