"use client";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Projects from "./Projects";
import axios from "axios";
import { ApiResponse } from "@/types/ApiResponse";

function Main() {
  const [data, setData] = useState<[]>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get<ApiResponse>(`/api/admin/settings/projects`);
      const data = res.data;
      setData(data.data);
    } catch {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Nav fetchData={fetchData} />
      <Projects data={data} fetchData={fetchData} />
    </div>
  );
}

export default Main;
