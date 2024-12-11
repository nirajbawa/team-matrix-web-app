"use client"
import { z } from "zod";

export const membersSchema = z.object({
    name: z.string().min(2, {message: "name must contain at least 2 characters"}),
    position: z.string().min(2, {message: "name must contain at least 2 characters"}),
})