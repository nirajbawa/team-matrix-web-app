import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Please enter valid email" }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})


export const signInSchema = z.object({
    name: z.string().min(2, { message: "Name must contain at least 2 characters" }),
    mobile: z.string().min(10, { message: "Enter valid mobile number" }).max(10, { message: "Enter valid mobile number" }),
    address: z.string().min(10, "Address must contain at least 10 characters"),
    password: z
        .string()
        .min(8, { message: "Password must contain at least 8 characters" }),
    confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // This specifies the path of the error
});

export const editMemberSchema = z.object({
    name: z.string().min(2, { message: "Name must contain at least 2 characters" }),
    mobile: z.string().min(10, { message: "Enter valid mobile number" }).max(10, { message: "Enter valid mobile number" }),
    address: z.string().min(10, "Address must contain at least 10 characters"),
});