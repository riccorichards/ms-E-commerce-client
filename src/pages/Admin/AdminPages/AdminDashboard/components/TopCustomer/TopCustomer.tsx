import { useEffect } from "react";
import ImageWraper from "../../../../../../components/ImageWraper";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import "./TopCustomer.scss";
import { GiPodiumWinner } from "react-icons/gi";
import { getTopCustomers } from "../../../../../../redux/appCall/AdminAppCall";

const TopCustomer = () => {
  const dispatch = useAppDispatch();
  const { topCustomers } = useAppSelector((s) => s.admin);

  useEffect(() => {
    dispatch(getTopCustomers());
  }, [dispatch]);

  if (!topCustomers) return null;
  return (
    <div className="top-customer-wrapper">
      <div className="top-customer-header-wrapper">
        <div className="top-customer-header ">
          <GiPodiumWinner />
          <h3>Top Customer</h3>
        </div>
      </div>
      <table className="top-customer-table">
        <thead className="top-customer-thead">
          <tr className="top-customer-tr">
            <th className="top-customer-th">Customer</th>
            <th className="top-customer-th">Username</th>
            <th className="top-customer-th">Email</th>
            <th className="top-customer-th">Address</th>
          </tr>
        </thead>
        {topCustomers.map((customer) => (
          <tbody key={customer.email}>
            <tr className="top-customer-tr">
              <td className="top-customer-td">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <ImageWraper image={customer.image} size="35px" />
                </div>
              </td>
              <td className="top-customer-td">{customer.username}</td>
              <td className="top-customer-td">{customer.email}</td>
              <td className="top-customer-td">{customer.address}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default TopCustomer;
