import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import "./TotalProfit.scss";
import { FaDollarSign } from "react-icons/fa";
import { getTotalOrdersData } from "../../../../../../redux/appCall/AdminAppCall";

const TotalProfit = () => {
  const dispatch = useAppDispatch();
  const { ordersTotalAmount } = useAppSelector((s) => s.admin);

  useEffect(() => {
    dispatch(getTotalOrdersData());
  }, [dispatch]);

  if (!ordersTotalAmount) return null;

  return (
    <section className="total-profit-wrapper">
      <header className="total-profile-header-wrapper">
        <div className="total-profile-header">
          <FaDollarSign />
          <h4>Total Profit</h4>
        </div>
      </header>
      <main className="total-profile-body">
        <span>$ {ordersTotalAmount.toFixed(2)}</span>
        <p style={{ fontSize: "18px" }}>This is all restaurants' profites</p>
      </main>
    </section>
  );
};

export default TotalProfit;
