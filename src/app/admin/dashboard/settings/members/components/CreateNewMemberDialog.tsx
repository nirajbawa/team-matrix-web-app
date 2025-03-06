"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  DialogFooter,
} from "@material-tailwind/react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import { membersSchema } from "@/schemas/membersSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { InputNormal } from "@/components/ui/inputNormal";
import { Label } from "@/components/ui/label";
import LottiefilePlayer from "@/components/players/LottiefilePlayer";
import LoadingAnimation from "@/assets/lotties/gray-loading.json";
import { Loader2 } from "lucide-react";

interface CreateNewMemberDialogProps {
  open: boolean;
  handleOpen: () => void;
  fetchData: () => void;
}

function CreateNewMemberDialog({
  open,
  handleOpen,
  fetchData,
}: CreateNewMemberDialogProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);
  const [upload, setUpload] = useState<boolean>(false);

  const lottieProps = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    height: "5rem",
    width: "5rem",
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof membersSchema>>({
    resolver: zodResolver(membersSchema),
    defaultValues: {
      name: "",
      position: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof membersSchema>) {
    setIsSubmitting(true);
    try {
      if (file == null) {
        toast({
          title: "Upload Image",
          description: "Please upload image also",
          variant: "destructive",
        });
      } else {
        const payload = {
          name: values.name,
          position: values.position,
          image: file,
        };
        const res = await axios.post<ApiResponse>(
          `/api/admin/settings/members`,
          payload
        );
        const data = res.data;
        toast({
          className: "dark:bg-black",
          title: "New Member Added",
          description: data.message,
          variant: "default",
        });
        fetchData();
        handleOpen();
        form.setValue("name", "");
        form.setValue("position", "");
        setFile(null);
      }
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

  useEffect(() => {
    form.setValue("name", "");
    form.setValue("position", "");
    setFile(null);
  }, []);

  const uploadFile = async (file: any) => {
    setUpload(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post<ApiResponse>(
        "/api/dashboard/uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFile(response.data.data.imgUrl);
    } catch (error: any) {}
    setUpload(false);
  };

  const handleFileData = (e: React.ChangeEvent<any>) => {
    uploadFile(e.target.files[0]);
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-blue-gray-50 dark:bg-gray-900"
      >
        <DialogHeader className="p-5 pl-10 pt-10  dark:text-gray-100">
          Add New Member
        </DialogHeader>
        <DialogBody>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full h-full sm:pt-10"
            >
              <div className="flex flex-col px-5 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputNormal
                          className="dark:placeholder:text-gray-300 text-gray-50 dark:border-gray-400"
                          autoComplete="off"
                          placeholder="Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputNormal
                          className="dark:placeholder:text-gray-300 text-gray-50 dark:border-gray-400"
                          autoComplete="off"
                          placeholder="Position"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Label className=" dark:text-gray-100">Select Image </Label>
                  <div className="flex justify-center items-center">
                    <Input
                      className="w-full h-full dark:placeholder:text-gray-300 text-gray-50 dark:border-gray-400"
                      type="file"
                      onChange={handleFileData}
                      accept=".jpeg,.jpg,.png,.svg,.webp"
                    />
                    {upload ? (
                      <LottiefilePlayer
                        loop={lottieProps.loop}
                        autoplay={lottieProps.autoplay}
                        animationData={lottieProps.animationData}
                        height={lottieProps.height}
                        width={lottieProps.width}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end pr-5 items-center">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="gradient"
                  color="green"
                  className="bg-gray-900 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    "Add"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default CreateNewMemberDialog;
