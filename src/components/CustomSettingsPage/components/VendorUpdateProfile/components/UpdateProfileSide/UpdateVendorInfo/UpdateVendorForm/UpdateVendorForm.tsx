import { useForm } from "react-hook-form";
import "./UpdateVendorForm.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  updateVendorFormSchema,
  updateVendorFormType,
} from "./updateVendorFormschema";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../redux/hook";
import { updateVendorProfileInfo } from "../../../../../../../../redux/appCall/VendorAppCall";
import useSnackBar from "../../../../../../../SnackBar/useSnackBar";

const UpdateVendorForm = () => {
  const dispatch = useAppDispatch();
  const { vendor } = useAppSelector((state) => state.vendor);

  const triggerSnackBar = useSnackBar();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<updateVendorFormType>({
    resolver: zodResolver(updateVendorFormSchema),
  });

  if (!vendor) return null;

  const onSubmit = (values: updateVendorFormType) => {
    const result: Partial<updateVendorFormType> = {};
    for (const key of Object.keys(values) as Array<
      keyof updateVendorFormType
    >) {
      if (values[key] !== undefined && values[key] !== "") {
        result[key] = values[key];
      }
    }
    dispatch(updateVendorProfileInfo(result));
    triggerSnackBar();
  };
  return (
    <div className="update-vendor-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="update-vendor-form-item">
          <input
            type="text"
            placeholder="Name"
            defaultValue={vendor.name}
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="update-vendor-form-item">
          <input
            type="email"
            placeholder="Email"
            defaultValue={vendor.email}
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="update-vendor-form-item">
          <input
            type="text"
            placeholder="Phone"
            defaultValue={vendor.phone}
            {...register("phone")}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className="update-vendor-form-item">
          <input
            type="text"
            placeholder="Pincode"
            defaultValue={vendor.pincode}
            {...register("pincode")}
          />
          {errors.pincode && <p>{errors.pincode.message}</p>}
        </div>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};

export default UpdateVendorForm;
