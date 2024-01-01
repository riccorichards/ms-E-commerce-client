import {
  StateAddressType,
  StateBankInfoType,
} from "../components/CustomSettingsPage/components/UpdateWrapper/update.validation";

export type CustomerType = {
  image?: string;
  username?: string;
};

export type ProfileURLType = {
  image: string;
};

export type ErrorWrapper = object;

export interface CustomarBasicInfo {
  username: string;
  email: string;
}

export interface FoodCardType {
  id: number;
  title: string;
  desc: string;
  image: string;
  price: string;
  unit: number;
}

export interface EntireCustomerType extends CustomarBasicInfo {
  _id: string;
  password: string;
  bonus: number;
  isAdmin: boolean;
  image: string;
  address: StateAddressType;
  bank: StateBankInfoType;
  wishlist: ProductType[];
  feedback: FeedbackType[];
  cart: FoodCardType[];
  order: [];
  createdAt: string;
}

export type AuthState = {
  customer: EntireCustomerType | null;
  myFeeds: FeedbackType[] | null;
  _id: string | null;
  currentPassword: boolean | null;
  status: string | null;
  error: string | ErrorWrapper | null;
};

////////////////////////////////////////////////////////////////////
//admin

export interface BasicVendorType {
  name: string;
  ownerName: string;
  about?: string;
  pincode: string;
  phone: string;
  profileImg: string | null;
  email: string;
  password: string;
}

interface AdminErrorWrapper {}

export interface AdminState {
  createdVendor: BasicVendorType | null;
  imageUrl: string | null;
  createdDeliveryman: BasicVendorType | null;
  status: string | null;
  error: AdminErrorWrapper | null;
}

//////////////////////////////////////////////////////////////////
//Vendor

export interface WorkingHrsType {
  workingDays: string;
  weekend: string;
}

export interface VendorAddressType {
  postalCode: string;
  street: string;
  city: string;
  country: string;
}

interface VendorFeedsType {
  author: string;
  profileImg?: string;
  to: string;
  forVendor: string;
  review: string;
  rating: number;
  feedId: number;
}

export interface VendorTeamMembersType {
  _id?: string;
  name: string;
  description: string;
  image: string;
  position: string;
}

export interface SocUrlType {
  title: string;
  url: string;
}

export interface GalleryType {
  url: string;
  title: string;
  _id: string;
  createdAt: string;
}

export interface RemovePhotoFromGallery {
  title: string;
  msg: string;
}

export interface VendorType {
  name: string;
  ownerName: string;
  about: string;
  pincode: string;
  phone: string;
  image: string;
  email: string;
  foods: ProductType[];
  rating: number;
  workingHrs: WorkingHrsType;
  address: VendorAddressType;
  feeds: VendorFeedsType[];
  teamMember: VendorTeamMembersType[];
  gallery: GalleryType[];
  socialMedia: SocUrlType[];
}

export interface VendorListType {
  _id: string;
  name: string;
  phone: string;
  image: string;
  email: string;
  rating: number;
  workingHrs: WorkingHrsType;
  address: VendorAddressType;
  socialUrls: SocUrlType[];
}

interface VendorErrorWrapper {}

export interface VendorState {
  vendor: VendorType | null;
  vendorList: VendorListType[] | null;
  specVendor: VendorType | null;
  imageUrl: string | null;
  status: string | null;
  error: VendorErrorWrapper | null;
}

////////////////////////////////////////////////////////////////////
//food

export interface MainCType {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export interface ProductType {
  id: number;
  title: string;
  image: string;
  vendor_name: string;
  address: string;
  vendor_rating: number;
  discount: number;
  price: string;
  desc: string;
  feedbacks: FeedbackType[];
}

export interface GetFilteredSubC {
  id: number;
  title: string;
  desc: string;
  Products: ProductType[];
}

export interface GetVendorSubC {
  id: number;
  title: string;
  desc: string;
}

export interface WishlistToggleType {
  productId: number;
  userId: string;
}

export interface CartInputType {
  productId: number;
  userId: string | undefined;
  unit: number;
}

export interface FeedbackType {
  id: number;
  userId: string;
  author: string;
  authorImg: string;
  targetId: number;
  forVendorId?: string;
  targetImg: string;
  targetTitle: string;
  address: string;
  review: string;
  vendorRating?: number;
  createdAt: string;
  feedId: number;
}

export interface NewFeedbackInputType {
  userId: string;
  author: string;
  authorImg: string;
  targetId?: number;
  targetTitle: string;
  forVendorId?: string;
  targetImg: string;
  address: string;
  review: string;
  vendorRating?: number;
}

export interface FoodState {
  mainC: MainCType[] | null;
  foodImageUrl: string | null;
  subC: GetFilteredSubC[] | GetVendorSubC[] | null;
  foods: ProductType[] | null;
  vendorFoods: ProductType[] | null;
  state: string | null;
  error: string | null;
}
