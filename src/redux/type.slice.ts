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
  address: string;
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
  createdAt: string;
}

export interface GetCustomer {
  customer: EntireCustomerType;
  ttl: number;
}

export interface CustomerCoordsType {
  latitude: number;
  longitude: number;
}

export type AuthState = {
  customer: EntireCustomerType | null;
  myFeeds: FeedbackType[] | null;
  ttl: number | null;
  coords: CustomerCoordsType | null;
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

export interface BasicDeliverymanType {
  name: string;
  email: string;
  password?: string;
  image: string;
  currentAddress: string;
}

interface AdminErrorWrapper {}

export interface AdminState {
  createdVendor: BasicVendorType | null;
  imageUrl: string | null;
  createdDeliveryman: BasicDeliverymanType | null;
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
  _id: string;
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
  address: string;
  feeds: FeedbackType[];
  teamMember: VendorTeamMembersType[];
  gallery: GalleryType[];
  socialMedia: SocUrlType[];
  createdAt: string;
}

export interface GetvendorData {
  vendor: VendorType;
  ttl: number;
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

export interface VendorCoordsType {
  latitude: number;
  longitude: number;
}

export interface VendorOrdersWrapper {
  order_status: string;
  total_amount: number;
  deliverymanName: string;
  customerId: string;
  orderId: number;
  createdAt: string;
}

export interface OrderCustomerInfo {
  image: string;
  username: string;
  email: string;
  address: string;
}

export interface OrderDeliverymanInfo {
  image: string;
  name: string;
  email: string;
  currentAddress: string;
}

export interface VendorState {
  vendor: VendorType | null;
  vendorList: VendorListType[] | null;
  specVendor: VendorType | null;
  vendorFeeds: FeedbackType[] | null;
  ttl: number | null;
  coords: VendorCoordsType | null;
  orderCustomerInfo: OrderCustomerInfo | null;
  vendorOrders: VendorOrdersWrapper[] | null;
  vendorOrderItems: CartItemsType[] | null;
  orderDeliverymanInfo: OrderDeliverymanInfo | null;
  dashboard: TargetDashboardData[] | null;
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
  foodId: number;
  title: string;
  image: string;
  vendor_name: string;
  address: string;
  vendor_rating: number;
  discount: number;
  price: string;
  desc: string;
  subCatId: number;
  feedbacks: FeedbackType[];
}

export interface CreateFoodInputType {
  title: string;
  image: string;
  vendor_name: string;
  address: string;
  vendor_rating: number;
  discount: string;
  price: string;
  desc: string;
  subCatId: number;
}

export interface GetFilteredSubC {
  id: number;
  title: string;
  desc: string;
  mainCatId: number;
  Products: ProductType[];
}

export interface GetVendorSubC {
  id: number;
  title: string;
  desc: string;
  mainCatId: number;
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

export interface DashboardDataInput {
  field: string;
  time: string;
}

export interface TargetDashboardData {
  date: string;
  value: number;
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

////////////////////////////////////////////////
// Deliveryman

export interface DeliveryLoginType {
  email: string;
  password: string;
}

export interface DeliverymanType {
  id: number;
  name: string;
  email: string;
  image: string;
  createdAt: string;
}

export interface GetDeliveryMan {
  deliveryman: DeliverymanType;
  ttl: number;
}

export interface DeliverymanState {
  deliveyman: DeliverymanType | null;
  ttl: number | null;
  status: string | null;
  error: string | null;
}

//////////////////////////////////////////
//Shoppijng

export interface NearestDeliverymanType {
  lat: number;
  lng: number;
  name: string;
  image: string;
}

export interface NearestDeliverymanResponseType {
  nearestPersons: NearestDeliverymanType[];
  orderId: number;
}

export interface CartItemsType {
  productId: number;
  product_name: string;
  product_address: string;
  product_price: string;
  product_image: string;
  qty: number;
}

export interface CreateShippingInputType {
  username: string;
  email: string;
  orderId: number;
  personName: string;
  address: string;
  payment_method: string;
  debit_card: string;
  note: string;
}

export interface OrderType {
  id: number;
  order_status: string;
  total_amount: number;
  deliverymanName: string;
  customerId: string;
  createdAt: string;
  note: string;
  orderItem: CartItemsType[];
}

export interface DeliverymanInOrderType {
  name: string;
  image: string;
  createdAt: string;
  email: string;
  currentAddress: string;
  latitude: number;
  longitude: number;
}

export interface VendorInOrderType {
  name: string;
  image: string;
  rating: number;
  email: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
}

export interface SendCartToServerType {
  total_amount: number;
  customerId: string;
  cartItems: CartItemsType[];
}

export interface OrderListType {
  orderId: number;
  total_amount: number;
  createdAt: string;
}

export interface ShoppingStateType {
  nearestDeliveryman: NearestDeliverymanType[] | null;
  orderId: number | null;
  order: OrderType | null;
  deliverymanForOrder: DeliverymanInOrderType | null;
  vendorForOrder: VendorInOrderType[];
  ordersList: OrderListType[];
  status: string | null;
  error: string | null;
}
