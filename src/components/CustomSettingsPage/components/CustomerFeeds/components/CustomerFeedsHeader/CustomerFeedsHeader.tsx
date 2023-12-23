import { FC } from "react";
import { CiGrid41, CiBoxList } from "react-icons/ci";
import { useAppSelector } from "../../../../../../redux/hook";
import "./CustomerFeedsHeader.scss";

interface BooleanStateType {
  isGridView: boolean;
  setGrigView: (value: boolean) => void;
}
const CustomerFeedsHeader: FC<{ Bstate: BooleanStateType }> = ({ Bstate }) => {
  const { vendor } = useAppSelector((state) => state.vendor);

  return (
    <header className="customer-feeds-to-vendor-header">
      <h2>
        {vendor?.name}'s{" "}
        <span style={{ color: "orangered" }}>Customers Feeds</span>
      </h2>
      <div className="customer-feeds-to-vendor-view-btns">
        <button
          style={{
            backgroundColor: Bstate && !Bstate.isGridView ? "orangered" : "",
          }}
          onClick={() => Bstate.setGrigView(false)}
        >
          <CiBoxList />
        </button>
        <button
          style={{
            backgroundColor: Bstate && Bstate.isGridView ? "orangered" : "",
          }}
          onClick={() => Bstate.setGrigView(true)}
        >
          <CiGrid41 />
        </button>
      </div>
    </header>
  );
};

export default CustomerFeedsHeader;
