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
  feedback: [];
  cart: FoodCardType[];
  order: [];
}

export type AuthState = {
  customer: EntireCustomerType | null;
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

interface WorkingHrsType {
  workingDays: string;
  weekend: string;
}

interface VendorAddressType {
  postalCode: string;
  street: string;
  city: string;
  country: string;
  lat?: string;
  lng?: string;
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



export interface VendorType {
  name: string;
  ownerName: string;
  about: string;
  pincode: string;
  phone: string;
  profileImg: string;
  email: string;
  rating: number;
  workingHrs: WorkingHrsType;
  address: VendorAddressType;
  feeds: VendorFeedsType[];
  teamMember: VendorTeamMembersType[];
  gallery: string[];
  socialMedia: { title: string; url: string }[];
}

interface VendorErrorWrapper {}

export interface VendorState {
  vendor: VendorType | null;
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
  discount: number;
  price: string;
  desc: string;
}

export interface GetFilteredSubC {
  id: number;
  title: string;
  desc: string;
  Products: ProductType[];
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
export interface FoodState {
  mainC: MainCType[] | null;
  subC: GetFilteredSubC[] | null;
  popularF: ProductType[] | null;
  state: string | null;
  error: string | null;
}
