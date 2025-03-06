"use client";
import React, { useRef, useState, useEffect } from "react";
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  display: "swap",
  subsets: ["latin"],
  weight: ["900"],
});

interface AboutProps {
  about: string;
}

function About({ about }: AboutProps) {
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [fullText, setFullText] = useState<boolean>(false);

  const about1 = about;

  const setControls = (): void => {
    videoPlayer.current?.setAttribute("controls", "true");
    videoPlayer.current?.play();
  };

  useEffect(() => {
    setVideoSrc("/videos/about-video.mp4");
  }, []);

  const makeTextFull = (): void => {
    setFullText((state) => !state);
  };

  return (
    <div className="w-full h-ful mb-14 mt-20  justify-between flex flex-col md:flex-row items-center px-6 md:px-20">
      <div className="md:w-[50%] h-full flex flex-col gap-y-10">
        <h1
          className={`text-4xl font-bold text-center uppercase ${league_spartan.className}`}
        >
          About
        </h1>
        <div className="font-openSans text-lg text-left">
          <div className={`${fullText ? "hidden" : ""} sm:hidden`}>
            {about1?.length <= 400 ? (
              <>{about1}</>
            ) : (
              <>
                {about1.slice(0, 400)}....{" "}
                <button onClick={makeTextFull}>More</button>
              </>
            )}
          </div>
          <div className={`${fullText ? "block" : "hidden"} pb-14 sm:hidden`}>
            {about1}
            <button onClick={makeTextFull}>Less</button>
          </div>

          <div className={`hidden sm:block dark:text-white text-black`}>
            {about1}
          </div>
        </div>
      </div>
      <div className="md:w-[40%] h-full pt-[3rem] flex justify-center items-center">
        {videoSrc ? (
          <video
            onClick={setControls}
            ref={videoPlayer}
            className="cursor-pointer rounded-xl border-2 border-[#ff2d34] dark:border-white h-auto"
            preload="none"
            poster="/videos/video-play-button.png"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default About;
