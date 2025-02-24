"use client";
import React, { useEffect, useRef } from "react";
import LoadingAnimation from "@/assets/lotties/site-loading.json";
import LottiefilePlayer from "@/components/players/LottiefilePlayer";
import BackgroundAni from "@/assets/images/siteloading-bg-ani.gif";

function SiteLoading() {
  const lottieProps = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    height: "100%",
    width: "30rem",
  };

  const mainDiv = useRef<HTMLDivElement | null>(null);
  const rocketDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      mainDiv.current?.classList.toggle("siteOverlay");
    }, 2000);

    setTimeout(() => {
      rocketDiv.current?.classList.toggle("siteAnimateOnload");
      setTimeout(() => {
        mainDiv.current?.remove();
      }, 4500);
    }, 200);
  }, []);

  return (
    <div
      className="w-full h-svh fixed z-[100] bg-black bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${BackgroundAni.src})`,
      }}
      ref={mainDiv}
    >
      <div ref={rocketDiv}>
        <LottiefilePlayer
          loop={lottieProps.loop}
          autoplay={lottieProps.autoplay}
          animationData={lottieProps.animationData}
          height={lottieProps.height}
          width={lottieProps.width}
        />
      </div>
    </div>
  );
}

export default SiteLoading;
