import { useForm } from "react-hook-form";
import "./BankInfo.scss";
import { BankInputType, bankSchema } from "../../Validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { addBankInfo } from "../../../../../redux/appCall/AuthAppCall";
import { useNavigate } from "react-router-dom";

const BankInfo = () => {
  const dispatch = useAppDispatch();
  const { _id } = useAppSelector((state) => state.customer);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<BankInputType>({ resolver: zodResolver(bankSchema) });
  console.log(_id);
  const onSubmit = (values: BankInputType) => {
    try {
      if (_id) {
        const bankInfo = {
          ...values,
          userId: _id,
        };
        dispatch(addBankInfo(bankInfo));
        reset();
        navigate("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An unknown error occurred");
    }
  };

  return (
    <div className="sign-up-bank-wrapper">
      <h1>Bank</h1>
      <form id="sign-up-bank-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-up-bank-input-wrapper">
          <input type="text" placeholder="Bank name" {...register("bankOf")} />
          {errors.bankOf && (
            <p className="errors-wrapper">{errors.bankOf.message}</p>
          )}
        </div>
        <div className="sign-up-bank-input-wrapper">
          <input
            type="text"
            placeholder="Debit Cart"
            {...register("debit_card")}
          />
          {errors.debit_card && (
            <p className="errors-wrapper">{errors.debit_card.message}</p>
          )}
        </div>
        <button className="sign-up-bank-submit-btn" type="submit">
          Submit Bank
        </button>
      </form>
    </div>
  );
};

export default BankInfo;
