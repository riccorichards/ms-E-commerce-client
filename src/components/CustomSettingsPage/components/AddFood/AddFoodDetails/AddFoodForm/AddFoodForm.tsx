import { useForm } from "react-hook-form";
import "./AddFoodForm.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddFoodSchema, AddFoodSchemaType } from "../../AddFoodValidation";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import { useContext, useState } from "react";
import AddFoodContext from "../../AddFoodContext";
import { createFood } from "../../../../../../redux/appCall/FoodAppCall";

const AddFoodForm = () => {
  const { vendor } = useAppSelector((state) => state.vendor);
  const { foodImageUrl } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();
  const [imgError, setImgError] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<AddFoodSchemaType>({
    resolver: zodResolver(AddFoodSchema),
  });

  const getAddFoodContext = useContext(AddFoodContext);
  const getSubCId = getAddFoodContext?.getSubCId;
  if (!vendor) return null;

  const onSubmit = (values: AddFoodSchemaType) => {
    if (foodImageUrl) {
      if (getSubCId) {
        dispatch(
          createFood({
            ...values,
            subCatId: getSubCId,
            image: foodImageUrl,
            vendor_name: vendor.name,
            address: `${vendor.address.country}, ${vendor.address.city}, ${vendor.address.street}`,
            vendor_rating: vendor.rating,
          })
        );
      }
      reset();
    } else {
      setImgError(true);
    }
  };

  return (
    <div className="add-food-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="add-food-form-item">
          <input type="text" placeholder="Title" {...register("title")} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="add-food-form-item">
          <input type="text" placeholder="Description" {...register("desc")} />
          {errors.desc && <p>{errors.desc.message}</p>}
        </div>
        <div className="add-food-form-item">
          <input type="text" placeholder="Price" {...register("price")} />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div className="add-food-form-item">
          <input type="text" placeholder="Discount" {...register("discount")} />
          {errors.discount && <p>{errors.discount.message}</p>}
        </div>
        {imgError && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              position: "absolute",
              top: "100%",
            }}
          >
            Please Provide Food Image
          </p>
        )}
        <button type="submit">Add new food</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
