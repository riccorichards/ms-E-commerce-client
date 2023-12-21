import { z } from "zod";

export interface VendorFormInput {
  name: string;
  ownerName: string;
  pincode: string;
  phone: string;
  email: string;
  profileImg?: string;
  password: string;
  confirmPassword: string;
}

export const VendroValidationSchema = z
  .object({
    name: z.string().min(1).trim(),
    ownerName: z.string().min(1).trim(),
    pincode: z.string().length(6, "Debit card should has 6 characters").trim(),
    phone: z.string().min(1).trim(),
    profileImg: z.string().optional(),
    email: z.string().email().trim(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .trim(),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .trim(),
  })
  .refine((value) => value.confirmPassword === value.password, {
    message: "Password does not match!",
    path: ["confirmPassword"],
  });
