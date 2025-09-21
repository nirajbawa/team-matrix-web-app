"use client"
import React from 'react';
import SponsorsCarousel from './SponsorsCarousel';
import useHeroStore from '@/store/useHeroStore';


interface SponsorsMainProps{
    about1:any;
    about2:any;
    c1data:any;
    c2data:any;
}

function SponsorsMain({about1, about2, c1data, c2data}:SponsorsMainProps) {

    const scroll = useHeroStore((state: any) => state.scroll);


    try {
        return (
            <div className={`pt-24 text-white w-full md:px-20 min-h-svh h-full flex-col md:flex-row justify-center items-center relative py-20 bg-[#3a0808] flex md:justify-between ${scroll ? 'md:min-h-[200vh]' : 'md:min-h-svh'}`} style={{
                backgroundImage: `linear-gradient(rgb(0 0 0 / 43%), rgba(0, 0, 0, 0.35)), linear-gradient(49deg, rgba(55, 27, 35, 0.59) 0%, rgba(62, 24, 29, 0.3) 12%, rgba(12, 6, 5, 0.53) 80%)`
            }}>
                <div className='flex w-full md:w-[50%] h-full px-5 sm:px-10 justify-between flex-col gap-y-20 '>
                    <div data-aos="fade-up" data-aos-duration="4000" className='quote-box  p-3 py-10 md:p-10 border-2 text-center max-w-[500px]  flex justify-center items-center sponsors_card_bg border-white rounded-xl'>
                        {about1.text}
                    </div>

                    <div data-aos="fade-up" data-aos-duration="4000" className='quote-box p-3 py-10 md:p-10 border-2 text-center max-w-[500px] flex justify-center items-center sponsors_card_bg border-white rounded-xl'>
                        {about2.text}
                    </div>
                </div>
                <div className='mt-24 md:mt-0 flex w-full lg:w-[80%] md:w-[50%] rounded-full min-h-svh h-full px-0 lg:px-16 lg:pr-0 xl:py-16 flex-col justify-center gap-14 md:gap-24 xl:justify-between'>

                    <SponsorsCarousel data={c1data} />
                    <SponsorsCarousel data={c2data} />

                </div>
            </div>
        )
    }
    catch (error) {
        return <></>
    }


}

export default SponsorsMain;