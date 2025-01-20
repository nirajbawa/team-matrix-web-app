"use client";
import React from 'react';
import DroneAnimation from "@/assets/lotties/drone.json";
import LottiefilePlayer from '@/components/players/LottiefilePlayer';
import Ztext from 'react-ztext';

function HeaderAnimation() {
    const lottieProps = {
        loop: true,
        autoplay: true,
        animationData: DroneAnimation,
        height: "25rem",
        width: "100%",
    };

    return (
        <div className='h-[15rem] md:hidden w-full flex justify-center items-center'>   
            <LottiefilePlayer
            loop={lottieProps.loop}
            autoplay={lottieProps.autoplay}
            animationData={lottieProps.animationData}
            height={lottieProps.height}
            width={lottieProps.width}
        />
        </div>
    )
}

export default HeaderAnimation;