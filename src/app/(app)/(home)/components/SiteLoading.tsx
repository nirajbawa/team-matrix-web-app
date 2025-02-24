"use client";
import React, { useEffect, useRef } from "react";
import BackgroundAni from "@/assets/images/siteloading-bg-ani.gif";
import Image from "next/image";
import RocketImage from "@/assets/images/rocket.png";

function SiteLoading() {
  const mainDiv = useRef<HTMLDivElement | null>(null);
  const rocketDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        mainDiv.current?.classList.toggle("siteOverlay");
      }, 2000);

      setTimeout(() => {
        rocketDiv.current?.classList.toggle("siteAnimateOnload");
        setTimeout(() => {
          mainDiv.current?.remove();
        }, 4500);
      }, 200);
    }
  }, []);

  return (
    <div
      className="w-full h-svh flex items-center justify-center fixed z-[100] bg-black bg-no-repeat bg-cover"
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
