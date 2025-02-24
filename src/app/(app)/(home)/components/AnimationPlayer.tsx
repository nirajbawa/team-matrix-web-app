import React from "react";
import { useLottie } from "lottie-react";
import LoadingAnimation from "@/assets/lotties/site-loading.json";

function AnimationPlayer() {
  const lottieProps = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    height: "100%",
    width: "30rem",
  };

  const defaultOptions = {
    loop: lottieProps.loop,
    autoplay: lottieProps.autoplay,
    animationData: lottieProps.animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(defaultOptions);
  return <div className="h-full w-[30rem]">{View}</div>;
}

export default AnimationPlayer;
