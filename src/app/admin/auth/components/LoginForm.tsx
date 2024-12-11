"use client"
import React, {useState} from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import *  as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { InputNormal } from "@/components/ui/inputNormal";
import { loginSchema } from "@/schemas/authSchema";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

function LoginForm() {

    const { toast } = useToast();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof loginSchema>) {

        setIsSubmitting(true);
        const result = await signIn("credentials", {
            redirect: false,
            identifier: values.email,
            password: values.password,
        });

        if (result?.error) {
            if (result.error === "CredentialsSignin") {
                toast({
                    title: "Login Failed",
                    description: "Incorrect username or password",
                    variant: "destructive",
                });
            } else {
                toast({
                    title: "Error",
                    description: result.error,
                    variant: "destructive",
                });
            }
        }

        if (result?.url) {
            router.replace("/admin/dashboard");
        }
        setIsSubmitting(false);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 md:w-[25%] flex flex-col gap-2 rounded-lg h-full shadow-[#0000001a] shadow-2xl p-5 py-10"
            >
                <div className='text-3xl capitalize mb-5 font-bold text-center'>
                    Admin Login
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputNormal autoComplete="off"  placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputNormal type="password" placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='w-full flex justify-center items-center'>
                    <Button disabled={isSubmitting} variant="outline" size='lg' className='bg-gray-900 text-white'>  
                        {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  
                  </>
                ) : (
                  "Login"
                )}
                </Button>

                </div>
            </form>
        </Form>
    )
}

export default LoginForm;