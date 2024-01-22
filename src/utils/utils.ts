import { CartItemsType } from "../redux/type.slice";

export function addressWrapper(orderItem: CartItemsType[]) {
  const uniAddresses = new Set<string>();
  orderItem.forEach((item) => uniAddresses.add(item.product_address));
  const addresses: string[] = Array.from(uniAddresses);
  return addresses;
}

export function capitalized(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
