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
      localStorage.removeItem("user");
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }, [dispatch]);
  return (
    <main className="admin-dashboard-wrapper">
      <AdminNavLinks />
      <AdminPages />
    </main>
  );
};

export default Admin;
