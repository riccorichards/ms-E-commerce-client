import { useForm } from "react-hook-form";
import "./VendorForm.scss";
import {
  VendorFromInput,
  VendroValidationSchema,
} from "../NewVendroValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const VendorForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<VendorFromInput>({
    resolver: zodResolver(VendroValidationSchema),
  });

  const onSubmit = (values: VendorFromInput) => {
    console.log(values);
    reset();
  };
  return (
    <div className="vendor-from-wrapper">
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
            {...register("confPass")}
          />
          {errors.confPass && (
            <p className="errors-wrapper">{errors.confPass.message}</p>
          )}
        </div>
        <button>Add new Vendor</button>
      </form>
    </div>
  );
};

export default VendorForm;
