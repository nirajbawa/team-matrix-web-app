"use client";
import React from "react";
import { League_Spartan } from "next/font/google";
import ProjectCardsContainer from "./ProjectsCardsContainer";
import ProjectBG from "@/assets/images/project-texture.png";
import { Item } from "@/app/admin/dashboard/settings/projects/components/Projects";

const league_spartan = League_Spartan({
  display: "swap",
  subsets: ["latin"],
  weight: ["900"],
});

interface ProjectProps {
  data: Item[];
}

export default function Projects({ data }: ProjectProps) {
  return (
    <div className="w-full min-h-[50rem] md:max-h-[65rem] md:h-[58rem]  py-16  md:pb-0">
      <h1
        className={`w-full text-center uppercase font-extrabold text-4xl ${league_spartan.className}`}
      >
        OUR PROJECTS
      </h1>
      <ProjectCardsContainer data={data} />
      <div
        className="hidden md-xs:flex w-[28rem] h-[14rem] relative rotate-[270deg] left-[-13rem] bottom-[35rem]"
        style={{
          backgroundImage: `url(${ProjectBG?.src})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div
        className="hidden md-xs:flex  w-[28rem] h-[14rem] relative rotate-90 right-[-84%] bottom-[50rem] 3xl:right-[-88%]"
        style={{
          backgroundImage: `url(${ProjectBG?.src})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
    </div>
  );
}
