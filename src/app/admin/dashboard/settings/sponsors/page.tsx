"use client";
import React from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR1 = dynamic(
  () => import("./components/SponsorAbout"),
  { ssr: false }
);

const DynamicComponentWithNoSSR2 = dynamic(
  () => import("./components/SponsorGallery"),
  { ssr: false }
);

function page() {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <DynamicComponentWithNoSSR1 />
      <DynamicComponentWithNoSSR2 />
    </div>
  );
}

export default page;
