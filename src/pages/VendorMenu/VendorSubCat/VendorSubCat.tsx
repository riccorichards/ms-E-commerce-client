import SubCatTemplate from "../../../components/SubCat/SubCatTemplate";
import "./VendorSubCat.scss";

const fakecats = [
  { id: 1, title: "Pizza" },
  { id: 2, title: "Pizza" },
  { id: 3, title: "Pizza" },
  { id: 4, title: "Pizza" },
  { id: 5, title: "Pizza" },
  { id: 6, title: "Pizza" },
];
const VendorSubCat = () => {
  return (
    <div className="vendor-sub-cat-wrapper">
      {fakecats.map((sub) => (
        <SubCatTemplate sub={sub} key={sub.id} />
      ))}
    </div>
  );
};

export default VendorSubCat;
