import React from "react";
import StoriesMain from "./components/StoriesMain";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("./components/Stories"),
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
