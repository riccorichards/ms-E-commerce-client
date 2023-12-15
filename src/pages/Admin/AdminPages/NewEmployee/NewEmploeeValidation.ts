import { z } from "zod";

export interface EmployeeFormInput {
  name: string;
  email: string;
  password: string;
  confPass: string;
  lat: string;
  lng: string;
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
    lat: z.string().min(1).trim(),
    lng: z.string().min(1).trim(),
  })
  .refine((value) => value.password === value.confPass, {
    message: "Password does not match!",
    path: ["confPass"],
  });
