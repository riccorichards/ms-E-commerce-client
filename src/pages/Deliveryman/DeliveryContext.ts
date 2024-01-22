import { createContext } from "react";

interface InitialContentType {
  isMoreDetails: boolean;
  setIsMoreDetails: (v: boolean) => void;
  deliveryOrderId: number | null;
  setDeliveryOrderId: (v: number | null) => void;
  options: string;
  setOptions: (v: string) => void;
}

const DeliveryContext = createContext<InitialContentType | null>(null);

export default DeliveryContext;
