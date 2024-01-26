import { useContext } from "react";
import SnackBarContext from "../SnackBarContext";

type TriggerSnackType = string;

const useSnackBar = () => {

  const getSnackContext = useContext(SnackBarContext);
  const setRunSnackBar = getSnackContext?.setRunSnackBar;
  const setType = getSnackContext?.setType;

	const triggerSnackBar = (type: TriggerSnackType = "success") => {
		
    if (setType && setRunSnackBar) {
      setRunSnackBar(true);
      setType(type);
		}
		
  };

	return triggerSnackBar;
	
};

export default useSnackBar;
