import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import "./AdminOrders.scss";
import { getAllOrders } from "../../../../redux/appCall/AdminAppCall";

const AdminOrders = () => {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((s) => s.admin);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  if (!orders) return null;

  return (
    <div className="admin-orders-wrapper">
      <h1>Admin orders</h1>
      <div className="admin-orders">
        {orders.map((order) => (
          <div key={order.id} className="admin-order-item">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{`#000${order.id}`}</span>
              <span>{order.createdAt.split("T")[0]}</span>
            </div>
            <div>
              <h5>CustomerId</h5>
              <span>{order.customerId}</span>
            </div>
            <div>
              <h5>Deliveryman Name</h5>
              <span>{order.deliverymanName}</span>
            </div>
            <div>
              <h5>Total amount</h5>
              <span>{order.total_amount}</span>
            </div>
            <div>
              <h5>Status</h5>
              <span>{order.order_status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
