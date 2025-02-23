import React from "react";
import { Card } from "@/components/ui/card";

interface ProjectCard {
  name: string;
}

function ProjectCard({ name }: ProjectCard) {
  return (
    <Card className="w-[20rem] dark:bg-black h-[18rem] flex justify-center items-center">
      <h1 className="font-bold text-2xl">{name}</h1>
    </Card>
  );
}

export default ProjectCard;
