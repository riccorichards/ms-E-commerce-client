import { string, z, TypeOf } from "zod";

export const AddFoodSchema = z.object({
  title: string().min(1, { message: "Title is required" }).trim(),
  desc: string().min(1, { message: "Description is required" }).trim(),
  price: string().min(1, { message: "Price is required" }).trim(),
  discount: string().min(1, { message: "Dicount is required" }).trim(),
});

export type AddFoodSchemaType = TypeOf<typeof AddFoodSchema>;
