import React from 'react';
import Image from 'next/image';
import TeamMemberPicture from "@/assets/images/member.png"
import { Lexend_Giga } from 'next/font/google';

const lexend_giga = Lexend_Giga({
    display: 'swap',
    subsets: ['latin'], 
    weight: ['400', '700'], // Specify weights if you need different ones
})


interface MembersCardProps{
    image: string;
    name: string;
    position: string;
}


function MembersCard({image, name, position}:MembersCardProps) {
    return (
        <div data-aos="fade-up" data-aos-duration="4000" className='w-[15rem] md:w-60 min-h-[23rem] md:min-h-96 z-20  bg-black text-white p-3 mt-20 flex flex-col gap-y-8'>
            <div className='bg-[#3a0808] h-56 relative w-full'>
                <div className=' w-full mb-11 h-72 absolute top-[-66px] bg-no-repeat bg-cover bg-center'>
                    <Image
                        src={image}
                        fill={true}
                        alt="Picture of the author"
                        className='png-border'
                    />
                </div>
            </div>
            <div className={`text-center ${lexend_giga.className}`}>
                <h2 className='text-sm'>{name}</h2>
                <h1 className='text-xl'>{position}</h1>
            </div>
        </div>
    )
}

export default MembersCard