import NavOrderItem from "./NavOrderItem/NavOrderItem";
import "./OrderNavigation.scss";

const fakeData = [
  { orderN: 1, date: "02-23", total: "$ 13.59" },
  { orderN: 2, date: "02-23", total: "$ 13.59" },
  { orderN: 3, date: "02-23", total: "$ 13.59" },
  { orderN: 4, date: "02-23", total: "$ 13.59" },
  { orderN: 5, date: "02-23", total: "$ 13.59" },
  { orderN: 6, date: "02-23", total: "$ 13.59" },
  { orderN: 7, date: "02-23", total: "$ 13.59" },
  { orderN: 8, date: "02-23", total: "$ 13.59" },
  { orderN: 9, date: "02-23", total: "$ 13.59" },
];
const OrderNavigation = () => {
  return (
    <div className="order-navigation-wrapper">
      <h1>Order History</h1>
      <div className="order-navigation-items">
        {fakeData.map((orderItem) => (
          <NavOrderItem orderItem={orderItem} />
        ))}
      </div>
    </div>
  );
};

export default OrderNavigation;
