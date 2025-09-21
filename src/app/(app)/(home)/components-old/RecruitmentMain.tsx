"use client"
import useHeroStore from '@/store/useHeroStore';
import React from 'react';
import RecruitmentAnimation from "@/assets/lotties/recruitment.json";
import LottiefilePlayer from '@/components/players/LottiefilePlayer';
import { Open_Sans } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';

const open_sans = Open_Sans({
    display: 'swap',
    subsets: ['latin'],
    weight: ['700'],
})

function RecruitmentMain() {

    const scroll = useHeroStore((state: any) => state.scroll);

    const lottieProps = {
        loop: true,
        autoplay: true,
        animationData: RecruitmentAnimation,
        height: "100%",
        width: "100%",
    };


    return (
        <div className={`pt-24 gap-y-24 md:pt-0 text-white w-full md:px-20 min-h-[100vh] h-full flex-col md:flex-row justify-center items-center relative py-10 bg-[#3a0808] flex md:justify-between ${scroll ? 'md:min-h-[200vh]' : 'md:min-h-svh'}`} style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.35)), linear-gradient(44deg, rgba(55, 27, 35, 0.59) 0%, rgba(62, 24, 29, 0.17) 12%, rgba(12, 6, 5, 0.53) 80%)`
        }}>
            <div data-aos="slide-right" data-aos-duration="4000" className='md:w-[50%] flex gap-5 px-10 flex-col'>

                <TypeAnimation
                    className={`text-center md:text-left text-6xl sm:text-6xl leading-[4.5rem] font-bold ${open_sans.style}`}
                    sequence={[
                        'J',
                        1000,
                        'Jo',
                        1000,
                        'Joi',
                        1000,
                        'Join',
                        1000,
                        'Join ',
                        1000,
                        'Join U',
                        1000,
                        'Join Us',
                        5000
                    ]}
                    wrapper="span"
                    speed={2}
                    deletionSpeed={2}
                    repeat={Infinity}
                />


                <TypeAnimation
                    className='text-xl text-center md:text-left'
                    sequence={[
                        'Innovate,',
                        1000,
                        'Innovate, Build,',
                        1000,
                        'Innovate, Build, Compete',
                        1000,
                        'Innovate, Build, Compete Be',
                        1000,
                        'Innovate, Build, Compete Be Part',
                        1000,
                        'Innovate, Build, Compete Be Part of',
                        1000,
                        'Innovate, Build, Compete Be Part of Team',
                        1000,
                        'Innovate, Build, Compete Be Part of Team Matrix!',
                        5000
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={50}
                    repeat={0}
                />
                <div className='mt-7 flex justify-center items-center md:justify-start'>
                <Button variant="default" size='lg' className='bg-[#433b3b] text-white tracking-wide'>
                        Coming Soon
                </Button>
                </div>
            </div>
            <div className='md:w-[50%] md:h-auto w-full h-80'  data-aos="zoom-in-up" data-aos-duration="4000">
                <LottiefilePlayer
                    loop={lottieProps.loop}
                    autoplay={lottieProps.autoplay}
                    animationData={lottieProps.animationData}
                    height={lottieProps.height}
                    width={lottieProps.width}
                />
            </div>
        </div>
    )
}

export default RecruitmentMain;