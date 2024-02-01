import { z } from "zod";

export const FormSchema = z.object({
  mode: z.string(),
});
