import { string, z, TypeOf } from "zod";

export const AddFoodSchema = z.object({
  title: string({ required_error: "Title is required!" }),
  description: string({ required_error: "Description is required!" }),
  price: string({ required_error: "Price is required!" }),
  discount: string().optional(),
});

export type AddFoodSchemaType = TypeOf<typeof AddFoodSchema>;
