"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import Members from "./Members";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";

function Main() {
  const [data, setData] = useState<any>([]);
  const fetchData = async () => {
    try {
      const res = await axios.get<ApiResponse>(`/api/admin/settings/alumnis`);
      const data = res.data;
      setData(data.data);
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
    }
  };
  return (
    <>
      <Nav fetchData={fetchData} />
      <Members fetchData={fetchData} data={data} />
    </>
  );
}

export default Main;
