"use client";
import React, { useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CreateNewProjectDialog from "./CreateNewProjectDialog";

interface NavProps {
  fetchData: () => void;
}

function Nav({ fetchData }: NavProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <nav className="w-full h-20 pt-10 pr-10 flex justify-end items-center">
        <div
          className="hover:bg-blue-gray-50 ease-in-out dark:hover:text-gray-800 transition-all duration-150 p-2 cursor-pointer rounded-full"
          onClick={handleOpen}
        >
          <ControlPointIcon />
        </div>
      </nav>
      <CreateNewProjectDialog
        open={open}
        handleOpen={handleOpen}
        fetchData={fetchData}
      />
    </>
  );
}

export default Nav;
