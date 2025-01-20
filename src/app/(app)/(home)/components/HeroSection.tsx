"use client"
import HeroSectioBG from '@/assets/images/s2.jpg';
import Link from 'next/link';
import Header from "./Header";
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AOSProvider from "@/components/providers/AOSProvider";
import ArrowAnimation from "@/assets/lotties/arrow-animation.json";
import LottiefilePlayer from '@/components/players/LottiefilePlayer';
import useHeroStore from '@/store/useHeroStore';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ApiResponse } from '@/types/ApiResponse';
import HeaderAnimation from './HeaderAnimation';
import Script from 'next/script';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const HeroSection = () => {

    const scroll = useHeroStore((state: any) => state.scroll);
    const setScroll = useHeroStore((state: any) => state.setScroll);

    const lottieProps = {
        loop: true,
        autoplay: true,
        animationData: ArrowAnimation,
        height: "5rem",
        width: "5rem",
    };


    useEffect(() => {
        try {
            (async () => {
                await axios.post<ApiResponse>("/api/visitors");
            })()
        }
        catch (error) {

        }
    }, [])

    return (

        <div id="main-header-bg" className={`w-full  ${scroll ? 'h-[95vh] md:h-[110vh]' : 'h-[95vh] md:h-[100vh]'} bg-no-repeat bg-cover flex bg-[#050505] align-middle pb-5 items-center flex-col lg:bg-fixed`}
        >
            {/* style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HeroSectioBG.src})` }} */}
            <AOSProvider>
                <Header />
                {/* <HeaderAnimation /> */}
                <div className='flex justify-between items-center gap-10 text-white' data-aos="fade-up" >
                    <Link href="" data-aos="fade" data-aos-duration="4000" ><InstagramIcon fontSize='large' /></Link>
                    <Link href="" data-aos="fade" data-aos-duration="4000"><LinkedInIcon fontSize='large' /></Link>
                    <Link href="" data-aos="fade" data-aos-duration="4000"><MailOutlineIcon fontSize='large' /></Link>

                </div>
                <Link href="#about" onClick={() => setScroll(true)}>
                    <LottiefilePlayer
                        loop={lottieProps.loop}
                        autoplay={lottieProps.autoplay}
                        animationData={lottieProps.animationData}
                        height={lottieProps.height}
                        width={lottieProps.width}
                    />
                </Link>
            </AOSProvider>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
                strategy="beforeInteractive"
            />
            <Script id="script">
                {`VANTA.NET({
                    el: "#main-header-bg",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0xff0000,
                    points: 7.00,
                    maxDistance: 18.00,
                    spacing: 20.00,
                    showDots: false,
                    backgroundAlpha: 0,
                });`}
            </Script>
        </div>

    )
}

export default HeroSection;