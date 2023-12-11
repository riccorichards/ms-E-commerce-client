import { createContext } from "react";

interface AuthContextType {
  isValidCustomer: boolean;
  setIsValidCustomer: (value: boolean) => void;
}
const AuthContent = createContext<AuthContextType | null>(null);

export default AuthContent;
