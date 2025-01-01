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
        <div className={`w-full flex justify-between flex-col md:flex-row gap-y-20 md:gap-y-16`}>
            {
                imageDirection === "flex-row-reverse" ? (<div data-aos={cardAnimation} data-aos-duration="4000" className='md:w-[50%] quote-box text-center flex justify-center items-center p-3 py-10 md:p-10 border-2 sponsors_card_bg border-white rounded-xl'>
                    <p className='md:leading-9'>{text}</p>
                </div>) : ""
            }
            <div className='md:w-[40%] object-cover'
            >
                <ImageCarousel data={image} />
            </div>
            {
                imageDirection === "flex-row" ? (<div data-aos={cardAnimation} data-aos-duration="4000" className='md:w-[50%] quote-box text-center flex justify-center items-center p-3 py-10 md:p-10 border-2 sponsors_card_bg border-white rounded-xl'>
                    <p className='md:leading-9'>{text}</p>
                </div>) : ""
            }
        </div>
    )
}

export default ProjectCard;