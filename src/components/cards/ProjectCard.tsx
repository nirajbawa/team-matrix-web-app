"use client"
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";


interface ProjectCardProps {
    image: any;
    text: string;
    cardAnimation: string;
    imageDirection: string;
}
import Autoplay from "embla-carousel-autoplay";


export function ImageCarousel({ data }: any) {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full bg-transparent h-full"
            plugins={[
                Autoplay({
                    delay: 2000,
                    stopOnInteraction: false,
                }),
            ]}
        >
            <CarouselContent className='h-full'>
                {data.map((item: any, index: number) => (
                    <CarouselItem key={index} className="w-full  object-cover">
                        <Card className="border-none shadow-none h-full">
                            <CardContent className="flex items-center h-full rounded-xl justify-center p-0">
                                <Image
                                    width={500}
                                    height={500}
                                    data-aos="zoom-in"
                                    data-aos-duration="4000"
                                    src={item}
                                    alt="Picture of the author"
                                    className='rounded-xl object-cover h-[20rem] w-full'
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='hidden sm:flex bg-transparent' />
            <CarouselNext className='hidden sm:flex bg-transparent' />
        </Carousel>
    )
}



function ProjectCard({ image, text, cardAnimation, imageDirection }: ProjectCardProps) {
    return (
        <div className='bg-black w-full min-h-screen'>

        </div>
    )
}

export default ProjectCard;