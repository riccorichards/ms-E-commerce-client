import CustomSubCat from "../../../components/CustomSubCat/CustomSubCat";
import { useAppSelector } from "../../../redux/hook";
import { GetFilteredSubC } from "../../../redux/type.slice";
import "./VendorSubCat.scss";

const VendorSubCat = () => {
  const subC = useAppSelector((state) => state.food.subC) as GetFilteredSubC[];
  return (
    <section className="vendor-sub-cat-wrapper">
      {subC && subC.map((sub) => <CustomSubCat sub={sub} key={sub.id} />)}
    </section>
  );
};

export default VendorSubCat;
