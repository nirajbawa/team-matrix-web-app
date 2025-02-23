"use client";
import React from "react";
import Image from "next/image";
import CP2 from "@/assets/images/cp2.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Sponsors } from "@/models/Sponsors";

function SponsorsCards({ sponsorItem }: { sponsorItem: Sponsors[] }) {
  return (
    <div className="flex justify-center flex-wrap gap-x-2 gap-y-5 py-10 px-5">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full bg-transparent justify-center items-center md:px-20"
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }) as unknown as any,
        ]}
      >
        <CarouselContent>
          {sponsorItem.map((itemData: Sponsors, index: number) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 md-xs:basis-1/4"
            >
              <div className="p-1 md-xs:p-10">
                <Card className="rounded-full">
                  <CardContent className="p-0 flex aspect-square items-center justify-center">
                    <Image
                      src={itemData.image}
                      alt="brand logo"
                      className="rounded-full"
                      width={500}
                      height={500}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default SponsorsCards;
