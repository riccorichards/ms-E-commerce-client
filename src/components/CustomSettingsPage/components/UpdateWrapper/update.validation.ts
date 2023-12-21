import { z } from "zod";

export interface EditableFields {
  [key: string]: boolean;
}

export interface UpdateBasicCustomerInput {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface StateAddressType {
  country?: string;
  city?: string;
  postalCode?: string;
  street?: string;
}

export interface StateBankInfoType {
  bankOf?: string;
  debit_card?: string;
}

export const updateBasicCustomerSchema = z
  .object({
    username: z.string().min(3).trim().optional(),
    email: z.string().email().trim().optional(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .trim(),
    confirmPassword: z.string().trim().optional(),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Password does not match!",
    path: ["confirmPassword"],
  });

export const updateAddressSchema = z.object({
  country: z.string().min(1, "Country is required").trim().optional(),
  city: z.string().min(1, "City is required").trim().optional(),
  postalCode: z
    .string()
    .length(6, "Postal Code should has 6 characters")
    .trim()
    .optional(),
  street: z.string().min(1, "Street is required").trim().optional(),
});

export const updateBankSchema = z.object({
  bankOf: z.string().min(1, "Bank name is required").trim().optional(),
  debit_card: z.string().min(16, "Debit card should has 16 characters").trim(),
});
