import { TypeOf, object, string } from "zod";

export const AddVendorAddressSchema = object({
  country: string().min(1, { message: "Country is required" }),
  city: string().min(1, { message: "City is required" }),
  street: string().min(1, { message: "Street is required" }),
  postalCode: string().min(6, {
    message: "Postal code Should be consist with 6 chars",
  }),
});

export type AddVendorAddressSchemaType = TypeOf<typeof AddVendorAddressSchema>;
