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
import { useEffect } from 'react';
import axios from 'axios';
import { ApiResponse } from '@/types/ApiResponse';

const HeroSection = () => {

    const scroll = useHeroStore((state:any)=>state.scroll);
    const setScroll = useHeroStore((state:any)=>state.setScroll);

    const lottieProps = {
        loop: true,
        autoplay: true,
        animationData: ArrowAnimation,
        height: "5rem",
        width: "5rem",
    };

    useEffect( ()=>{
        try{
            (async()=>{
                await axios.post<ApiResponse>("/api/visitors");
            })()
        }
        catch(error)
        {

        }
    }, [])

    return (
        <div  className={`w-full  ${scroll?'h-[110vh]':'h-[100vh]'} bg-no-repeat bg-cover flex  align-middle pb-5 items-center flex-col lg:bg-fixed`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HeroSectioBG.src})` }}>
            <AOSProvider>
                <Header />
                <div className='flex justify-between items-center gap-10 text-white' data-aos="fade-up" >
                    <Link href="" data-aos="fade" data-aos-duration="4000" ><InstagramIcon fontSize='large' /></Link>
                    <Link href="" data-aos="fade" data-aos-duration="4000"><MailOutlineIcon fontSize='large' /></Link>
                </div>
                <Link href="#about" onClick={()=>setScroll(true)}>
                <LottiefilePlayer
                    loop={lottieProps.loop}
                    autoplay={lottieProps.autoplay}
                    animationData={lottieProps.animationData}
                    height={lottieProps.height}
                    width={lottieProps.width}
                />
                </Link>
                
            </AOSProvider>
        </div>
    )
}

export default HeroSection;