import { FaRegStar } from "react-icons/fa";
import ImageWraper from "../../../../components/ImageWraper";
import RatingCalculation from "../../../../components/RatingCalculation";
import { useAppSelector } from "../../../../redux/hook";
import "./ReservationModal.scss";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ReservationVal, ReservationValType } from "./ReservationValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const ReservationModal: FC<{
  setIsReservetion: (val: boolean) => void;
}> = ({ setIsReservetion }) => {
  const { vendor, specVendor } = useAppSelector((state) => state.vendor);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationValType>({
    resolver: zodResolver(ReservationVal),
  });

  const target = vendor || specVendor;

  if (!target) return null;

  const onSubmit = (values: ReservationValType) => {
    console.log(values);
  };

  return (
    <div className="reservation-modal-wrapper">
      <header className="reservation-modal-header">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ImageWraper image={target.image} size="55px" />
          <div>
            <h3>{target.name}</h3>
            <RatingCalculation
              rating={{ icon: FaRegStar, rating: target.rating }}
            />
          </div>
        </div>
        <button onClick={() => setIsReservetion(false)}>Close</button>
      </header>
      <main
        style={{
          width: "100%",
          height: "2px",
          borderRadius: "5px",
          backgroundColor: "#333333",
          marginTop: "15px",
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="reservation-form-item">
          <input type="text" placeholder="Name" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="reservation-form-item">
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="reservation-form-item">
          <input type="text" placeholder="Phone" {...register("phone")} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className="reservation-form-item">
          <input type="text" placeholder="Members" {...register("member")} />
          {errors.member && <p>{errors.member.message}</p>}
        </div>
        <div className="reservation-form-item">
          <input
            type="text"
            placeholder="Week days ==> Mon or Fri"
            {...register("weekDays")}
          />
          {errors.weekDays && <p>{errors.weekDays.message}</p>}
        </div>
        <div className="reservation-form-item">
          <input
            type="text"
            placeholder="Reservation time ==> 16:00 or 18:00"
            {...register("reservationTime")}
          />
          {errors.reservationTime && <p>{errors.reservationTime.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReservationModal;
