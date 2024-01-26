import { IoWarningOutline, IoCloseOutline } from "react-icons/io5";
import "./SnackBar.scss";
import React, { useContext, useEffect, useState } from "react";
import SnackBarContext from "../SnackBarContext";
import { MdOutlineDone, MdOutlineErrorOutline } from "react-icons/md";

interface SnackOptionsType {
  bgColor: string;
  title: string;
  text: string;
  icon: React.ElementType | null;
}

const SnackBar = () => {
  const getSnackContext = useContext(SnackBarContext);
  const [snackOptions, setSnackOptions] = useState<SnackOptionsType>({
    bgColor: "",
    title: "",
    text: "",
    icon: null,
  });
  const type = getSnackContext?.type;
  const runSnackBar = getSnackContext?.runSnackBar;
  const setRunSnackBar = getSnackContext?.setRunSnackBar;

  useEffect(() => {
    switch (type) {
      case "success":
        setSnackOptions({
          bgColor: "#008080",
          title: "Congratulations",
          text: "Well done!!!",
          icon: MdOutlineDone,
        });
        break;
      case "warning":
        setSnackOptions({
          bgColor: "orangered",
          title: "Warning",
          text: "Try again",
          icon: IoWarningOutline,
        });
        break;
      case "opss":
        setSnackOptions({
          bgColor: "#ff0516",
          title: "Opss!",
          text: "Something went wrong",
          icon: MdOutlineErrorOutline,
        });
        break;
      default:
        setSnackOptions({
          bgColor: "",
          title: "",
          text: "",
          icon: null,
        });
    }
  }, [type]);

  useEffect(() => {
    let timeID: NodeJS.Timeout;
    if (runSnackBar) {
      timeID = setTimeout(() => {
        setRunSnackBar && setRunSnackBar(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeID);
    };
  }, [runSnackBar, setRunSnackBar]);

  const handleManualClose = () => {
    setRunSnackBar && setRunSnackBar(false);
  };

  const Icon = snackOptions.icon;
  return (
    <div
      className="snack-bar-wrapper"
      style={{ backgroundColor: snackOptions.bgColor }}
    >
      <div className="snack-bar">
        <div className="snack-bar-decor" />
        <div className="snack-bar-decor2" />
        <div className="snack-bar-decor3" />
        <div className="snack-bar-info">{Icon ? <Icon /> : null}</div>
        <div>
          <h4>{snackOptions.title}</h4>
          <span>{snackOptions.text}</span>
        </div>
        <div className="snack-bar-close" onClick={handleManualClose}>
          <IoCloseOutline />
        </div>
      </div>
    </div>
  );
};

export default SnackBar;
