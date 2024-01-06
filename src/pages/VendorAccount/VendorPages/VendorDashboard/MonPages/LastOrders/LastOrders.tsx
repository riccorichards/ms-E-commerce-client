import ImageWraper from "../../../../../../components/ImageWraper";
import "./LastOrders.scss";

const food =
  "https://i.pinimg.com/564x/bb/58/04/bb580461b29d28e2dea9ef033c6f4c99.jpg";

const user =
  "https://i.pinimg.com/564x/ea/c7/23/eac7233c981021d0fb85a287221f7925.jpg";
const fake = [
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
  {
    image: user,
    name: "anastasia",
    since: "2023-02-24",
    items: [
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
      { foodImage: food, amount: 2, price: "18.98", title: "Food name" },
    ],
    totalAmount: "153.43",
    date: "2024-02-01 23:45",
  },
];

function formatTime(str: string) {
  return {
    date: str.split(" ")[0],
    time: str.split(" ")[1],
  };
}
const LastOrders = () => {
  return (
    <div className="last-orders-wrapper">
      {fake &&
        fake.map((order) => (
          <div className="last-order">
            <div>
              <ImageWraper image={order.image} size="40px" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span>{order.name}</span>
              <span style={{ fontSize: "12px" }}>{order.since}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <span>Items</span>
              <span>x{order.items.length}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <span>Total</span>
              <span>${order.totalAmount}</span>
            </div>
            <div
              style={{
                fontSize: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span>{formatTime(order.date).date}</span>
              <span>{formatTime(order.date).time}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LastOrders;
