import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s'-]+$/, "Name can only contain letters"),

  email: z.string().trim().email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const bookingSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s'-]+$/, "Name can only contain letters"),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .min(2, "Last name is too short")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s'-]+$/, "Name can only contain letters"),

  email: z.string().trim().email("Invalid email address"),

  phone: z
    .string()
    .trim()
    .refine((val) => /[0-9]/.test(val), {
      message: "The number must contain at least one digit",
    })
    .transform((val) => val.replace(/\D/g, ""))
    .pipe(
      z
        .string()
        .min(10, "The number is too short (minimum 10 digits)")
        .max(15, "The number is too long"),
    ),
  startDate: z.string().min(1, "Pick-up date is required"),
  endDate: z.string().min(1, "Return date is required"),
});
