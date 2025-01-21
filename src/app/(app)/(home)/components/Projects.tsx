"use client";
import React from "react";
import { League_Spartan } from "next/font/google";
import ProjectCardsContainer from "./ProjectCardsContainer";

const league_spartan = League_Spartan({
  display: "swap",
  subsets: ["latin"],
  weight: ["900"],
});

export default function Projects({}) {
  return (
    <div className="w-full h-full py-16">
      <h1
        className={`w-full text-center font-extrabold text-4xl ${league_spartan.style}`}
      >
        OUR PROJECTS
      </h1>
      <ProjectCardsContainer />
    </div>
  );
}
