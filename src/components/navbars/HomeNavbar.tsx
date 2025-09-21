"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MatrixLogo from "@/assets/images/matrix-logo.png";
import AOSProvider from "@/components/providers/AOSProvider";
import useStickyNav from "@/hooks/useStickyNav";
import useMobileMenu from "@/hooks/useMobileMenu";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { Lexend_Giga } from "next/font/google";
import useHeroStore from "@/store/useHeroStore";
import useScreenSize from "@/hooks/useScreenSize";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";

const lexend_giga = Lexend_Giga({
  display: "swap",
  subsets: ["latin"],
  weight: ["500"],
});

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    "up"
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  return scrollDirection;
};

function HomeNavbar() {
  const [isSticky] = useStickyNav(0);
  const [isOpen, toggleMenu] = useMobileMenu();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const setScroll = useHeroStore((state: any) => state.setScroll);
  const [sm, md, lg, xl, xl2] = useScreenSize();
  const router = useRouter();

  const scrollDirection = useScrollDirection();

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
        initial={{ opacity: 0 }} // Initial opacity (invisible)
        animate={{ opacity: 1 }} // Animate to full opacity (visible)
        transition={{
          duration: 2, // Duration of the fade-in (2 seconds)
          ease: "easeInOut", // Easing function for smooth animation
        }}
        className={`${isSticky ? "fixed top-0" : "absolute"} ${scrollDirection == "up" ? "flex" : "hidden"}  nav-glass-bg  ${lexend_giga.style} text-white w-full h-16 flex justify-center xl:justify-between items-center z-50`}
      >
        <div className="w-[50%] flex justify-start xl:hidden text-xl px-4">
          <button
            onClick={toggleMenu}
            className="w-12 text-4xl transition-all delay-200 p-1 flex justify-center items-center rounded-sm hover:bg-[#fcfbfb27]"
          >
            <MenuIcon fontSize="large" />
          </button>
        </div>
        <div className="hidden xl:flex border-b-white border-b-2 h-full justify-start uppercase items-center w-[50%] px-10">
          <ul className="flex justify-between gap-x-16 items-center text-lg pl-16">
            <Link href="/#about">
              <li
                className={`rounded-md tracking-wide transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-2 hover:text-black ${activeSection === "about" ? "bg-white text-black" : ""}`}
              >
                ABOUT
              </li>
            </Link>
            <Link href="/#projects">
              <li
                className={`rounded-md tracking-wide transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-2 hover:text-black ${activeSection === "projects" ? "bg-white text-black" : ""}`}
              >
                PROJECTS
              </li>
            </Link>
            <Link href="/#our-stories">
              <li
                className={`rounded-md tracking-wide transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-2 hover:text-black ${activeSection === "our-stories" ? "bg-white text-black" : ""}`}
              >
                STORIES
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <div
            data-aos="fade-down"
            data-aos-duration="4000"
            className={`w-20 h-16 mt-10 md:w-36 md:h-28 md:mt-24 cursor-pointer`}
          >
            <Image
              hidden={isOpen}
              onClick={() => {
                router.replace("/");
              }}
              src={MatrixLogo}
              fill={true}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="w-[50%] flex justify-end xl:hidden text-xl px-4">
          <button
            onClick={() => {
              router.replace("/login");
            }}
            className="text-xl tracking-wide h-10 flex justify-center transition-all delay-200 p-3 rounded-md items-center hover:bg-[#fcfbfb27]"
          >
            Sign In
          </button>
        </div>
        <div className="hidden xl:flex border-b-white border-b-2 h-full justify-end items-center w-[50%] px-10">
          <ul className="flex justify-between gap-x-16 items-center text-lg pr-9">
            <Link href="/#sponsors">
              <li
                className={`rounded-md tracking-wide transition-all cursor-pointer duration-300 ease-out hover:bg-white px-3 py-2 hover:text-black ${activeSection === "sponsors" ? "bg-white text-black" : ""}`}
              >
                SPONSORS
              </li>
            </Link>
            <Link href="/recruitment">
              <li
                className={`rounded-md tracking-wide transition-all uppercase cursor-pointer duration-300 ease-out hover:bg-white hover:text-black px-3 py-2 hover:text-black11 ${activeSection === "login" ? "bg-white text-black" : ""}`}
              >
                recruitment
              </li>
            </Link>

            <Link href="/members">
              <li
                className={`rounded-md tracking-wide transition-all cursor-pointer duration-300 ease-out hover:bg-white hover:text-black px-3 py-2 hover:text-black11 ${activeSection === "recruitment" ? "bg-white text-black" : ""}`}
              >
                MEMBERS
              </li>
            </Link>
          </ul>
        </div>
      </motion.nav>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </AOSProvider>
  );
}

export default HomeNavbar;
