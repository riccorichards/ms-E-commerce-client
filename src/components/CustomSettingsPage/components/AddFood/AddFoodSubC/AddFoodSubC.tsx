import { useContext, useState } from "react";
import "./AddFoodSubC.scss";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createSubCat } from "../../../../../redux/appCall/FoodAppCall";
import AddFoodContext from "../AddFoodContext";

const formSchema = z.object({
  title: z.string().min(1, "Title is required").trim().optional(),
  desc: z.string().min(16, "Description is required").trim(),
});

const AddFoodSubC = () => {
  const { subC } = useAppSelector((state) => state.food);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<{ title: string; desc: string }>({
    resolver: zodResolver(formSchema),
  });

  const getAddFoodContext = useContext(AddFoodContext);
  const mainCId = getAddFoodContext?.getMainCId;

  const onSubmit = (value: { title: string; desc: string }) => {
    if (mainCId) {
      dispatch(createSubCat({ ...value, mainCatId: mainCId }));
      reset();
    }
  };

  function scrollToComponent(divId: string, subId: number) {
    const el = document.getElementById(divId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    getAddFoodContext?.setGetSubCId(subId);
  }
  return (
    <section className="add-food-sub-cat-wrapper" id="subCategory">
      <header className="add-food-sub-cat-header">
        <h3>Choose or create sub category</h3>
        <button onClick={() => setIsAdd((prev) => !prev)}>
          <FaPlus />
        </button>
      </header>
      <div className="add-food-sub-cat">
        {isAdd && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input type="text" placeholder="Title" {...register("title")} />
              {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Description"
                {...register("desc")}
              />
              {errors.desc && <p>{errors.desc.message}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}

        {subC &&
          subC.map((sub) => (
            <div
              key={sub.id}
              className="add-food-sub-cat-item"
              style={
                mainCId === sub.mainCatId
                  ? {
                      boxShadow: "0 0 10px #00000078",
                      backgroundColor: "#008080",
                      color: "#fff",
                    }
                  : undefined
              }
              onClick={() => scrollToComponent("add-food", sub.id)}
            >
              <h4>{sub.title}</h4>
              <p>{sub.desc}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AddFoodSubC;
