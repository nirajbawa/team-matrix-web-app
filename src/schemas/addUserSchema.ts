"use client"
import { z } from "zod";

export const addUserSchema = z.object({
    email: z.string().email({ message: "Please enter valid email" })
})
