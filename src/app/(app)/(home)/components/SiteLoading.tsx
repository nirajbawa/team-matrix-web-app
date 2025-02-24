"use client";
import React, { useEffect, useRef } from "react";
import LoadingAnimation from "@/assets/lotties/site-loading.json";
// import LottiefilePlayer from "@/components/players/LottiefilePlayer";
import BackgroundAni from "@/assets/images/siteloading-bg-ani.gif";
import { useLottie } from "lottie-react";

function SiteLoading() {
  const lottieProps = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    height: "100%",
    width: "30rem",
  };

  const defaultOptions = {
    loop: lottieProps.loop,
    autoplay: lottieProps.autoplay,
    animationData: lottieProps.animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(defaultOptions);

  // const mainDiv = useRef<HTMLDivElement | null>(null);
  // const rocketDiv = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setTimeout(() => {
  //       mainDiv.current?.classList.toggle("siteOverlay");
  //     }, 2000);

  //     setTimeout(() => {
  //       rocketDiv.current?.classList.toggle("siteAnimateOnload");
  //       setTimeout(() => {
  //         mainDiv.current?.remove();
  //       }, 4500);
  //     }, 200);
  //   }
  // }, []);

  return (
    <div
      className="w-full h-svh flex items-center justify-center fixed z-[100] bg-black bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${BackgroundAni.src})`,
      }}
    >
      <div className="h-full w-[30rem]">{View}</div>
    </div>
  );
}

export default SiteLoading;
