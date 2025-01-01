"use client"
import React from 'react';
import useHeroStore from '@/store/useHeroStore';
import ProjectCard from '@/components/cards/ProjectCard';


interface ProjectCardsContainerProps{
    data: any;
}


function ProjectCardsContainer({data}:ProjectCardsContainerProps) {

    const scroll = useHeroStore((state: any) => state.scroll);


    return (
        <div className={` text-white w-full items-start pt-24 pb-20 px-5 sm:px-10 md:px-20 lg:px-28  ${scroll ? 'md:min-h-[200vh]' : 'md:min-h-svh'} flex-col gap-24 md:gap-y-32  lg:justify-center justify-start md:items-center relative  bg-[#3a0808] flex md:justify-between`} style={{
            backgroundImage: `linear-gradient(rgb(0 0 0 / 30%), rgb(0 0 0 / 57%)), linear-gradient(68deg, rgb(55 27 35 / 92%) 0%, rgb(62 24 29 / 51%) 12%, rgb(12 6 5 / 30%) 80%)`
        }}>

           {
            data && data.map((item:any, index:number)=>(
                <ProjectCard
                key={index}
                text={item.text}
                image={item.image}
                imageDirection={index % 2 != 0 ? "flex-row" : "flex-row-reverse"}
                cardAnimation={index % 2 != 0 ? "slide-left" : "slide-right"}
            />
            ))
           }
        </div>
    )
}

export default ProjectCardsContainer;