"use client";
import Link from "next/link";
import Header from "../components/Header";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AOSProvider from "@/components/providers/AOSProvider";
import ArrowAnimation from "@/assets/lotties/arrow-animation.json";
import LottiefilePlayer from "@/components/players/LottiefilePlayer";
import useHeroStore from "@/store/useHeroStore";
import { useEffect, useRef } from "react";
import axios from "axios";
import { ApiResponse } from "@/types/ApiResponse";

const HeroSection = () => {
  const scroll = useHeroStore((state) => state.scroll);
  const mainRef = useRef(null);

  const lottieProps = {
    loop: true,
    autoplay: true,
    animationData: ArrowAnimation,
    height: "5rem",
    width: "5rem",
  };

  useEffect(() => {
    try {
      (async () => {
        await axios.post<ApiResponse>("/api/visitors");
      })();
    } catch {}

    if (typeof window !== "undefined") {
      const checkVanta = setInterval(() => {
        if (window.VANTA) {
          clearInterval(checkVanta);
          window.VANTA.NET({
            el: mainRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xff0000,
            points: 7.0,
            maxDistance: 18.0,
            spacing: 20.0,
            showDots: false,
            backgroundAlpha: 0,
          });
        }
      }, 500);
    }
  }, []);

  return (
    <div
      id="main-header-bg"
      ref={mainRef}
      className={`w-full ${scroll ? "h-[95vh] md:h-[110vh]" : "h-[95vh] md:h-[100vh]"} bg-no-repeat bg-cover flex bg-[#050505] align-middle pb-5 items-center flex-col lg:bg-fixed`}
    >
      <AOSProvider>
        <Header />
        <div
          className="flex justify-between items-center gap-10 text-white"
          data-aos="fade-up"
        >
          <Link
            href="https://www.instagram.com/teammatrix._/"
            data-aos="fade"
            data-aos-duration="4000"
            target="__balnk"
          >
            <InstagramIcon fontSize="large" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/team-matrixs/"
            data-aos="fade"
            data-aos-duration="4000"
            target="__balnk"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link
            href="mailto:teammatrixofficials@gmail.com"
            data-aos="fade"
            data-aos-duration="4000"
            target="__balnk"
          >
            <MailOutlineIcon fontSize="large" />
          </Link>
        </div>
        <Link href="#projects">
          <LottiefilePlayer
            loop={lottieProps.loop}
            autoplay={lottieProps.autoplay}
            animationData={lottieProps.animationData}
            height={lottieProps.height}
            width={lottieProps.width}
          />
        </Link>
      </AOSProvider>
    </div>
  );
};

export default HeroSection;
