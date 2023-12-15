import { z } from "zod";

export type RegisterInputType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type AddressInputType = {
  country: string;
  city: string;
  postalCode: string;
  street: string;
};

export type BankInputType = {
  bankOf: string;
  debit_card: string;
};

export type LoginInputType = {
  email: string;
  password: string;
};

export const registrationSchema = z
  .object({
    username: z.string().min(3).trim(),
    email: z.string().email().trim(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((value) => value.confirmPassword === value.password, {
    message: "Password does not match!",
    path: ["confirmPassword"],
  });

export const addressSchema = z.object({
  country: z.string().min(1, "Country is required").trim(),
  city: z.string().min(1, "City is required").trim(),
  postalCode: z
    .string()
    .length(6, "Postal Code should has 6 characters")
    .trim(),
  street: z.string().min(1, "Street is required").trim(),
});

export const bankSchema = z.object({
  bankOf: z.string().min(1, "Bank name is required").trim(),
  debit_card: z.string().length(16, "Debit card should has 16 characters").trim(),
});

export const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8, "Password must be at least 8 characters").trim(),
});
