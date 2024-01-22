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
    <section className="add-vendor-address">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="add-vendor-address-form-item">
          <h5 style={{ position: "absolute", bottom: "102%", left: "0" }}>
            Country
          </h5>
          <input
            type="text"
            placeholder="Country"
            {...register("country")}
            defaultValue={vendor.address}
          />
          {errors.country && <p>{errors.country.message}</p>}
        </div>
        <button type="submit">save address</button>
      </form>
    </section>
  );
};

export default AddVendorAddress;
