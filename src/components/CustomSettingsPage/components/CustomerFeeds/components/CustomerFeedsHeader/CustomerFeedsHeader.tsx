import { useContext } from "react";
import { CiGrid41, CiBoxList } from "react-icons/ci";
import { useAppSelector } from "../../../../../../redux/hook";
import "./CustomerFeedsHeader.scss";
import FeedContext from "../../FeedContext";

const CustomerFeedsHeader = () => {
  const { vendor } = useAppSelector((state) => state.vendor);
  const { customer } = useAppSelector((state) => state.customer);

  const getFeedContext = useContext(FeedContext);
  if (!getFeedContext) return null;

  const isGridView = getFeedContext.isGridView;
  const setGrigView = getFeedContext.setGrigView;

  return (
    <header className="customer-feeds-to-vendor-header">
      <h2>
        {vendor?.name ? vendor?.name : customer?.username}'s{" "}
        <span style={{ color: "orangered" }}>Customers Feeds</span>
      </h2>
      <div className="customer-feeds-to-vendor-view-btns">
        <button
          style={{
            backgroundColor: !isGridView ? "orangered" : "",
          }}
          onClick={() => setGrigView(false)}
        >
          <CiBoxList />
        </button>
        <button
          style={{
            backgroundColor: isGridView ? "orangered" : "",
          }}
          onClick={() => setGrigView(true)}
        >
          <CiGrid41 />
        </button>
      </div>
    </header>
  );
};

export default CustomerFeedsHeader;
