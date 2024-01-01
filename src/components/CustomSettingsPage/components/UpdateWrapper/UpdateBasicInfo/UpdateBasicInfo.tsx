import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { CustomarBasicInfo } from "../../../../../redux/type.slice";
import "./UpdateBasicInfo.scss";
import { TbEdit } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EditableFields,
  UpdateBasicCustomerInput,
  updateBasicCustomerSchema,
} from "../update.validation";
import {
  checkCurrentPassword,
  updateBasicCustomerInfo,
} from "../../../../../redux/appCall/AuthAppCall";
import { IoSendOutline } from "react-icons/io5";

const UpdateBasicInfo = () => {
  const [isEditable, setIsEditable] = useState<EditableFields>({});
  const [passwordValue, setPasswordValue] = useState<string>("");
  const { currentPassword } = useAppSelector((state) => state.customer);
  const customer = useAppSelector(
    (state) => state.customer.customer
  ) as CustomarBasicInfo;
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateBasicCustomerInput>({
    resolver: zodResolver(updateBasicCustomerSchema),
  });

  if (!customer) return null;

  const handleEdit = (fieldname: string) => {
    setIsEditable((prev) => ({
      ...prev,
      [fieldname]: !prev[fieldname],
    }));
  };

  const onSubmit = (values: UpdateBasicCustomerInput) => {
    try {
      const result: Partial<UpdateBasicCustomerInput> = {};
      for (const key of Object.keys(values) as Array<
        keyof UpdateBasicCustomerInput
      >) {
        if (values[key] !== undefined && values[key] !== "") {
          result[key] = values[key];
        }
      }
      dispatch(updateBasicCustomerInfo(result));
    } catch (error) {
      if (error instanceof Error) {
        console.error("Update failed:", error.message);
      } else {
        console.error("An unknown error occurred during update.");
      }
    }
  };

  const sendCurrentPassword = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      dispatch(checkCurrentPassword(passwordValue));
      
    } catch (error) {
      if (error instanceof Error) {
        console.error("Update password failed:", error.message);
      } else {
        console.error("An unknown error occurred during update password.");
      }
    }
  };
  return (
    <div className="customer-basic-update">
      <h3>Update your profile</h3>
      <form id="customer-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="customer-update-input-wrapper">
          <input
            type="text"
            placeholder="Username"
            defaultValue={customer.username}
            readOnly={!isEditable["username"]}
            className={`${isEditable["username"] ? "editable" : ""}`}
            {...register("username")}
          />
          <div
            className="update-item-btn"
            onClick={() => handleEdit("username")}
          >
            <TbEdit />
          </div>
          {errors.username && (
            <p className="errors-wrapper">{errors.username.message}</p>
          )}
        </div>
        <div className="customer-update-input-wrapper">
          <input
            type="text"
            placeholder="Email"
            defaultValue={customer.email}
            readOnly={!isEditable["email"]}
            className={`${isEditable["email"] ? "editable" : ""}`}
            {...register("email")}
          />
          <div className="update-item-btn" onClick={() => handleEdit("email")}>
            <TbEdit />
          </div>
          {errors.email && (
            <p className="errors-wrapper">{errors.email.message}</p>
          )}
        </div>
        {currentPassword ? (
          <>
            <div className="customer-update-input-wrapper">
              <input
                type="password"
                placeholder="New Password"
                className="editable"
                {...register("newPassword")}
              />
              {errors.newPassword && (
                <p className="errors-wrapper">{errors.newPassword.message}</p>
              )}
            </div>
            <div className="customer-update-input-wrapper">
              <input
                type="password"
                placeholder="Confirm Password"
                className="editable"
                {...register("confirmPassword")}
              />

              {errors.confirmPassword && (
                <p className="errors-wrapper">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="customer-update-input-wrapper">
            <input
              type="password"
              placeholder="Current Password"
              className="editable"
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <div className="update-item-btn" onClick={sendCurrentPassword}>
              <IoSendOutline />
            </div>
          </div>
        )}
        <button className="basic-update-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateBasicInfo;
