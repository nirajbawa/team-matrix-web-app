"use client";
import ProjectCard from "@/components/cards/ProjectCard";
import React, { useState } from "react";
import EditProjectDialog from "./EditProjectDialog";

export interface Item {
  name: string;
  text: string;
  image: string;
}

export interface ProjectItem {
  _id: string;
  name: string;
  items: Item[];
}

interface ProjectsProps {
  data: [];
  fetchData: () => void;
}

function Projects({ data, fetchData }: ProjectsProps) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<ProjectItem | null>(null);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex p-10 flex-wrap gap-16">
      {data &&
        data.map((item: ProjectItem, index: number) => (
          <div
            className="cursor-pointer"
            key={index}
            onClick={() => {
              handleOpen();
              setItem(item);
            }}
          >
            <ProjectCard name={item.name} />
          </div>
        ))}

      <EditProjectDialog
        data={item}
        handleOpen={handleOpen}
        open={open}
        fetchData={fetchData}
      />
    </div>
  );
}

export default Projects;
