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
import useSnackBar from "@components/SnackBar/useSnackBar";

const AddVendorAddress = () => {
  const dispatch = useAppDispatch();
  const { vendor } = useAppSelector((state) => state.vendor);
  const triggerSnackBar = useSnackBar();
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
    triggerSnackBar();
  };

  return (
    <section className="add-vendor-address">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="add-vendor-address-form-item">
          <h5 style={{ position: "absolute", bottom: "102%", left: "0" }}>
            Address
          </h5>
          <input
            type="text"
            placeholder="Address"
            {...register("address")}
            defaultValue={vendor.address}
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        <button type="submit">save address</button>
      </form>
    </section>
  );
};

export default AddVendorAddress;
