import { z } from "zod";

export interface updateVendorFormType {
  name?: string;
  phone?: string;
  email?: string;
  pincode?: string;
}

export const updateVendorFormSchema = z.object({
  name: z.string().optional(),
  phone: z
    .string()
    .min(1, { message: "Vendor's phone is required!" })
    .optional(),
  email: z.string().email({ message: "Invalid email format!" }).optional(),
  pincode: z
    .string()
    .length(6, { message: "Invalid Pincode format! (6 symbol)" })
    .optional(),
});
