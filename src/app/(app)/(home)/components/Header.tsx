"use client"
import React from 'react';
import localFont from "next/font/local";


const BlackOpsOne = localFont({
    src: "../../../fonts/BlackOpsOne-Regular.ttf",
    variable: "--font-black-ops-one",
    weight: "100 900",
});


function Header() {
    return (
        <div className={`${BlackOpsOne.variable} font-blackOps gap-y-6 w-full pt-[10%] h-full flex justify-center items-center flex-col`}>
            <h1 className='text-5xl md:text-6xl lg:text-8xl text-white z-0'  data-aos="fade-down" data-aos-duration="4000" >
                TEAM
            </h1>
            <h2 className='text-6xl md:text-7xl lg:text-9xl text-red-600 z-0'  data-aos="fade-up" data-aos-duration="4000" >
                MATRIX
            </h2>
        </div>
    )
}

export default Header;