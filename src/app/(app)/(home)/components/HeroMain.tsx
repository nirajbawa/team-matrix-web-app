"use client";
import React from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });

function HeroMain() {
  return <HeroSection />;
}

export default HeroMain;