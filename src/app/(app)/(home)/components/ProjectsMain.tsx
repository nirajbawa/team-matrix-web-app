import React from "react";
import Projects from "./Projects";
import dbConnect from "@/lib/dbConnect";
import ProjectModel, { Project } from "@/models/Project";
import { Item } from "@/app/admin/dashboard/settings/projects/components/Projects";

async function ProjectsMain() {
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
}

export default ProjectsMain;
