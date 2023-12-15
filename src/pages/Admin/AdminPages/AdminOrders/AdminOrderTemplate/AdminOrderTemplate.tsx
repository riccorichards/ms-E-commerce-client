import ImageWraper from "../../../../../components/ImageWraper";
import "./AdminOrderTemplate.scss";
import RatingCalculation from "./../../../../../components/RatingCalculation";
import { FaRegStar } from "react-icons/fa";

const image =
  "https://i.pinimg.com/564x/d0/8a/63/d08a634120d095857ab016fd4881bdc1.jpg";

const food =
  "https://i.pinimg.com/564x/37/83/1b/37831bbf0e27cdf2992cd8730b6bfcf6.jpg";

const vendor =
  "https://i.pinimg.com/236x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg";
const AdminOrderTemplate = () => {
  const rating = {
    icon: FaRegStar,
    rating: 4,
  };
  return (
    <div className="admin-order-template-wrapper">
      <div className="admin-order-header">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Order #236</h3>
          <span>2023-09-12</span>
        </div>
        <ImageWraper image={image} size="45px" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div className="admin-order-details">
          <div>
            <ImageWraper image={food} size="70px" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h3>Pizza</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontWeight: "900" }}>$ 19.59</span>
              <span style={{ color: "orangered" }}>
                <strong>QTY:</strong> 1
              </span>
            </div>
          </div>
        </div>
        <div className="admin-order-details">
          <div>
            <ImageWraper image={food} size="70px" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h3>Pizza</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontWeight: "900" }}>$ 19.59</span>
              <span style={{ color: "orangered" }}>
                <strong>QTY:</strong> 1
              </span>
            </div>
          </div>
        </div>
        <button className="admin-order-more-btn">More</button>
      </div>
      <div className="admin-order-vendor-info">
        <div>
          <h3>RiccoFood</h3>
          <RatingCalculation rating={rating} />
        </div>
        <ImageWraper image={vendor} size="45px" />
      </div>
    </div>
  );
};

export default AdminOrderTemplate;
