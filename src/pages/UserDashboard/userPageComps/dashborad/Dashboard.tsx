import "./Dashboard.scss";
import Cart from "./dashComps/Cart/Cart";
import ProductList from "./dashComps/ProductList/ProductList";

const Dashboard = () => {
  return (
    <div className="user-dashboard">
      <ProductList />
      <Cart />
    </div>
  );
};

export default Dashboard;
