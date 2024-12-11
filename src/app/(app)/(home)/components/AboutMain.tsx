import React from 'react';
import RobotAnimation from "@/assets/lotties/robot.json";
import LottiefilePlayer from '@/components/players/LottiefilePlayer';


interface AboutMainProps {
    about: string;
}


function AboutMain({ about }: AboutMainProps) {

    const lottieProps = {
        loop: true,
        autoplay: true,
        animationData: RobotAnimation,
        height: "100%",
        width: "100%",
    };


    return (
        <div className='bg-[#3a0808] min-h-[100vh] h-full flex-col-reverse overflow-hidden px-10 py-10 lg:flex-row text-white flex w-full gap-11 md:gap-36 pb-10 lg:px-28 justify-center items-center'
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(135deg, rgba(55,27,35,0.8688725490196079) 0%, rgba(62,24,29,0.7120098039215687) 12%, rgba(12,6,5,0.633578431372549) 80%)` }}>
            <div data-aos="slide-up" data-aos-duration="4000" className='md:w-[50%] quote-box text-center md:text-left flex justify-center items-center p-3 py-10 md:p-10 border-2 sponsors_card_bg border-white rounded-xl'>
                {about}
            </div>
            <div className='md:w-[50%] md:h-auto w-full h-80' data-aos="zoom-in-up" data-aos-duration="4000">
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

export default AboutMain;