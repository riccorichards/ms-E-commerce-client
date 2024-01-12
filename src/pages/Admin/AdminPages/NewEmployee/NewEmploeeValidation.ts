import { z } from "zod";

export interface EmployeeFormInput {
  name: string;
  email: string;
  currentAddress: string;
  password: string;
  confPass: string;
}
export const EmployeeValidationSchema = z
  .object({
    name: z.string().min(3).trim(),
    email: z.string().email().trim(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .trim(),
    confPass: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .trim(),
    currentAddress: z.string().min(1, { message: "Addres is required" }).trim(),
  })
  .refine((value) => value.password === value.confPass, {
    message: "Password does not match!",
    path: ["confPass"],
  });
