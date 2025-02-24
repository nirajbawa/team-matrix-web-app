"use client";
import Link from "next/link";
import Header from "../components/Header";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AOSProvider from "@/components/providers/AOSProvider";
import ArrowAnimation from "@/assets/lotties/arrow-animation.json";
import LottiefilePlayer from "@/components/players/LottiefilePlayer";
import VantaProvider from "@/providers/VantaProvider";

const HeroSection = () => {
  const lottieProps = {
    loop: true,
    autoplay: true,
    animationData: ArrowAnimation,
    height: "5rem",
    width: "5rem",
  };

  return (
    <VantaProvider>
      <AOSProvider>
        <Header />
        <div
          className="flex justify-between items-center gap-10 text-white"
          data-aos="fade-up"
        >
          <Link href="" data-aos="fade" data-aos-duration="4000">
            <InstagramIcon fontSize="large" />
          </Link>
          <Link href="" data-aos="fade" data-aos-duration="4000">
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link href="" data-aos="fade" data-aos-duration="4000">
            <MailOutlineIcon fontSize="large" />
          </Link>
        </div>
        <Link href="#about">
          <LottiefilePlayer
            loop={lottieProps.loop}
            autoplay={lottieProps.autoplay}
            animationData={lottieProps.animationData}
            height={lottieProps.height}
            width={lottieProps.width}
          />
        </Link>
      </AOSProvider>
    </VantaProvider>
  );
};

export default HeroSection;
