"use client"
import { useToast } from '@/hooks/use-toast';
import React, { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import *  as z from "zod";
import axios, { AxiosError } from 'axios';
import { ApiResponse } from '@/types/ApiResponse';
import { aboutSchema } from '@/schemas/settingsSchema';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";


function AboutMain() {


    const { toast } = useToast();
    const [isSubmitting1, setIsSubmitting1] = useState<boolean>(false);


    const form1 = useForm<z.infer<typeof aboutSchema>>({
        resolver: zodResolver(aboutSchema),
        defaultValues: {
            about: ""
        },
    })

    async function onSubmit1(values: z.infer<typeof aboutSchema>) {
        setIsSubmitting1(true);
        try {

            const payload = {
                text: values.about,
                id: 1
            };

            const res = await axios.post<ApiResponse>(`/api/admin/settings/about`, payload);
            const data = res.data;
            toast({
                className: "dark:bg-black",
                title: "Updated",
                description: data.message,
                variant: "default",
            });


        }
        catch (error) {
            const axiosError = error as AxiosError<ApiResponse>;
            toast({
                title: "Failed",
                description: axiosError.response?.data.message,
                variant: "destructive",
            });
        }
        setIsSubmitting1(false);

    }


    const fetchedAboutData = async() =>{
        try{
          const res = await axios.get<ApiResponse>(`/api/admin/settings/about`);
          const data = res.data;
    
          data.data.forEach((item:any, index:number)=>{
            const form = eval("form"+item.index);
            form.setValue("about", item.text);
          })
        }
        catch(error){
    
        }
      }

      useEffect(()=>{
        fetchedAboutData();
      }, [])

    return (
        <div>
            <Form {...form1}>
                <form onSubmit={form1.handleSubmit(onSubmit1)} className="w-full space-y-6">
                    <FormField
                        control={form1.control}
                        name="about"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>About : </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter About"
                                        className="resize-none h-80"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex justify-end items-center'> 
                        <Button variant="outline" className='bg-gray-900 text-white' type="submit">
                            {isSubmitting1 ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                </>
                            ) : (
                                "save"
                            )}
                        </Button>
                    </div>

                </form>
            </Form>

        </div>
    )
}

export default AboutMain;