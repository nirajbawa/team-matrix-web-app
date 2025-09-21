import React from "react";
import BoxTexture1 from "@/assets/images/stories-box-texture.png";
import BoxTexture2 from "@/assets/images/stories-box-texture-2.png";
import { Varela_Round } from "next/font/google";
import parse from "html-react-parser";

const varela_round = Varela_Round({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

interface OurStoriesRightProps {
  currentItem: string | null;
}

function OurStoriesRight({ currentItem }: OurStoriesRightProps) {
  return (
    <div
      data-aos="slide-left"
      data-aos-duration="4000"
      className={`relative w-full min-h-[40rem] md:min-h-[38rem] lg:min-h-[35rem] bg-[#333232] ${varela_round.className}`}
    >
      <div
        className="relative top-[-12px] w-[12rem] h-[4.5rem]"
        style={{
          backgroundImage: `url(${BoxTexture1?.src})`,
          backgroundSize: "100% 100%",
        }}
      ></div>

      <div className="w-full pb-10 px-10 text-center h-full text-white transition-all delay-150 duration-500">
        {parse(currentItem ?? "")}
      </div>
      <div
        className="absolute bottom-[0] right-[0] w-full h-[6rem]"
        style={{
          backgroundImage: `url(${BoxTexture2?.src})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
    </div>
  );
}

export default OurStoriesRight;
