import { useForm } from "react-hook-form";
import "./AddressInfo.scss";
import { AddressInputType, addressSchema } from "../../Validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { addAddress } from "../../../../../redux/appCall/AuthAppCall";

const AddressInfo = () => {
  const dispatch = useAppDispatch();
  const { _id } = useAppSelector((state) => state.customer);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AddressInputType>({
    resolver: zodResolver(addressSchema),
  });
  const onSubmit = (values: AddressInputType) => {
    try {
      if (_id) {
        const newAddress = { ...values, userId: _id };
        dispatch(addAddress(newAddress));
        reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An unknown error occurred");
    }
  };
  return (
    <section className="sign-up-address-wrapper">
      <h1>Address</h1>
      <form id="sign-up-address-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-up-address-input-wrapper">
          <input type="text" placeholder="Country" {...register("country")} />
          {errors.country && (
            <p className="errors-wrapper">{errors.country.message}</p>
          )}
        </div>
        <div className="sign-up-input-wrapper">
          <input type="text" placeholder="City" {...register("city")} />
          {errors.city && (
            <p className="errors-wrapper">{errors.city.message}</p>
          )}
        </div>
        <div className="sign-up-input-wrapper">
          <input
            type="text"
            placeholder="Postal Code"
            {...register("postalCode")}
          />
          {errors.postalCode && (
            <p className="errors-wrapper">{errors.postalCode.message}</p>
          )}
        </div>
        <div className="sign-up-input-wrapper">
          <input type="text" placeholder="Street" {...register("street")} />
          {errors.street && (
            <p className="errors-wrapper">{errors.street.message}</p>
          )}
        </div>
        <button className="sign-up-address-submit-btn" type="submit">
          Submit Address
        </button>
      </form>
    </section>
  );
};

export default AddressInfo;
