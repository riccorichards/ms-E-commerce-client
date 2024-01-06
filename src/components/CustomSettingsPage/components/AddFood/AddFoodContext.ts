import { createContext } from "react";

type AddFoodContextType = {
  getMainCId: number | null;
  setGetMainCId: (val: number | null) => void;
  getSubCId: number | null;
  setGetSubCId: (val: number | null) => void;
};

const AddFoodContext = createContext<AddFoodContextType | null>(null);

export default AddFoodContext;
