import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import "./UpdateAddressInfo.scss";
import { TbEdit } from "react-icons/tb";
import { EntireCustomerType } from "../../../../../redux/type.slice";
import {
  EditableFields,
  StateAddressType,
  updateAddressSchema,
} from "../update.validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateAddressInfo } from "../../../../../redux/appCall/AuthAppCall";
import useSnackBar from "../../../../SnackBar/useSnackBar";

const UpdateAddressInfo = () => {
  const [isEditable, setIsEditable] = useState<EditableFields>({});
  const triggerSnackBar = useSnackBar();

  const dispatch = useAppDispatch();
  const customer = useAppSelector(
    (state) => state.customer.customer
  ) as EntireCustomerType;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<StateAddressType>({
    resolver: zodResolver(updateAddressSchema),
  });

  if (!customer) return null;
  const handleEdit = (fieldname: string) => {
    setIsEditable((prev) => ({
      ...prev,
      [fieldname]: !prev[fieldname],
    }));
  };

  const onSubmit = (values: StateAddressType) => {
    try {
      const result: Partial<StateAddressType> = {};
      for (const key of Object.keys(values) as Array<keyof StateAddressType>) {
        if (values[key] !== undefined || values[key] !== "") {
          result[key] = values[key];
        }
      }
      dispatch(updateAddressInfo(result));
      triggerSnackBar();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Update failed:", error.message);
      } else {
        console.error("An unknown error occurred during update.");
      }
    }
  };

  return (
    <section className="customer-update-address">
      <h3>Update your address</h3>
      <form id="update-address-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="update-address-wrapper">
          <input
            type="text"
            placeholder="Street"
            defaultValue={customer.address.street}
            readOnly={!isEditable["street"]}
            className={isEditable["street"] ? "editable" : ""}
            {...register("street")}
          />
          <div className="update-item-btn" onClick={() => handleEdit("street")}>
            <TbEdit />
          </div>
          {errors.street && (
            <p className="errors-wrapper">{errors.street.message}</p>
          )}
        </div>
        <div className="update-address-wrapper">
          <input
            type="text"
            placeholder="Postal code"
            defaultValue={customer.address.postalCode}
            readOnly={!isEditable["postal"]}
            className={isEditable["postal"] ? "editable" : ""}
            {...register("postalCode")}
          />
          <div className="update-item-btn" onClick={() => handleEdit("postal")}>
            <TbEdit />
          </div>
          {errors.postalCode && (
            <p className="errors-wrapper">{errors.postalCode.message}</p>
          )}
        </div>
        <div className="update-address-wrapper">
          <input
            type="text"
            placeholder="City"
            defaultValue={customer.address.city}
            readOnly={!isEditable["city"]}
            className={isEditable["city"] ? "editable" : ""}
            {...register("city")}
          />
          <div className="update-item-btn" onClick={() => handleEdit("city")}>
            <TbEdit />
          </div>
          {errors.city && (
            <p className="errors-wrapper">{errors.city.message}</p>
          )}
        </div>
        <div className="update-address-wrapper">
          <input
            type="text"
            placeholder="Country"
            readOnly={!isEditable["country"]}
            defaultValue={customer.address.country}
            className={isEditable["country"] ? "editable" : ""}
            {...register("country")}
          />
          <div
            className="update-item-btn"
            onClick={() => handleEdit("country")}
          >
            <TbEdit />
          </div>
          {errors.country && (
            <p className="errors-wrapper">{errors.country.message}</p>
          )}
        </div>
        <button className="update-address-btn" type="submit">
          Save Changes
        </button>
      </form>
    </section>
  );
};

export default UpdateAddressInfo;
