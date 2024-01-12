import { TypeOf, z } from "zod";

export const ShippingValidation = z.object({
  username: z
    .string()
    .min(3, { message: "Username should be at least 3 char" })
    .trim(),
  email: z.string().email("Invalid Email format").trim(),
  personName: z.string(),
  address: z
    .string()
    .min(3, { message: "Address should be at least 3 char" })
    .trim(),
  payment_method: z
    .string()
    .min(3, { message: "Username should be at least 3 char" })
    .trim(),
  debit_card: z
    .string()
    .min(3, { message: "Username should be at least 3 char" })
    .trim(),
  note: z
    .string()
    .min(3, { message: "Note should be at least 3 char" })
    .max(100, { message: "Maximum available char is 100" })
    .trim(),
});

export type ShippingValidationType = TypeOf<typeof ShippingValidation>;
