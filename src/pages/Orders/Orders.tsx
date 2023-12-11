import "./Orders.scss";
import OrderNavigation from "./OrderNavigation/OrderNavigation";
import OrderTemplate from "./../../components/OrderTemplate/OrderTemplate";

const fakeFood =
  "https://i.pinimg.com/564x/60/98/d3/6098d395390ff624ba34dc24a8e1ba47.jpg";

const fakeVendor =
  "https://i.pinimg.com/564x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg";

const fakeDeliveryman =
  "https://i.pinimg.com/564x/49/7d/36/497d366b9d8f08b07bd5bb582ba4c35d.jpg";
const order = {
  id: 1,
  date: "03-19-2023",
  deliveryman: {
    deliverymanImg: fakeDeliveryman,
    deliveryman: "Mark Remark",
    deliverymanDate: "03-01-2022",
  },
  userAddress: "St. holy park",
  note: "Please do not knock on the door",
  vendor: {
    vendor: "RiccoFood",
    vendorImg: fakeVendor,
    vendorRating: 5,
    vendorAddress: "Tbilisi, Vake N23",
  },
  distance: "12.59 km",
  duration: "26 min",
  orderMenu: [
    {
      foodImg: fakeFood,
      foodQty: 2,
      food: "Pizza",
      foodPrice: "$ 19.59",
    },
    {
      foodImg: fakeFood,
      foodQty: 2,
      food: "Pizza",
      foodPrice: "$ 19.59",
    },
    {
      foodImg: fakeFood,
      foodQty: 2,
      food: "Pizza",
      foodPrice: "$ 19.59",
    },
    {
      foodImg: fakeFood,
      foodQty: 2,
      food: "Pizza",
      foodPrice: "$ 19.59",
    },
    {
      foodImg: fakeFood,
      foodQty: 2,
      food: "Pizza",
      foodPrice: "$ 19.59",
    },
    {
      foodImg: fakeFood,
      foodQty: 2,
      food: "Pizza",
      foodPrice: "$ 19.59",
    },
    {
      foodImg: fakeFood,
      foodQty: 2,
      food: "Pizza",
      foodPrice: "$ 19.59",
    },
    {
      foodImg: fakeFood,
      foodQty: 2,
      food: "Pizza",
      foodPrice: "$ 19.59",
    },
  ],
  total: "$ 19.59",
};

const Orders = () => {
  return (
    <div className="order-wrapper">
      <OrderNavigation />
      <OrderTemplate order={order} />
    </div>
  );
};

export default Orders;
