"use client"
import React, { useState } from 'react';
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
import { signInSchema } from "@/schemas/authSchema";
import axios, { AxiosError } from 'axios';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { ApiResponse } from '@/types/ApiResponse';
import { DecodedToken } from '../page';
import useAuthStore from '@/store/useAuthStore';


interface LoginFormProps{
    tokenPayload: DecodedToken;
    token: string;
}

function LoginForm({tokenPayload, token}:LoginFormProps) {

    const { toast } = useToast();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const setData = useAuthStore(
        (state: any) => state.setData
      );
    

    // 1. Define your form.
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            name: "",
            mobile: "",
            address: "",
            password: "",
            confirm: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof signInSchema>) {
        setIsSubmitting(true);
        try {
            const payload = {
                id: tokenPayload.id,
                email: tokenPayload.email,
                username: values.name,
                password: values.password,
                address: values.address,
                mobile: values.mobile
            };
            const res = await axios.post<ApiResponse>(`/api/auth/sign-up`, payload);
            const data = res.data;
            toast({
                className: "dark:bg-black",
                title: "Invitation Sended Successfully",
                description: data.message,
                variant: "default",
            });
            setData({
                email: tokenPayload.email,
                password: values.password
            })
            router.replace(`/admin/auth/verify/${token}`);
        }
        catch (error){
            const axiosError = error as AxiosError<ApiResponse>;
            toast({
                title: "Member Sign Up Failed",
                description: axiosError.response?.data.message,
                variant: "destructive",
            });
        }
        setIsSubmitting(false);
    }

    return (
        <div className='flex w-full min-h-[100vh] justify-center items-center'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 md:w-[25%] flex flex-col gap-1 rounded-lg h-full shadow-[#0000001a] shadow-2xl p-5 py-10"
                >
                    <div className='text-2xl capitalize mb-1 font-bold text-center'>
                        Complete Members Sign Up Process
                    </div>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <InputNormal autoComplete="off"  placeholder="Full Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <InputNormal autoComplete="off"  type="tel" placeholder="Mobile" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <InputNormal placeholder="Address" {...field} />
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
                                    <InputNormal type='password' placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirm"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <InputNormal  type='password' placeholder="Confirm Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='w-full flex justify-center items-center'>
                        <Button disabled={isSubmitting} variant="outline" size='lg' className='bg-gray-900 text-white'>  {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />

                            </>
                        ) : (
                            "Next"
                        )}</Button>

                    </div>
                </form>
            </Form>
        </div>
    )
}

export default LoginForm;