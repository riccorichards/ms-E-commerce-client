import { FC, useState } from "react";
import "./AddFoodSubC.scss";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createSubCat } from "../../../../../redux/appCall/FoodAppCall";

const formSchema = z.object({
  title: z.string().min(1, "Title is required").trim().optional(),
  description: z.string().min(16, "Description is required").trim(),
});

const AddFoodSubC: FC<{ mainCId: number | null }> = ({ mainCId }) => {
  const { subC } = useAppSelector((state) => state.food);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<{ title: string; description: string }>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (value: { title: string; description: string }) => {
    if (mainCId) {
      dispatch(createSubCat({ ...value, mainCatId: mainCId }));
      reset();
    }
  };
  return (
    <div className="add-food-sub-cat-wrapper" id="subCategory">
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
                {...register("description")}
              />
              {errors.description && <p>{errors.description.message}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}

        {subC &&
          subC.map((sub) => (
            <div key={sub.id} className="add-food-sub-cat-item">
              <h4>{sub.title}</h4>
              <p>{sub.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddFoodSubC;
