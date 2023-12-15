import AdminOrderTemplate from "./AdminOrderTemplate/AdminOrderTemplate";
import "./AdminOrders.scss";

const AdminOrders = () => {
  return (
    <div className="admin-orders-wrapper">
      <h1>Admin orders</h1>
      <div className="admin-orders">
        <AdminOrderTemplate />
        <AdminOrderTemplate />
        <AdminOrderTemplate />
        <AdminOrderTemplate />
        <AdminOrderTemplate />
        <AdminOrderTemplate />
      </div>
    </div>
  );
};

export default AdminOrders;
