import { useAppSelector } from "../../../redux/hook";
import "./OrderFooter.scss";
const OrderFooter = () => {
  const { order } = useAppSelector((s) => s.shopping);

  if (!order) return null;

  return (
    <footer className="order-template-payment">
      <h2>Total</h2>
      <span>${order.total_amount?.toFixed(2)}</span>
    </footer>
  );
};

export default OrderFooter;
