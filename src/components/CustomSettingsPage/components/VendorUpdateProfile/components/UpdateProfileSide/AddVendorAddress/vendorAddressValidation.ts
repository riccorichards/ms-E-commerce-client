import { TypeOf, object, string } from "zod";

export const AddVendorAddressSchema = object({
  address: string().min(1, { message: "Address is requeired" }),
});

export type AddVendorAddressSchemaType = TypeOf<typeof AddVendorAddressSchema>;
