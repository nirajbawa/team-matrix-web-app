"use client"
import React from 'react';
import localFont from "next/font/local";
import Ztext from 'react-ztext';

const BlackOpsOne = localFont({
    src: "../../../fonts/BlackOpsOne-Regular.ttf",
    variable: "--font-black-ops-one",
    weight: "100 900",
});


function Header() {
    return (
        <div className={`${BlackOpsOne.variable} font-blackOps mt-10 md:mt-0 gap-y-6 w-full pt-[10%] h-full flex justify-center items-center flex-col`}>
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
                <h1 role='img' aria-label='emoji' className='text-6xl md:text-6xl lg:text-8xl text-white z-0' data-aos="fade-down" data-aos-duration="4000" >
                    TEAM
                </h1>
                <h2 role='img' aria-label='emoji' className='text-6xl md:text-7xl lg:text-9xl text-red-600 z-0' data-aos="fade-up" data-aos-duration="4000" >
                    MATRIX
                </h2>
            </Ztext>

        </div>
    )
}

export default Header;