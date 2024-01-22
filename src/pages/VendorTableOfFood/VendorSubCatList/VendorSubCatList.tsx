import { useAppSelector } from "../../../redux/hook";
import { GetFilteredSubC } from "../../../redux/type.slice";
import "./VendorSubCatList.scss";

const VendorSubCatList = () => {
  const subC = useAppSelector((state) => state.food.subC) as GetFilteredSubC[];
  return (
    <section className="vendor-sub-cat-list-wrapper">
      {subC &&
        subC.map((sub) => (
          <div className="vendor-sub-cat-list-item" key={sub.id}>
            <h4>{sub.title}</h4>
            <p>{sub.desc}</p>
          </div>
        ))}
    </section>
  );
};

export default VendorSubCatList;
