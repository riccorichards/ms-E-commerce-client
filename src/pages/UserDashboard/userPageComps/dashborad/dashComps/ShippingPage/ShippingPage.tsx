import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./ShippingPage.scss";
import {
  ShippingValidation,
  ShippingValidationType,
} from "./ShippingValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import { createShipping } from "../../../../../../redux/appCall/ShoppingApiCall";
import { useNavigate } from "react-router-dom";

const notAllow = {
  cursor: "not-allowed",
};
const ShippingPage: FC<{ personName: string | null }> = ({ personName }) => {
  const { customer } = useAppSelector((state) => state.customer);
  const { orderId, order } = useAppSelector((state) => state.shopping);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ShippingValidationType>({
    resolver: zodResolver(ShippingValidation),
  });

  useEffect(() => {
    if (order) {
      navigate("/customer/home/current-order");
    }
  }, [order]); //eslint-disable-line

  if (!customer || !personName) return null;

  const onClick = (values: ShippingValidationType) => {
    if (orderId) {
      dispatch(createShipping({ ...values, orderId }));
    }
    reset();
  };

  const { city, country, street } = customer.address;
  return (
    <main className="shipping-page-wrapper">
      <h2>Shipping page</h2>
      <form onSubmit={handleSubmit(onClick)}>
        <div className="shipping-form-item">
          <h4>Username</h4>
          <input
            style={notAllow}
            {...register("username")}
            type="text"
            defaultValue={customer.username}
          />
        </div>
        <div className="shipping-form-item">
          <h4>Email</h4>
          <input
            style={notAllow}
            {...register("email")}
            type="email"
            defaultValue={customer.email}
          />
        </div>
        <div className="shipping-form-item">
          <h4>Address</h4>
          <input
            style={notAllow}
            {...register("address")}
            type="text"
            defaultValue={`${country}, ${city}, ${street}`}
          />
        </div>
        <div className="shipping-form-item">
          <h4>Perosn Name</h4>
          <input
            style={notAllow}
            {...register("personName")}
            type="text"
            defaultValue={personName}
          />
        </div>
        <div className="shipping-form-item">
          <h4>Payment Method</h4>
          <input {...register("payment_method")} type="text" />
          {errors.payment_method && <p>{errors.payment_method.message}</p>}
        </div>
        <div className="shipping-form-item">
          <h4>Debit Card</h4>
          <input {...register("debit_card")} type="text" />
          {errors.debit_card && <p>{errors.debit_card.message}</p>}
        </div>
        <div className="shipping-form-item">
          <h4>Note</h4>
          <input {...register("note")} type="text" />
          {errors.note && <p>{errors.note.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default ShippingPage;
