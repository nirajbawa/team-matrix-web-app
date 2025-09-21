"use client";
import React, { useEffect, useState } from "react";
import SponsorsCarousel from "./SponsorsCarousel";
import Nav from "./Nav";
import axios from "axios";
import { ApiResponse } from "@/types/ApiResponse";

function SponsorGallery() {
  const [data1, setData1] = useState<any>([]);
  const [data2, setData2] = useState<any>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get<ApiResponse>(`/api/admin/settings/sponsors`);
      const data = res.data;

      setData1(data.data.filter((item: any) => item.section == "1"));
      setData2(data.data.filter((item: any) => item.section == "2"));
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <Nav fetchData={fetchData} />
      <div className="p-10 flex flex-col gap-10">
        <SponsorsCarousel data={data1} fetchData={fetchData} />
        {/* <SponsorsCarousel data={data2} fetchData={fetchData}/> */}
      </div>
    </div>
  );
}

export default SponsorGallery;
