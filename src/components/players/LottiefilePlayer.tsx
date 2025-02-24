"use client";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

interface lottieProps {
  animationData: any;
  autoplay: boolean;
  loop: boolean;
  height: string | number;
  width: string | number;
}

const LottiefilePlayer = ({
  animationData,
  autoplay,
  loop,
  height,
  width,
}: lottieProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure it only renders in the browser
  }, []);

  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Only render Lottie after confirming it's the client
  return isClient ? (
    <Lottie
      options={defaultOptions}
      isClickToPauseDisabled={true}
      height={height}
      width={width}
    />
  ) : null;
};

export default LottiefilePlayer;
