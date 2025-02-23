"use client"
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { AxiosError } from 'axios';
import { ApiResponse } from '@/types/ApiResponse';
import { DecodedToken } from '../../../[token]/page';
import axios from 'axios';
import useAuthStore from '@/store/useAuthStore';
import { signIn } from "next-auth/react";

interface LoginFormProps{
    tokenPayload: DecodedToken;
    token: string;
}

function VerifyCodeForm({tokenPayload, token}:LoginFormProps) {

    const { toast } = useToast();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [code, setCode] = useState<string>("");
    const authData = useAuthStore(
        (state: any) => state.data
      );

      const setData = useAuthStore(
        (state: any) => state.setData
      );

    // 1. Define your form.
    const form = useForm();

    // 2. Define a submit handler.
    async function onSubmit(values:any) {
        setIsSubmitting(true);
        try{
            const payload = {
                id: tokenPayload.id,
                email: tokenPayload.email,
                code: code
            };
            const res = await axios.post<ApiResponse>(`/api/auth/verify`, payload);
            const data = res.data;
            toast({
                className: "dark:bg-black",
                title: "Member Sign Up Completed",
                description: data.message,
                variant: "default",
            });

            const result = await signIn("credentials", {
                redirect: false,
                identifier: authData.email,
                password: authData.password,
            });

            setData({
                email: "",
                password: ""
            })

            if (result?.url) {
                router.replace("/dashboard");
            }
        }
        catch(error)
        {
            const axiosError = error as AxiosError<ApiResponse>;
            toast({
                title: "Failed",
                description: axiosError.response?.data.message,
                variant: "destructive",
            });
        }
    
        setIsSubmitting(false);
    }

    return (
        <div className='w-full md:min-h-[100vh] flex justify-center items-center'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 md:w-[25%] flex flex-col gap-2 rounded-lg md:h-full shadow-[#0000001a] shadow-2xl p-5 py-10"
                >
                    <div className='text-2xl capitalize mb-1 font-bold text-center'>
                        Verify Email
                    </div>
                    <p className='text-center'>Check inbox of {tokenPayload.email}</p>

                    <div className='w-full flex justify-center items-center'>
                    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    value={code}
                    onChange={(value) => setCode(value)}
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    </div>
                   

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
        </div>
    )
}

export default VerifyCodeForm;