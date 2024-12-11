"use client"
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    image: any;
    text: string;
    cardAnimation: string;
    imageDirection: string;
}

function ProjectCard({ image, text, cardAnimation, imageDirection }: ProjectCardProps) {
    return (
        <div className={` w-full flex justify-between flex-col md:flex-row gap-y-20 md:gap-y-16`}>
            {
                imageDirection === "flex-row-reverse" ? (<div data-aos={cardAnimation} data-aos-duration="4000" className='md:w-[50%] quote-box text-center flex justify-center items-center p-3 py-10 md:p-10 border-2 sponsors_card_bg border-white rounded-xl'>
                    <p className='leading-9'>{text}</p>
                </div>) : ""
            }
            <div className='md:w-[40%]'
            >
                <Image
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                    src={image}
                    alt="Picture of the author"
                    className='rounded-xl'
                    width={500}
                    height={500}
                />
            </div>
            {
                imageDirection === "flex-row" ? (<div data-aos={cardAnimation} data-aos-duration="4000" className='md:w-[50%] quote-box text-center flex justify-center items-center p-3 py-10 md:p-10 border-2 sponsors_card_bg border-white rounded-xl'>
                    <p className='leading-9'>{text}</p>
                </div>) : ""
            }
        </div>
    )
}

export default ProjectCard;