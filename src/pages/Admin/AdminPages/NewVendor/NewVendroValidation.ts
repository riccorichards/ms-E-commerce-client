import { z } from "zod";

export interface VendorFromInput {
  name: string;
  ownerName: string;
  pincode: string;
  phone: string;
  email: string;
  password: string;
  confPass: string;
}

export const VendroValidationSchema = z.object({
  name: z.string().min(1).trim(),
  ownerName: z.string().min(1).trim(),
  pincode: z.string().length(6, "Debit card should has 6 characters").trim(),
  phone: z.string().min(1).trim(),
  email: z.string().email().trim(),
  password: z.string().min(8, "Password must be at least 8 characters").trim(),
});
