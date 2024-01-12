import { useForm } from "react-hook-form";
import "./EmployeeForm.scss";
import {
  EmployeeFormInput,
  EmployeeValidationSchema,
} from "../NewEmploeeValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { createDeliveryman } from "../../../../../redux/appCall/AdminAppCall";
import { useEffect, useState } from "react";

const EmployeeForm = () => {
  const { imageUrl } = useAppSelector((state) => state.admin);
  const [isEmptyImage, setIsEmptyImage] = useState<boolean>();
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<EmployeeFormInput>({
    resolver: zodResolver(EmployeeValidationSchema),
  });

  const onSubmit = (value: EmployeeFormInput) => {
    if (imageUrl) {
      dispatch(createDeliveryman({ ...value, image: imageUrl || "" }));
      reset();
    } else {
      setIsEmptyImage(true);
    }
  };

  useEffect(() => {
    if (imageUrl) {
      setIsEmptyImage(false);
    }
  }, [imageUrl]);
  return (
    <div className="employee-from-wrapper">
      <form id="employee-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="employee-form-item">
          <input type="text" placeholder="Name" {...register("name")} />
          {errors.name && (
            <p className="errors-wrapper">{errors.name.message}</p>
          )}
        </div>
        <div className="employee-form-item">
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <p className="errors-wrapper">{errors.email.message}</p>
          )}
        </div>
        <div className="employee-form-item">
          <input
            type="text"
            placeholder="Current address"
            {...register("currentAddress")}
          />
          {errors.currentAddress && (
            <p className="errors-wrapper">{errors.currentAddress.message}</p>
          )}
        </div>
        <div className="employee-form-item">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="errors-wrapper">{errors.password.message}</p>
          )}
        </div>
        <div className="employee-form-item">
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confPass")}
          />
          {errors.confPass && (
            <p className="errors-wrapper">{errors.confPass.message}</p>
          )}
        </div>
        <button type="submit">Add new Employee</button>
        {isEmptyImage && (
          <p style={{ position: "absolute", bottom: "0", color: "red" }}>
            Image is missing, Please provide image
          </p>
        )}
      </form>
    </div>
  );
};

export default EmployeeForm;
