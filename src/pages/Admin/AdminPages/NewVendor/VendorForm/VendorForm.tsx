import { useForm } from "react-hook-form";
import "./VendorForm.scss";
import {
  VendorFormInput,
  VendroValidationSchema,
} from "../NewVendroValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { createVendor } from "../../../../../redux/appCall/AdminAppCall";
//import { useState } from "react";

const VendorForm = () => {
  const dispatch = useAppDispatch();
  const image = useAppSelector((state) => state.admin.imageUrl);
  //const [isImage, setIsImage] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<VendorFormInput>({
    resolver: zodResolver(VendroValidationSchema),
  });

  const onSubmit = (values: VendorFormInput) => {
    if (image) {
      dispatch(createVendor({ ...values, profileImg: image }));
      reset();
    }
  };
  return (
    <section className="vendor-from-wrapper">
      <form id="vendor-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="vendor-form-item">
          <input type="text" placeholder="Name" {...register("name")} />
          {errors.name && (
            <p className="errors-wrapper">{errors.name.message}</p>
          )}
        </div>
        <div className="vendor-form-item">
          <input
            type="text"
            placeholder="Owner Name"
            {...register("ownerName")}
          />
          {errors.ownerName && (
            <p className="errors-wrapper">{errors.ownerName.message}</p>
          )}
        </div>
        <div className="vendor-form-item">
          <input type="text" placeholder="Pincode" {...register("pincode")} />
          {errors.pincode && (
            <p className="errors-wrapper">{errors.pincode.message}</p>
          )}
        </div>
        <div className="vendor-form-item">
          <input type="text" placeholder="Phone" {...register("phone")} />
          {errors.phone && (
            <p className="errors-wrapper">{errors.phone.message}</p>
          )}
        </div>
        <div className="vendor-form-item">
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <p className="errors-wrapper">{errors.email.message}</p>
          )}
        </div>
        <div className="vendor-form-item">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="errors-wrapper">{errors.password.message}</p>
          )}
        </div>
        <div className="vendor-form-item">
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="errors-wrapper">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button type="submit">Add new Vendor</button>
      </form>
    </section>
  );
};

export default VendorForm;
