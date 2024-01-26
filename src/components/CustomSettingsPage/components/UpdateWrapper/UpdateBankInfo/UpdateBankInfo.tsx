import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { EntireCustomerType } from "../../../../../redux/type.slice";
import "./UpdateBankInfo.scss";

import { TbEdit } from "react-icons/tb";
import {
  EditableFields,
  StateBankInfoType,
  updateBankSchema,
} from "../update.validation";
import { updateBankInfo } from "../../../../../redux/appCall/AuthAppCall";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSnackBar from "../../../../SnackBar/useSnackBar";

const UpdateBankInfo = () => {
  const [isEditable, setIsEditable] = useState<EditableFields>({});
  const dispatch = useAppDispatch();
  const customer = useAppSelector(
    (state) => state.customer.customer
  ) as EntireCustomerType;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<StateBankInfoType>({
    resolver: zodResolver(updateBankSchema),
  });
  
  const triggerSnackBar = useSnackBar();
  if (!customer) return null;

  const handleEdit = (fieldname: string) => {
    setIsEditable((prev) => ({
      ...prev,
      [fieldname]: !prev[fieldname],
    }));
  };

  const onSubmit = (value: StateBankInfoType) => {
    try {
      const result: Partial<StateBankInfoType> = {};
      for (const key of Object.keys(value) as Array<keyof StateBankInfoType>) {
        if (value[key] !== undefined || value[key] !== "") {
          result[key] = value[key];
        }
      }

      dispatch(updateBankInfo(result));
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
    <section className="update-bank-info">
      <h3>Update your bank</h3>
      <form id="update-bank-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="update-bank-wrapper">
          <input
            type="text"
            placeholder="Debit cart"
            defaultValue={customer.bank.debit_card}
            readOnly={!isEditable["debit"]}
            className={isEditable["debit"] ? "editable" : ""}
            {...register("debit_card")}
          />
          <div className="update-item-btn" onClick={() => handleEdit("debit")}>
            <TbEdit />
          </div>
          {errors.debit_card && (
            <p className="errors-wrapper">{errors.debit_card.message}</p>
          )}
        </div>
        <div className="update-bank-wrapper">
          <input
            type="text"
            placeholder="Your Bank"
            defaultValue={customer.bank.bankOf}
            readOnly={!isEditable["bank"]}
            className={isEditable["bank"] ? "editable" : ""}
            {...register("bankOf")}
          />
          <div className="update-item-btn" onClick={() => handleEdit("bank")}>
            <TbEdit />
          </div>
          {errors.bankOf && (
            <p className="errors-wrapper">{errors.bankOf.message}</p>
          )}
        </div>
        <button className="update-bank-btn">Save Changes</button>
      </form>
    </section>
  );
};

export default UpdateBankInfo;
