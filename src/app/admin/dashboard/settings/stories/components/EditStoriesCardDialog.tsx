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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import LottiefilePlayer from "@/components/players/LottiefilePlayer";
import LoadingAnimation from "@/assets/lotties/gray-loading.json";
import { Loader2 } from "lucide-react";
import { IconButton } from "@material-tailwind/react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { storiesSchema } from "@/schemas/settingsSchema";
import { Textarea } from "@/components/ui/textarea";
import { CurrentItem } from "./Stories";

interface CreateNewProjectDialogProps {
  open: boolean;
  handleOpen: () => void;
  data: CurrentItem | null;
  fetchData: () => void;
}

function EditStoriesCardDialog({
  open,
  handleOpen,
  data,
  fetchData,
}: CreateNewProjectDialogProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [file, setFile] = useState<string | null>(null);
  const [upload, setUpload] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const [showBtn, setShowBtn] = useState<number | null>(null);

  const lottieProps = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    height: "5rem",
    width: "5rem",
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof storiesSchema>>({
    resolver: zodResolver(storiesSchema),
    defaultValues: {
      text: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof storiesSchema>) {
    setIsSubmitting(true);
    try {
      if (images.length == 0) {
        toast({
          title: "Upload Images",
          description: "Please upload at 1 images",
          variant: "destructive",
        });
      } else {
        const payload = {
          text: values.text,
          images: images,
        };
        const res = await axios.post<ApiResponse>(
          `/api/admin/settings/stories/${data?._id}`,
          payload
        );
        const resData = res.data;
        toast({
          className: "dark:bg-black",
          title: "New Project Added",
          description: resData.message,
          variant: "default",
        });
        fetchData();
        handleOpen();
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
    if (data != null) {
      form.setValue("text", data.text);
      setFile(null);
      if (data?.images.length > 0) {
        data?.images?.forEach((item) => setImages((state) => [...state, item]));
      } else {
        setImages([]);
      }
    }
  }, [data]);

  const uploadFile = async (file: File) => {
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
    } catch {}
    setUpload(false);
  };

  const deleteButton = (id: number) => {
    setImages((state: string[]) =>
      state.filter((item: string, index: number) => index !== id)
    );
  };

  useEffect(() => {
    if (file != null) {
      setImages((state) => [...state, file]);
    }
  }, [file]);

  useEffect(() => {
    if (images.length === 2) {
      setImages((state) => state.slice(1));
    }
  }, [images]);

  const handleFileData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Safely access the first file
    if (file) {
      uploadFile(file);
    } else {
      console.warn("No file selected");
    }
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-blue-gray-50 dark:bg-gray-900"
      >
        <DialogHeader className="p-5 pl-10 pt-10 dark:text-gray-100">
          Edit Story
        </DialogHeader>
        <DialogBody className="h-[30rem] overflow-y-scroll">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full h-full sm:pt-10"
            >
              <div className="flex flex-col px-5 gap-6">
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          autoComplete="off"
                          className="dark:placeholder:text-gray-300 resize-none h-32 text-gray-50 dark:border-gray-400"
                          placeholder="Image Description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Label className="dark:text-gray-100">
                    Select Image (Image must be under 3 MB){" "}
                  </Label>
                  <div className="flex justify-center items-center">
                    <Input
                      className="w-full h-full"
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
                <div className="w-full flex justify-between flex-wrap gap-y-5">
                  {images &&
                    images.map((item, index) => (
                      <div
                        className="w-64 h-40 bg-no-repeat bg-center rounded-xl"
                        key={index}
                        style={{
                          backgroundImage: `url(${item})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div
                          onMouseLeave={() => {
                            setShowBtn(null);
                          }}
                          onMouseEnter={() => setShowBtn(index)}
                          className="w-64 h-40 flex justify-center items-center rounded-xl transition-all duration-150 cursor-pointer hover:bg-[#00000073] absolute"
                        >
                          <IconButton
                            color="red"
                            onClick={() => {
                              deleteButton(index);
                            }}
                            className={`${showBtn == index ? "" : "hidden"}`}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      </div>
                    ))}
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

export default EditStoriesCardDialog;
