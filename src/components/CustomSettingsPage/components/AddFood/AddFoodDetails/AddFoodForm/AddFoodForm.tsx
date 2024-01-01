import { useForm } from "react-hook-form";
import "./AddFoodForm.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { AddFoodSchema, AddFoodSchemaType } from "../../AddFoodValidation";
import { useAppSelector } from "../../../../../../redux/hook";

const AddFoodForm: FC<{ SubCatIdWrapper: number }> = ({ SubCatIdWrapper }) => {
  const { vendor } = useAppSelector((state) => state.vendor);
  const { foodImageUrl } = useAppSelector((state) => state.food);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<AddFoodSchemaType>({
    resolver: zodResolver(AddFoodSchema),
  });

  const onSubmit = (values: AddFoodSchemaType) => {
    if (vendor && foodImageUrl) {
      console.log({
        ...values,
        subCatId: SubCatIdWrapper,
        image: foodImageUrl,
        vendor: vendor.name,
        vendorRating: vendor.rating,
      });
      reset();
    }
  };
  return (
    <div className="add-food-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="add-food-form-item">
          <input type="Title" {...register("title")} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="add-food-form-item">
          <input type="Description" {...register("description")} />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div className="add-food-form-item">
          <input type="Price" {...register("price")} />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div className="add-food-form-item">
          <input type="Discount" />
        </div>
        <button>Add new food</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
