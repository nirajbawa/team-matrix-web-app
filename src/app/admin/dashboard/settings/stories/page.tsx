"use client";
import React from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("./components/StoriesMain"),
  { ssr: false }
);

function page() {
  return (
    <div className="w-full h-full p-10">
      <DynamicComponentWithNoSSR />
    </div>
  );
}

export default page;
