import z from "zod";

export const updateProfileSchema = z.object({
  avatar: z.string().optional(),
  full_name: z
    .string()
    .min(2, "Name must have minimum 2 symbols")
    .max(120, "Name is too long"),
  telephone: z.string().optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

export type UpdateProfileFieldErrors = z.inferFlattenedErrors<
  typeof updateProfileSchema
>["fieldErrors"];
