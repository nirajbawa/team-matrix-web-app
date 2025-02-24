"use client";
import { useEffect, useRef } from "react";
import axios from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import useHeroStore from "@/store/useHeroStore";

export default function VantaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scroll = useHeroStore((state) => state.scroll);
  const mainRef = useRef(null);

  useEffect(() => {
    try {
      (async () => {
        await axios.post<ApiResponse>("/api/visitors");
      })();
    } catch {}

    // Initialize Vanta effect after scripts load
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
      {children}
    </div>
  );
}
