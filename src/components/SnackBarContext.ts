import { createContext } from "react";

interface SnackBarType {
  type: string | null;
  setType: (v: string | null) => void;
  runSnackBar: boolean;
  setRunSnackBar: (v: boolean) => void;
}

const SnackBarContext = createContext<SnackBarType | null>(null);

export default SnackBarContext;
