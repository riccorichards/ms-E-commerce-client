import { createContext } from "react";

export interface InitialRequstType {
  orderId: number | null;
  orderDate: string | null;
  customerId: string | null;
  deliverymanName: string | null;
}

interface VendorOrderContextType {
  newRequest: InitialRequstType;
  setNewRequest: (val: InitialRequstType) => void;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const VendorOrderContext = createContext<VendorOrderContextType | null>(null);

export default VendorOrderContext;
