import { CartItemsType } from "../redux/type.slice";

class Utils {
  static addressWrapper(orderItem: CartItemsType[]): string[] {
    const uniAddresses = new Set<string>();
    orderItem.forEach((item) => uniAddresses.add(item.product_address));
    const addresses: string[] = Array.from(uniAddresses);
    return addresses;
  }

  static capitalized(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static dateFormatter(str: string): { date: string; time: string } {
    const [date, timeWithMs] = str.split("T");
    let time;
    if (timeWithMs) {
      time = timeWithMs.split(".")[0];
    }
    return { date, time: time || "" };
  }
}

export default Utils;
