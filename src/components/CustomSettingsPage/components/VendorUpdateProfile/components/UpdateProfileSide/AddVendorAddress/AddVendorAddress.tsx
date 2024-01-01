import { useForm } from "react-hook-form";
import "./AddVendorAddress.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddVendorAddressSchema,
  AddVendorAddressSchemaType,
} from "./vendorAddressValidation";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../redux/hook";
import { addVendorAddress } from "../../../../../../../redux/appCall/VendorAppCall";

const AddVendorAddress = () => {
  const dispatch = useAppDispatch();
  const { vendor } = useAppSelector((state) => state.vendor);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddVendorAddressSchemaType>({
    resolver: zodResolver(AddVendorAddressSchema),
  });

  if (!vendor) return null;

  const onSubmit = (values: AddVendorAddressSchemaType) => {
    dispatch(addVendorAddress(values));
  };
  return (
    <div className="add-vendor-address">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="add-vendor-address-form-item">
          <input
            type="text"
            placeholder="Country"
            {...register("country")}
            defaultValue={vendor.address.country}
          />
          {errors.country && <p>{errors.country.message}</p>}
        </div>
        <div className="add-vendor-address-form-item">
          <input
            type="text"
            placeholder="City"
            {...register("city")}
            defaultValue={vendor.address.city}
          />
          {errors.city && <p>{errors.city.message}</p>}
        </div>
        <div className="add-vendor-address-form-item">
          <input
            type="text"
            placeholder="Street"
            {...register("street")}
            defaultValue={vendor.address.street}
          />
          {errors.street && <p>{errors.street.message}</p>}
        </div>
        <div className="add-vendor-address-form-item">
          <input
            type="text"
            placeholder="Postal Code"
            {...register("postalCode")}
            defaultValue={vendor.address.postalCode}
          />
          {errors.postalCode && <p>{errors.postalCode.message}</p>}
        </div>
        <button type="submit">save address</button>
      </form>
    </div>
  );
};

export default AddVendorAddress;
