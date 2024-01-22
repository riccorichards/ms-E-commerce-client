import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import "./TopCustomers.scss";
import { getTopCustomers } from "../../../../../../redux/appCall/VendorAppCall";
import ImageWraper from "../../../../../../components/ImageWraper";

const TopCustomers = () => {
  const dispatch = useAppDispatch();
  const { topCustomers } = useAppSelector((s) => s.vendor);

  useEffect(() => {
    dispatch(getTopCustomers());
  }, [dispatch]);

  if (!topCustomers) return null;

  return (
    <section className="top-customer-wrapper-vendor-dashboard">
      {topCustomers.map((item, i) => (
        <div key={i} className="top-customer-vendor-dashboard">
          <div>
            <ImageWraper image={item.customer.image} size="35px" />
          </div>
          <div style={{ width: "170px" }}>
            <h4>{item.customer.username}</h4>
            <span>{item.customer.email}</span>
          </div>
          <div>
            <h5>Total amount</h5>
            <span>${item.total_amount}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TopCustomers;
