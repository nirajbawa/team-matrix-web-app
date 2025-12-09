"use client";
import { z } from "zod";

export const membersSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must contain at least 2 characters" }),
  position: z
    .string()
    .min(2, { message: "name must contain at least 2 characters" }),
});

export const alumnisSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must contain at least 2 characters" }),
  batch: z
    .string()
    .min(2, { message: "name must contain at least 2 characters" }),
});
