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
        <div className='h-[20rem] md:hidden w-full flex justify-center items-center'>   
            <Ztext
                depth='1rem'
                direction='both'
                event='pointer'
                eventRotation='30deg'
                eventDirection='default'
                fade={false}
                layers={10}
                perspective='500px'
                style={{
                    fontSize: '4rem',
                    textAlign:"center"
                }}
            > 
            <LottiefilePlayer
            loop={lottieProps.loop}
            autoplay={lottieProps.autoplay}
            animationData={lottieProps.animationData}
            height={lottieProps.height}
            width={lottieProps.width}
        />
        </Ztext>  
        </div>
    )
}

export default HeaderAnimation;