"use client";
import React, { useState } from "react";
import OurStoriesLeft from "./OurStoriesLeft";
import OurStoriesRight from "./OurStoriesRight";
import { Stories } from "@/models/Stories";

interface OurStoriesContainerProps {
  data: Stories[];
}

function OurStoriesContainer({ data }: OurStoriesContainerProps) {
  const [currentItem, setCurrentItem] = useState<string | null>(data[0].text);

  return (
    <>
      <div className="relative w-full md:w-[70%] lg:w-[60%] xl:w-[70%] h-full min-h-[73rem] md:min-h-svh ">
        <OurStoriesLeft data={data} setCurrentItem={setCurrentItem} />
      </div>
      <div className="w-full md:w-[30%] lg:w-[40%] xl:w-[30%] h-full flex justify-center items-start ">
        <OurStoriesRight currentItem={currentItem} />
      </div>
    </>
  );
}

export default OurStoriesContainer;
