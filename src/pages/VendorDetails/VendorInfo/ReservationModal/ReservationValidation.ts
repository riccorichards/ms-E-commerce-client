import { TypeOf, string, z } from "zod";

export const ReservationVal = z.object({
  name: string().min(1, { message: "Name is Required" }).trim(),
  email: string().email("Invalid Email Format").trim(),
  phone: string().min(1, { message: "Phone is Required" }).trim(),
  member: string().min(1, { message: "Member is Required" }).trim(),
  weekDays: string().min(1, { message: "Week days is Required" }).trim(),
  reservationTime: string().min(1, { message: "Time is Required" }).trim(),
});

export type ReservationValType = TypeOf<typeof ReservationVal>;
