"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


interface SponsorsCarouselProps {
  data: any;
}

function SponsorsCarousel({ data }: SponsorsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full bg-transparent"
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((item: any, index: number) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 bg-transparent lg:basis-1/3"
          >
            <div className="p-14 sm:p-1">
              <Card className="rounded-full bg-white border-none shadow-none">
                <CardContent
                  className="flex rounded-full aspect-square items-center justify-center p-6"
                  style={{
                    background: `url(${item.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default SponsorsCarousel;
