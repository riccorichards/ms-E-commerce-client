import TotalProfit from "../TotalProfit/TotalProfit";
import "./AdminDashboardHeader.scss";
import food_illustration from "../../../../../../assets/images/foodIllustration.png";
import feed_illustration from "../../../../../../assets/images/customersFeedback.png";
import order_illustration from "../../../../../../assets/images/orderIllustration.png";
import signed_illustration from "../../../../../../assets/images/signIllustration.png";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import { useEffect } from "react";
import {
  getLenghtOfCustomers,
  getLenghtOfFeedbacks,
  getLenghtOfFoods,
  getTotalOrdersData,
} from "../../../../../../redux/appCall/AdminAppCall";
const AdminDashboardHeader = () => {
  const dispatch = useAppDispatch();
  const { ordersLength, feedbacksLength, foodsLength, customersLength } =
    useAppSelector((s) => s.admin);

  useEffect(() => {
    dispatch(getTotalOrdersData());
    dispatch(getLenghtOfFeedbacks());
    dispatch(getLenghtOfFoods());
    dispatch(getLenghtOfCustomers());
  }, [dispatch]);

  if (!ordersLength || !feedbacksLength || !foodsLength || !customersLength)
    return null;
  return (
    <header className="admin-dashboard-header-wrapper">
      <header className="admin-dashboard-header">
        <h2>Admin Dashboard</h2>
      </header>
      <main className="admin-dashboard-header-body-wrapper">
        <TotalProfit />
        <div className="admin-dashboard-header-body">
          <section className="admin-dashboard-header-body-item">
            <div
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1",
                gap: "5px",
              }}
            >
              <img
                src={order_illustration}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <h4>Orders</h4>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "3",
              }}
            >
              <span style={{ fontSize: "42px" }}>{ordersLength}</span>
            </div>
          </section>
          <section className="admin-dashboard-header-body-item">
            <div
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1",
                gap: "5px",
              }}
            >
              <img
                src={signed_illustration}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <h4>Signed Customers</h4>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "3",
              }}
            >
              <span style={{ fontSize: "42px" }}>{customersLength}</span>
            </div>
          </section>
          <section className="admin-dashboard-header-body-item">
            <div
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1",
                gap: "5px",
              }}
            >
              <img
                src={food_illustration}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <h4>Foods</h4>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "3",
              }}
            >
              <span style={{ fontSize: "42px" }}>{foodsLength}</span>
            </div>
          </section>
          <section className="admin-dashboard-header-body-item">
            <div
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1",
                gap: "5px",
              }}
            >
              <img
                src={feed_illustration}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <h4>Feedbacks</h4>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "3",
              }}
            >
              <span style={{ fontSize: "42px" }}>{feedbacksLength || 0}</span>
            </div>
          </section>
        </div>
      </main>
    </header>
  );
};

export default AdminDashboardHeader;
