"use client";
import React, { useEffect, useRef } from "react";
import BackgroundAni from "@/assets/images/siteloading-bg-ani.gif";
import Image from "next/image";
import RocketImage from "@/assets/images/rocket.png";
import useLoadAniStore from "@/store/useLoadAniStore";

function SiteLoading() {
  const mainDiv = useRef<HTMLDivElement | null>(null);
  const rocketDiv = useRef<HTMLDivElement | null>(null);
  const animation = useLoadAniStore((state) => state.animation);
  const setAnimation = useLoadAniStore((state) => state.setAnimation);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        mainDiv.current?.classList.toggle("siteOverlay");
      }, 2000);

      setTimeout(() => {
        rocketDiv.current?.classList.toggle("siteAnimateOnload");
        setTimeout(() => {
          mainDiv.current?.remove();
          setAnimation(true);
        }, 4500);
      }, 200);
    }
  }, []);

  return (
    <div
      className={`w-full h-svh flex items-center justify-center z-[100] bg-black bg-no-repeat bg-cover ${animation ? "hidden" : "fixed"}`}
      style={{
        backgroundImage: `url(${BackgroundAni.src})`,
      }}
      ref={mainDiv}
    >
      <div ref={rocketDiv}>
        <Image src={RocketImage} width={500} height={500} alt="rocket" />
      </div>
    </div>
  );
}

export default SiteLoading;
