import {
  StateAddressType,
  StateBankInfoType,
} from "../pages/Settings/components/UpdateWrapper/update.validation";

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

export interface EntireCustomerType extends CustomarBasicInfo {
  _id: string;
  password: string;
  bonus: number;
  isAdmin: boolean;
  image: string;
  address: StateAddressType;
  bank: StateBankInfoType;
  wishlist: [];
  feedback: [];
  cart: [];
  order: [];
}

export type AuthState = {
  customer: EntireCustomerType | null;
  _id: string | null;
  currentPassword: boolean | null;
  status: string | null;
  error: string | ErrorWrapper | null;
};
