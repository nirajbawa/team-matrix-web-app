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
import { addUserSchema } from "@/schemas/addUserSchema";
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from "lucide-react";
import axios from 'axios';
import { ApiResponse } from "@/types/ApiResponse";


function InvitationForm() {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);


    // 1. Define your form.
    const form = useForm<z.infer<typeof addUserSchema>>({
        resolver: zodResolver(addUserSchema),
        defaultValues: {
            email: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof addUserSchema>) {
        setIsSubmitting(true);
        try {
            const res = await axios.post<ApiResponse>(`/api/admin/add-user`, {email: values.email});
            const data = res.data;
            toast({
                className: "dark:bg-black",
                title: "Invitation Sended Successfully",
                description: data.message,
                variant: "default",
            });
            form.resetField("email")
        }
        catch{
            toast({
                title: "Invitation Failed",
                description: "Failed to send invitation mail",
                variant: "destructive",
            });
        }
        setIsSubmitting(false);
    }

    return (
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
                            {/* <FormLabel>Username</FormLabel> */}
                            <FormControl>
                                <InputNormal placeholder="Email" {...field} />
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
                            "Send Invitation"
                        )}
                    </Button>

                </div>
            </form>
        </Form>
    )
}

export default InvitationForm;