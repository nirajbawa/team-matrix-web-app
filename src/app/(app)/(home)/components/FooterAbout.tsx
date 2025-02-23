import React from "react";
import CollegeLogo from "@/assets/images/college-logo.png";
import Image from "next/image";
import { Open_Sans, Arvo } from "next/font/google";
import localFont from "next/font/local";
import FooterBackground from "@/assets/images/footer-bg.png";

const open_sans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

const arvo = Arvo({
  display: "swap",
  subsets: ["latin"],
  weight: ["700"],
});

const norwester = localFont({
  src: "../../../fonts/norwester.otf",
  weight: "100 200 400 700 800",
});

function FooterAbout() {
  return (
    <div
      className="w-full flex flex-col md:flex-row py-10 md:px-20 items-center justify-center md:bg-cover]"
      style={{
        backgroundImage: `url(${FooterBackground.src})`,
      }}
    >
      <div className="lg:px-10 flex justify-center">
        <Image
          src={CollegeLogo}
          className="w-80 md:w-96 h-44"
          alt="img"
          width={500}
          height={300}
        />
      </div>

      <div className="w-1 bg-white h-48 rounded-md hidden md:flex"></div>
      <div className="w-full md:w-[35%] flex justify-center items-center flex-col pt-5 px-5 xl:pl-8 xl:pt-0">
        <p
          className={`w-full text-center capitalize md:text-left md:text-[1.1rem] ${open_sans.className} `}
        >
          Department of Robtotics and Automation
        </p>
        <h1
          className={`${norwester.className} tracking-[0.1rem] w-full text-center pt-3 md:pt-4 capitalize text-lg font-light md:text-left md:text-2xl md:leading-[2rem] ${arvo.className}`}
        >
          K.K. Wagh Institute of Engineering Education & Research, Nashik
        </h1>
      </div>
    </div>
  );
}

export default FooterAbout;
