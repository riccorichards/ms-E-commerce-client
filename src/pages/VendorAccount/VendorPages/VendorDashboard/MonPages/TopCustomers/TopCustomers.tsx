import ImageWraper from "../../../../../../components/ImageWraper";
import "./TopCustomers.scss";
const image =
  "https://i.pinimg.com/564x/da/12/21/da12217f7256aca02951a3b2409fbadb.jpg";

const fakeCustomers = [
  {
    image: image,
    user: "anastasia",
    email: "ricco@gmail.com",
    phone: "+95 505 550",
    since: "2023-02-24",
  },
  {
    image: image,
    user: "anastasia",
    email: "ricco@gmail.com",
    phone: "+95 505 550",
    since: "2023-02-24",
  },
  {
    image: image,
    user: "anastasia",
    email: "ricco@gmail.com",
    phone: "+95 505 550",
    since: "2023-02-24",
  },
  {
    image: image,
    user: "anastasia",
    email: "ricco@gmail.com",
    phone: "+95 505 550",
    since: "2023-02-24",
  },
  {
    image: image,
    user: "anastasia",
    email: "ricco@gmail.com",
    phone: "+95 505 550",
    since: "2023-02-24",
  },
]; //the vendor should to take customer from their orders

const TopCustomers = () => {
  return (
    <div className="top-customer-wrapper-vendor-dashboard">
      {fakeCustomers.map((user, i) => (
        <div key={i} className="top-customer-vendor-dashboard">
          <div>
            <ImageWraper image={user.image} size="35px" />
          </div>
          <div>
            <h4>{user.user}</h4>
            <span>{user.since}</span>
          </div>
          <span>{user.email}</span>
          <span>{user.phone}</span>
        </div>
      ))}
    </div>
  );
};

export default TopCustomers;
