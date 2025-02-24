"use client";
import React from "react";
import dynamic from "next/dynamic";
import SiteLoading from "./SiteLoading";

const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });

function HeroMain() {
  return (
    <>
      <SiteLoading />
      <HeroSection />
    </>
  );
}

export default HeroMain;
