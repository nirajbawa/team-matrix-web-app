"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';
import MatrixLogo from "@/assets/images/matrix-logo.png";
import AOSProvider from "@/components/providers/AOSProvider";
import useStickyNav from '@/hooks/useStickyNav';
import useMobileMenu from '@/hooks/useMobileMenu';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';
import { Lexend_Giga } from 'next/font/google';


const lexend_giga = Lexend_Giga({
    display: 'swap',
    subsets: ['latin'], 
    weight: ['500'],
})

function HomeNavbar() {
    const [isSticky] = useStickyNav(30);

    const [isOpen, toggleMenu] = useMobileMenu();

    
    return (
        <AOSProvider>
             <motion.nav
      initial={{ opacity: 0 }}  // Initial opacity (invisible)
      animate={{ opacity: 1 }}   // Animate to full opacity (visible)
      transition={{
        duration: 2,            // Duration of the fade-in (2 seconds)
        ease: 'easeInOut',      // Easing function for smooth animation
      }}
    className={`${isSticky ? "fixed nav-glass-bg" : "absolute"} ${lexend_giga.className} text-white w-full h-16 flex justify-center xl:justify-between items-center z-50`}>
                <div className='hidden xl:flex border-b-white border-b-2 h-full justify-start  items-center w-[50%] px-10'>
                    <ul className='flex justify-between gap-x-16 items-center text-lg'>
                        <li className='rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-1 hover:text-black'>
                            <Link href="">
                                SPONSORS
                            </Link>
                        </li>
                        <li className='rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-1 hover:text-black'>
                            <Link href="">
                                ANNOUNCEMENTS
                            </Link>
                        </li>
                        <li className='rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-1 hover:text-black'>
                            <Link href="">
                                ABOUT
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div data-aos="fade-down" data-aos-duration="4000" className={`w-20 h-16 mt-10 md:w-36 md:h-28 md:mt-24`} >
                        <Image
                            hidden={isOpen}
                            onClick={toggleMenu}
                            src={MatrixLogo}
                            fill={true}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className='hidden xl:flex border-b-white border-b-2 h-full justify-end items-center w-[50%] px-10'>
                    <ul className='flex justify-between gap-x-16 items-center text-lg'>
                        <li className='rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-1 hover:text-black'>
                            <Link href="">
                                MEMBERS
                            </Link>
                        </li>
                        <li className='rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-1 hover:text-black'>
                            <Link href="">
                                RECRUITMENT
                            </Link>
                        </li>
                        <li className='rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-1 hover:text-black'>
                            <Link href="">
                                SIGN IN
                            </Link>
                        </li>
                    </ul>
                </div>
            </motion.nav>
            <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </AOSProvider>
    )
}

export default HomeNavbar;