import React from "react";
import Projects from "./Projects";
import dbConnect from "@/lib/dbConnect";
import ProjectModel, { Project } from "@/models/Project";
import { Item } from "@/app/admin/dashboard/settings/projects/components/Projects";

async function ProjectsMain() {
  try {
    await dbConnect();
    const data = await ProjectModel.find({});
    const items: Item[] = [];
    data.forEach((item: Project) => {
      items.push(...item.items);
    });
    return (
      <>
        <Projects data={items} />
      </>
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return <div className="w-full h-full p-10 text-center text-red-500 font-bold uppercase text-2xl">Failed to load projects.</div>;
  }
}

export default ProjectsMain;
