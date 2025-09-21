"use client";
import React from "react";
import MatrixLogo from "@/assets/images/footer-logo.jpg";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useTheme from "@/hooks/useTheme";

const open_sans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const norwester = localFont({
  src: "../../../fonts/norwester.otf",
  weight: "100 200 400 700 800",
});

function Footer() {
  const [theme, changeTheme] = useTheme();

  return (
    <footer className="w-full py-10 px-16 md:px-8 lg:px-28 lg:pb-5 bg-white text-black border-t-8 border-[#cb1027]">
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex justify-center items-center gap-y-5 flex-col md:flex-row md:w-[40%] md:gap-x-10">
          <Image
            src={MatrixLogo}
            className="w-36 md:w-[10rem] lg:w-[20rem]"
            alt="img"
            width={500}
            height={300}
          />
          <div className="w-full gap-y-6 flex flex-col md:gap-y-2 lg:gap-4">
            <h1
              className={`tracking-[0.2rem] text-center font-bold w-full text-xl ${norwester.className} md:text-left md:text-xl`}
            >
              Team Matrix
            </h1>
            <h1
              className={`tracking-[0.2rem] text-center w-full text-[1rem] ${norwester.className} md:text-left md:font-bold`}
            >
              K.k.wagh institute of engineering education & research, nashik
            </h1>
            <p
              className={`tracking-[0.2rem] text-center w-full text-[1rem] ${norwester.className} md:text-left md:font-bold`}
            >
              maharashtra - 422003, india
            </p>
          </div>
        </div>

        <div>
          <h1
            className={`w-full tracking-[0.1rem] capitalize mt-10 text-xl text-center ${norwester.className} md:mt-0 font-bold md:text-left`}
          >
            quick links
          </h1>
          <div className="w-full flex justify-center gap-x-10 md:justify-start md:font-bold">
            <ul
              className={`items-center mt-5 tracking-[0.1rem] text-center flex justify-start capitalize gap-y-3 flex-col md:text-left ${norwester.className}`}
            >
              <li className="w-full">
                <Link href="/">home</Link>
              </li>
              <li className="w-full">
                <Link href="/about">about</Link>
              </li>
              <li className="w-full">
                <Link href="/#projects">projects</Link>
              </li>
            </ul>
            <ul
              className={`items-center mt-5 tracking-[0.1rem] flex justify-start text-center capitalize gap-y-3 flex-col md:text-left ${norwester.className}`}
            >
              <li className="w-full">
                <Link href="/members">members</Link>
              </li>
              <li className="w-full">
                <Link href="/#sponsors">sponsers</Link>
              </li>
              <li className="w-full">
                <Link href="/admin/auth">Admin Login</Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`w-full md:w-[30%] md:font-bold md:mt-0 ${norwester.className} tracking-[0.1rem]  mt-10 text-center flex-col gap-y-4 flex gap-x-3 items-center justify-center`}
        >
          <div className="space-x-2 w-full text-center md:text-left">
            <WhatsAppIcon /> <Link href="tel:8412843505">8412843505</Link> /
            <Link href="tel:8956271193">8956271193</Link>
          </div>
          <div className="flex gap-x-2 flex-wrap w-full text-center items-center justify-center md:justify-start md:text-left md:tracking-[0.2rem]">
            <MailOutlineIcon />
            <Link href="mailto:teammatrixofficials@gmail.com">
              teammatrixofficials@gmail.com
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 w-full md:flex md:justify-between md:items-center md:flex-row-reverse md:mt-12 lg:mt-16">
        <ul className="w-full flex gap-x-5 text-xl justify-center items-center md:justify-end">
          <li>
            <Link
              href="https://www.instagram.com/teammatrix._/"
              target="__balnk"
            >
              <InstagramIcon fontSize="large" />
            </Link>
          </li>
          <li>
            <Link href="/" target="__balnk">
              <GitHubIcon fontSize="large" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/team-matrixs/"
              target="__balnk"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </li>
          <li
            className="hover:bg-blue-gray-50 p-2 delay-200 transition-all rounded-md cursor-pointer duration-150 ease-in-out"
            onClick={changeTheme}
          >
            {theme == "light" ? (
              <DarkModeIcon fontSize="large" />
            ) : (
              <LightModeIcon fontSize="large" />
            )}
          </li>
        </ul>
        <div
          className={`w-full tracking-[0.2rem] text-center mt-5 ${norwester.className} md:mt-0 md:justify-start md:text-left md:font-bold md:text-lg`}
        >
          © 2025 Team Matrix. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
