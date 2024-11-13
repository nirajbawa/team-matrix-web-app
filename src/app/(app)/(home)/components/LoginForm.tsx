"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
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



const open_sans = Open_Sans({
    display: 'swap',
    subsets: ['latin'], 
    weight: ['700'],
})

function LoginForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof loginSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className='w-[80%] md:w-[30%] gap-y-10 flex  flex-col ' data-aos="fade-right" data-aos-duration="4000">
            <h1 className={`text-3xl sm:text-4xl font-bold ${open_sans.className}`}>Member's Login</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 w-full h-full sm:pt-10"
                >

                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Username</FormLabel> */}
                                <FormControl>
                                    <Input placeholder="Username" {...field} />
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
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant="outline" size='lg' className='w-full tracking-wide text-md bg-[#433b3b] border-none'>Login</Button>
                </form>
            </Form>
        </div>
    )
}

export default LoginForm