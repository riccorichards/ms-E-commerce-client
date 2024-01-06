import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import "./AddFoodMainCat.scss";
import { fetchMainCategories } from "../../../../../redux/appCall/FoodAppCall";
import AddFoodContext from "../AddFoodContext";

const AddFoodMainCat = () => {
  const dispatch = useAppDispatch();
  const { mainC } = useAppSelector((state) => state.food);
  const [hoveredElId, setHoveredElId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchMainCategories());
  }, []); //eslint-disable-line

  function modifyDesc(str: string) {
    return str.length > 50 ? str.slice(0, 50) + "..." : str;
  }

  const handleEntryHoverProcess = (id: number) => {
    setHoveredElId(id);
  };

  const handleLeaveHoverProcess = () => {
    setHoveredElId(null);
  };

  const getAddFoodContext = useContext(AddFoodContext);

  function onClick(mainCId: number, divId: string) {
    scrollToComponent(divId);
    getAddFoodContext?.setGetMainCId(mainCId);
  }

  function scrollToComponent(divId: string) {
    const el = document.getElementById(divId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="add-food-categories-wrapper">
      <h4>Choose Main Category</h4>
      <div className="add-food-categories">
        {mainC &&
          mainC.map((cat) => (
            <div
              className="add-food-categories-items"
              key={cat.id}
              onMouseEnter={() => handleEntryHoverProcess(cat.id)}
              onMouseLeave={() => handleLeaveHoverProcess()}
              onClick={() => onClick(cat.id, "subCategory")}
            >
              <img src={cat.image} alt={cat.title} />
              <h3>{cat.title}</h3>
              <p>{modifyDesc(cat.desc)}</p>
              {hoveredElId === cat.id && (
                <div className="complete-category-desc">{cat.desc}</div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddFoodMainCat;
