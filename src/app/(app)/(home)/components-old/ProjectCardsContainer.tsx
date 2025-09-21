"use client"
import React from 'react';
import useHeroStore from '@/store/useHeroStore';
import ProjectCard from '@/components/cards/ProjectCard';
import sampleImage from "@/assets/images/sample-image.png"
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import BgTexture from "@/assets/images/project-texture.png"


interface ProjectCardsContainerProps {
    data: any;
}


function ProjectCardsContainer({ data }: ProjectCardsContainerProps) {

    const scroll = useHeroStore((state: any) => state.scroll);


    return (
        <div className={`w-full flex bg-black overflow-x-hidden  h-full min-h-svh justify-between`}>

            <div className='text-white'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio impedit eligendi voluptatibus adipisci, enim sint architecto excepturi voluptas vel vero saepe autem pariatur aspernatur debitis, provident aliquid, rem ipsam numquam. Maxime fugiat repellendus, blanditiis repellat earum, quam natus nobis voluptatibus minima sunt veniam illum inventore soluta nulla numquam optio iste perferendis harum? At placeat laborum molestiae sequi animi, vero dolorem fugit harum perferendis exercitationem, architecto minus, beatae laudantium itaque omnis reiciendis! Maiores porro deserunt provident laboriosam, optio sequi? Temporibus mollitia at ad modi atque debitis omnis harum et nesciunt eaque dolore vero eos assumenda natus laboriosam, inventore enim est. Quod id asperiores totam laborum debitis magnam similique vel, quam, nulla tempora iste sed ipsam odio repudiandae veniam! Eius, aspernatur? Ad voluptatibus dolores nihil officia rem aliquam expedita voluptatum quasi amet necessitatibus, eveniet quibusdam nesciunt corporis odit eum facere quos, aspernatur quaerat molestias ab, mollitia veritatis error. Alias ipsam ducimus labore doloremque voluptate, voluptates numquam! Molestias laboriosam excepturi doloremque sit ab temporibus, dignissimos repellat architecto a veritatis quaerat eligendi aperiam? Officia libero doloribus ducimus, cum totam neque corporis beatae voluptate eius iure sit dicta dolorum tempore exercitationem nostrum tempora aut hic magni sunt esse. Nisi ducimus voluptatibus sit recusandae odit? Iste nostrum dignissimos obcaecati velit reprehenderit numquam vel recusandae perferendis sed eum. Veniam eveniet deleniti atque dicta repellendus ratione, iure aut at cumque ex voluptates et! Nobis illo, tempora consequatur ex cumque nostrum pariatur nihil omnis autem consectetur, corrupti ipsa nesciunt, ab beatae alias quaerat non sequi in quisquam quo qui quos iste eos. Quam quidem esse facilis incidunt! Animi eius explicabo vitae vero blanditiis esse culpa beatae, maiores ipsum ea repellendus, facere consequuntur suscipit porro? Ea vel est quam, natus reiciendis quod pariatur dolorum eos impedit non vitae asperiores itaque corrupti unde repellat, mollitia nam, numquam eum quisquam ipsum atque?
            </div>
          

        
          
    

        </div>
    )
}

export default ProjectCardsContainer;