"use client"
import React, { useEffect, useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import *  as z from "zod";
import { sponsors1Schema, sponsors2Schema } from '@/schemas/settingsSchema';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from '@/hooks/use-toast';
import { ApiResponse } from '@/types/ApiResponse';
import axios, { AxiosError } from 'axios';
import { Loader2 } from "lucide-react";


function SponsorAbout() {

  const { toast } = useToast();
  const [isSubmitting1, setIsSubmitting1] = useState<boolean>(false);
  const [isSubmitting2, setIsSubmitting2] = useState<boolean>(false);


  const form1 = useForm<z.infer<typeof sponsors1Schema>>({
    resolver: zodResolver(sponsors1Schema),
    defaultValues: {
      box1: ""
    },
  })

  async function onSubmit1(values: z.infer<typeof sponsors1Schema>) {
    setIsSubmitting1(true);
    try {

      const payload = {
        text: values.box1,
        id: 1
      };

      const res = await axios.post<ApiResponse>(`/api/admin/settings/sponsors-about`, payload);
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

  const form2 = useForm<z.infer<typeof sponsors2Schema>>({
    resolver: zodResolver(sponsors2Schema),
    defaultValues: {
      box2: ""
    },
  })

  async function onSubmit2(values: z.infer<typeof sponsors2Schema>) {
    setIsSubmitting2(true);
    try {

      const payload = {
        text: values.box2,
        id: 2
      };

      const res = await axios.post<ApiResponse>(`/api/admin/settings/sponsors-about`, payload);
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
    setIsSubmitting2(false);
  }


  const fetchedAboutData = async() =>{
    try{
      const res = await axios.get<ApiResponse>(`/api/admin/settings/sponsors-about`);
      const data = res.data;

      data.data.forEach((item:any, index:number)=>{
        const form = eval("form"+item.index);
        form.setValue("box"+item.index, item.text);
      })
    }
    catch(error){

    }
  }

  useEffect(()=>{
    fetchedAboutData();
  }, []);

  return (
    <div className='w-full p-10 flex gap-x-10'>
      <Form {...form1}>
        <form onSubmit={form1.handleSubmit(onSubmit1)} className="w-[50%] space-y-6">
          <FormField
            control={form1.control}
            name="box1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About For Box 1 : </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="About 1"
                    className="resize-none h-60"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="outline" className='bg-gray-900 text-white' type="submit">
            {isSubmitting1 ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              "save"
            )}
          </Button>
        </form>
      </Form>

      <Form {...form2}>
        <form onSubmit={form2.handleSubmit(onSubmit2)} className="w-[50%] space-y-6">
          <FormField
            control={form2.control}
            name="box2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About For Box 2 : </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="About 2"
                    className="resize-none h-60"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="outline" className='bg-gray-900 text-white' type="submit">
            {isSubmitting2 ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              "save"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default SponsorAbout;