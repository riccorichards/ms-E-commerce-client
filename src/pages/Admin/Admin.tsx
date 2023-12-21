import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hook";
import "./Admin.scss";
import AdminNavLinks from "./AdminNavLinks/AdminNavLinks";
import AdminPages from "./AdminPages/AdminPages";
import { findCustomerById } from "../../redux/appCall/AuthAppCall";

const Admin = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      dispatch(findCustomerById());
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }, [dispatch]);
  return (
    <div className="admin-dashboard-wrapper">
      <AdminNavLinks />
      <AdminPages />
    </div>
  );
};

export default Admin;
