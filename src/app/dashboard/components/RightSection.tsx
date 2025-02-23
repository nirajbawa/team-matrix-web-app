"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { editMemberSchema } from "@/schemas/authSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { InputNormal } from "@/components/ui/inputNormal";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import useUserStore from "@/store/useUserStore";

function RightSection({ data }: any) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();
  const userData = useUserStore((state: any) => state.data);

  // 1. Define your form.
  const form = useForm<z.infer<typeof editMemberSchema>>({
    resolver: zodResolver(editMemberSchema),
    defaultValues: {
      name: data?.username,
      mobile: data?.mobile,
      address: data?.address,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof editMemberSchema>) {
    setIsSubmitting(true);
    try {
      const payload = {
        username: values.name,
        mobile: values.mobile,
        address: values.address,
        profilePic: userData.profilePic,
      };
      const res = await axios.patch<ApiResponse>(
        `/api/dashboard/user`,
        payload
      );
      const data = res.data;
      toast({
        className: "dark:bg-black",
        title: "Profile Updated",
        description: data.message,
        variant: "default",
      });
    } catch (error) {
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
    <div className="md:min-h-[100vh] h-full w-full md:w-[50%] flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full flex flex-col gap-2 h-full"
        >
          <div className="text-3xl capitalize mt-20 md:mt-0 mb-5 font-bold text-left">
            Member's Details
          </div>
          <div className="flex gap-10 flex-col md:pr-20">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputNormal placeholder="Full Name" {...field} />
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
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputNormal placeholder="Mobile No." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-end md:justify-start items-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-gray-900 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  </>
                ) : (
                  "Update"
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default RightSection;
