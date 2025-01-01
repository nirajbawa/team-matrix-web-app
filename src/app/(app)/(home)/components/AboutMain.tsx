"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import DownArrow from "@/assets/images/arrow.png";


interface AboutMainProps {
    about: string;
}


function AboutMain({ about }: AboutMainProps) {

    const videoPlayer = useRef<HTMLVideoElement>(null);
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const [fullText, setFullText] = useState<boolean>(false);

    const about1 = "Team Matrix is the prestigious robotics club at K.K. Wagh Institute of Engineering Education and Research, Nashik (An Autonomous Institute), affiliated with SPPU. Our club brings together passionate students from various technical branches, including Mechanical, Electronics and Telecommunication, Robotics, and Computer Engineering. By collaborating across disciplines, we aim to create innovative robotic solutions that showcase the power of interdisciplinary engineering.Our journey has been marked by numerous accomplishments, with one of the most notable being our success in various hackathons. We proudly secured the 2nd position in the ISRO Hackathon, where we developed a rover for the Chandrayaan-3 mission, competing against top-tier institutions like IITs and NITs.At Team Matrix, we believe in pushing the boundaries of technology, working collectively to achieve engineering marvels. Our club fosters an environment where creativity, knowledge, and technical expertise come together to shape the future of robotics."

    useEffect(() => {
        setVideoSrc("/videos/about-video.mp4"); 
    }, []);


    const setControls = (): void => {
        videoPlayer.current?.setAttribute("controls", "true");
        videoPlayer.current?.play();
    }

    const makeTextFull = (): void =>{
        setFullText((state)=>!state);
    }

    return (
        <div className='bg-[#3a0808] min-h-[100vh] h-full flex-col-reverse overflow-hidden px-5 py-10 lg:flex-row text-white flex w-full gap-14 md:gap-36 pb-10 lg:px-28 justify-center items-center'
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(135deg, rgba(55, 27, 35, 0.8688725490196079) 0%, rgba(62, 24, 29, 0.7120098039215687) 12%, rgb(12 6 5 / 51%) 80%)` }}>
            <div data-aos="slide-up" data-aos-duration="4000" className='w-full transition-all ease-linear duration-100 md:w-[50%] quote-box text-center md:text-left flex justify-center items-center p-3 py-10 md:p-10 border-2 sponsors_card_bg border-white rounded-xl'>
                <div className={`${fullText?"hidden":""} sm:hidden`}>
                {(about1.length)<=587?<>{about1}</>:
                (<>
                {about.slice(0, 587)}...........
                <div className='sm:hidden read-more z-10 absolute rounded-b-xl flex items-end pb-5 justify-center bg-black w-full h-48 left-0 bottom-0'>
                    <div className='w-14 h-14' onClick={makeTextFull}>
                        <Image className='w-full h-full' alt="img" width={500} height={300} src={DownArrow} />
                    </div>
                </div>
                </>)
                }
                </div>
                <div  className={`${fullText?"block":"hidden"} pb-14 sm:hidden`}>
                {about}
                <div className={`sm:hidden read-more z-10 absolute rounded-b-xl flex items-end pb-5 justify-center bg-black w-full h-48 left-0 bottom-0`}>
                    <div className='w-14 h-14' onClick={makeTextFull}>
                        <Image className='w-full h-full rotate-180' alt="img" width={500} height={300} src={DownArrow} />
                    </div>
                </div>
                </div>
               
                <div className={`hidden sm:block`}>
                    {about}
                </div>
            </div>
            <div className='md:w-[50%] md:h-auto w-full' data-aos="zoom-in-up" data-aos-duration="4000">


                {videoSrc ? (
                    <video onClick={setControls} ref={videoPlayer} className='w-full cursor-pointer rounded-xl border-2 border-white h-auto' preload="none" poster="/videos/video-play-button.png">
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    )
}

export default AboutMain;