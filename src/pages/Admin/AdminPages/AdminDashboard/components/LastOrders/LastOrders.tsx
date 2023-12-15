import "./LastOrders.scss";
import ImageWraper from "./../../../../../../components/ImageWraper";

const image =
  "https://i.pinimg.com/564x/e0/fa/58/e0fa58fbd0d99cef9377b096b89ca488.jpg";

const vendor =
  "https://i.pinimg.com/564x/0f/0f/0e/0f0f0e575256ebbe5e600018ae83be2f.jpg";
const LastOrders = () => {
  return (
    <div className="last-orders-wrapper">
      <h3>Last Orders</h3>
      <div className="last-order-item">
        <span>#01234</span>
        <div className="last-order-customer">
          <ImageWraper image={image} size="35px" />
          <div>
            <h4>Anastasia</h4>
            <span>since 20-02-2023</span>
          </div>
				</div>
				
				<div className="last-order-line" />
				
        <div className="last-order-vendor">
          <ImageWraper image={vendor} size="55px" />
          <div>
            <h4>RiccoFood</h4>
            <span>Item 3x</span>
          </div>
          <button>See details</button>
        </div>
        <div className="last-order-line" />
      </div>
      <div className="last-order-item">
        <span>#01234</span>
        <div className="last-order-customer">
          <ImageWraper image={image} size="35px" />
          <div>
            <h4>Anastasia</h4>
            <span>since 20-02-2023</span>
          </div>
				</div>
				
				<div className="last-order-line" />
				
        <div className="last-order-vendor">
          <ImageWraper image={vendor} size="55px" />
          <div>
            <h4>RiccoFood</h4>
            <span>Item 3x</span>
          </div>
          <button>See details</button>
        </div>
        <div className="last-order-line" />
      </div>
      <div className="last-order-item">
        <span>#01234</span>
        <div className="last-order-customer">
          <ImageWraper image={image} size="35px" />
          <div>
            <h4>Anastasia</h4>
            <span>since 20-02-2023</span>
          </div>
				</div>
				
				<div className="last-order-line" />
				
        <div className="last-order-vendor">
          <ImageWraper image={vendor} size="55px" />
          <div>
            <h4>RiccoFood</h4>
            <span>Item 3x</span>
          </div>
          <button>See details</button>
        </div>
        <div className="last-order-line" />
      </div>
      <div className="last-order-item">
        <span>#01234</span>
        <div className="last-order-customer">
          <ImageWraper image={image} size="35px" />
          <div>
            <h4>Anastasia</h4>
            <span>since 20-02-2023</span>
          </div>
				</div>
				
				<div className="last-order-line" />
				
        <div className="last-order-vendor">
          <ImageWraper image={vendor} size="55px" />
          <div>
            <h4>RiccoFood</h4>
            <span>Item 3x</span>
          </div>
          <button>See details</button>
        </div>
        <div className="last-order-line" />
      </div>
    </div>
  );
};

export default LastOrders;
