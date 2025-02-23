"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IconButton } from "@material-tailwind/react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useToast } from "@/hooks/use-toast";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";

interface SponsorsCarouselProps {
  data: any;
  fetchData: () => void;
}

function SponsorsCarousel({ data, fetchData }: SponsorsCarouselProps) {
  const { toast } = useToast();
  const [showBtn, setShowBtn] = useState<number | null>(null);

  const deleteSponsor = async (id: string) => {
    try {
      const res = await axios.delete<ApiResponse>(
        `/api/admin/settings/sponsors/${id}`
      );
      const data = res.data;
      toast({
        className: "dark:bg-black",
        title: "Sponsor Deleted",
        description: data.message,
        variant: "default",
      });
      fetchData();
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Failed",
        description: axiosError.response?.data.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full bg-transparent"
      plugins={[
        Autoplay({
          delay: 2000,
        }) as unknown as any,
      ]}
    >
      <CarouselContent>
        {data.map((item: any, index: number) => {
          return (
            <CarouselItem
              key={index}
              className="md:basis-1/2 bg-transparent lg:basis-1/3"
            >
              <div className="p-1">
                <Card
                  className="bg-transparent cursor-pointer rounded-full"
                  style={{
                    background: `url(${item.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <CardContent
                    onMouseLeave={() => {
                      setShowBtn(null);
                    }}
                    onMouseEnter={() => setShowBtn(index)}
                    className="flex transition-all ease-in-out rounded-md duration-100 hover:bg-[#00000014] aspect-square items-center justify-center p-6"
                  >
                    <IconButton
                      color="red"
                      onClick={() => {
                        deleteSponsor(item._id);
                      }}
                      className={`${showBtn == index ? "" : "hidden"}`}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}

export default SponsorsCarousel;
