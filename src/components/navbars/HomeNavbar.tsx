"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import MatrixLogo from "@/assets/images/matrix-logo.png";
import AOSProvider from "@/components/providers/AOSProvider";
import useStickyNav from '@/hooks/useStickyNav';
import useMobileMenu from '@/hooks/useMobileMenu';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';
import { Lexend_Giga } from 'next/font/google';
import useHeroStore from '@/store/useHeroStore';
import useScreenSize from '@/hooks/useScreenSize';
import { useRouter } from 'next/navigation';

const lexend_giga = Lexend_Giga({
    display: 'swap',
    subsets: ['latin'],
    weight: ['500'],
})

function HomeNavbar() {
    const [isSticky] = useStickyNav(0);
    const [isOpen, toggleMenu] = useMobileMenu();
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const setScroll = useHeroStore((state: any) => state.setScroll);
    const [sm, md, lg, xl, xl2] = useScreenSize();
    const router = useRouter();


    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            let current: string | null = null;
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 300) {
                    current = section.getAttribute("id");
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <AOSProvider>
            <motion.nav
                initial={{ opacity: 0 }}  // Initial opacity (invisible)
                animate={{ opacity: 1 }}   // Animate to full opacity (visible)
                transition={{
                    duration: 2,            // Duration of the fade-in (2 seconds)
                    ease: 'easeInOut',      // Easing function for smooth animation
                }}
                className={`${isSticky ? "fixed top-0" : "absolute"}  nav-glass-bg  ${lexend_giga.style} text-white w-full h-16 flex justify-center xl:justify-between items-center z-50`}>
                <div className='hidden xl:flex border-b-white border-b-2 h-full justify-start  items-center w-[50%] px-10'>
                    <ul className='flex justify-between gap-x-16 items-center text-lg pl-16'>

                        <li className={`rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-2 hover:text-black ${activeSection === "about" ? "bg-white text-black" : ""}`}>
                            <Link href="#about" onClick={() => { setScroll(true) }}>
                                ABOUT
                            </Link>
                        </li>

                        <li className={`rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-2 hover:text-black ${activeSection === "projects" ? "bg-white text-black" : ""}`}>
                            <Link href="#projects" onClick={() => setScroll(true)}>
                                PROJECTS
                            </Link>
                        </li>

                        <li className={`rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-2 hover:text-black ${activeSection === "members" ? "bg-white text-black" : ""}`}>
                            <Link href="#members" onClick={() => setScroll(true)}>
                                MEMBERS
                            </Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <div data-aos="fade-down" data-aos-duration="4000" className={`w-20 h-16 mt-10 md:w-36 md:h-28 md:mt-24`} >
                            <Image
                                hidden={isOpen}
                                onClick={()=>{
                                    if(lg && xl && xl2){
                                        router.replace("#hero");
                                    }
                                    toggleMenu();
                                }}
                                src={MatrixLogo}
                                fill={true}
                                alt="Picture of the author"
                            />
                    </div>
                </div>
                <div className='hidden xl:flex border-b-white border-b-2 h-full justify-end items-center w-[50%] px-10'>
                    <ul className='flex justify-between gap-x-16 items-center text-lg pr-9'>
                        <li className={`rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-2 hover:text-black ${activeSection === "sponsors" ? "bg-white text-black" : ""}`}>
                            <Link href="#sponsors" onClick={() => { setScroll(true) }}>
                                SPONSORS
                            </Link>
                        </li>


                        <li className={`rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white hover:text-black px-3 py-2 hover:text-black11 ${activeSection === "login" ? "bg-white text-black" : ""}`}>
                            <Link href="#login" onClick={() => setScroll(true)}>
                                SIGN IN
                            </Link>
                        </li>

                        <li className={`rounded-md transition-all cursor-pointer duration-300 ease-out hover:bg-white hover:text-black px-3 py-2 hover:text-black11 ${activeSection === "recruitment" ? "bg-white text-black" : ""}`}>
                            <Link href="#recruitment" onClick={() => setScroll(true)}>
                                RECRUITMENT
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