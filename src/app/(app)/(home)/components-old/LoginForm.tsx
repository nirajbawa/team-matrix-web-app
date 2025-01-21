"use client"
import React, { useState, useMemo } from 'react';
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
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/authSchema";
import { Open_Sans } from 'next/font/google';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { User } from "next-auth";
import Link from 'next/link';



const open_sans = Open_Sans({
    display: 'swap',
    subsets: ['latin'],
    weight: ['700'],
});

function LoginForm() {

    const { data: session } = useSession();
    const token = useMemo(() => session?.user as User, [session]);
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
            router.push("/dashboard");
        }
        setIsSubmitting(false);
    }


    return (
        <div className='w-[80%] md:w-[30%] gap-y-10 flex  flex-col ' data-aos="fade-right" data-aos-duration="4000">
            {
                token ? (<>
                    <Link  href={token.role==="User"?"/dashboard":"/admin/dashboard"}>
                        <Button variant="outline" size='lg' className='w-full tracking-wide text-md bg-[#433b3b] border-none'>
                            Dashboard
                        </Button>
                    </Link>
                </>) : (<>
                    <h1 className={`text-3xl sm:text-4xl font-bold ${open_sans.style}`}>Member's Login</h1>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8 w-full h-full sm:pt-10"
                        >

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
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
                                        {/* <FormLabel>Password</FormLabel> */}
                                        <FormControl>
                                            <Input autoComplete="off" type='password' placeholder="Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button disabled={isSubmitting} variant="outline" size='lg' className='w-full tracking-wide text-md bg-[#433b3b] border-none'>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />

                                    </>
                                ) : (
                                    "Login"
                                )}
                            </Button>
                        </form>
                    </Form>
                </>)
            }

        </div>
    )
}

export default LoginForm;