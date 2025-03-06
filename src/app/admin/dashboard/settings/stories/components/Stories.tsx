"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import EditStoriesCardDialog from "./EditStoriesCardDialog";
import axios from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import NoImage from "@/assets/images/no-image.png";

export interface CurrentItem {
  _id: string;
  images: string[];
  index: number;
  text: string;
}

function Stories() {
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<CurrentItem | null>(null);
  const [data, setData] = useState<[]>([]);
  const handleOpen = () => {
    setOpen(!open);
    setCurrentItem(null);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get<ApiResponse>(`/api/admin/settings/stories`);
      const d = res.data;
      setData(d.data);
    } catch {}
  };

  const getImage = (index: number) => {
    const item = data.find((item: CurrentItem) => item.index === index) as
      | CurrentItem
      | undefined;
    return item?.images?.[0] || NoImage;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      {data && data.length > 0 ? (
        <div className="relative mx-10 w-full h-full z-40">
          <div
            onClick={() => {
              setOpen(true);
              const item = data.find((item: CurrentItem) => item.index === 1);
              setCurrentItem(item ?? null);
            }}
            data-aos="slide-right"
            data-aos-duration="4000"
            className="absolute w-[45%] md:w-[7rem] h-[11rem] md:h-[9rem] bg-[#ff302dc7] p-2  z-0 md:left-[-1rem] md:top-[1rem]"
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(1)}
            />
          </div>

          <div
            data-aos="slide-right"
            data-aos-duration="4000"
            className="absolute w-[45%] md:w-[7rem] h-[11rem] md:h-[8rem] bg-[#ff302dc7] p-2  z-0 md:left-[-1rem] md:top-[11rem]"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 2) ?? null;
              setCurrentItem(item);
            }}
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(2)}
            />
          </div>

          <div
            data-aos="slide-right"
            data-aos-duration="4000"
            className="absolute w-[45%] md:w-[7rem] h-[11rem] md:h-[7rem] bg-[#ff302dc7] p-2  z-0 md:left-[-1rem] md:top-[20rem]"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 3) ?? null;
              setCurrentItem(item);
            }}
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(3)}
            />
          </div>

          <div
            data-aos="slide-right"
            data-aos-duration="4000"
            className="absolute w-[45%] md:w-[10rem] h-[11rem] md:h-[13rem] bg-[#ff302dc7] p-2  z-0 md:left-[7.5rem] md:top-[1rem]"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 4) ?? null;
              setCurrentItem(item);
            }}
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(4)}
            />
          </div>

          <div
            data-aos="slide-right"
            data-aos-duration="4000"
            className="absolute w-[48%] md:w-[8rem] h-[10rem] md:h-[10rem] top-[0rem] md:top-[1rem] left-[52%] md:left-[19.4rem]  bg-[#ff302dc7] p-2  z-0"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 5) ?? null;
              setCurrentItem(item);
            }}
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(5)}
            />
          </div>

          <div
            data-aos="slide-up"
            data-aos-duration="4000"
            className="absolute w-[49%] md:w-[10rem] h-[13rem] md:h-[12rem] top-[12rem] md:top-[12.8rem] left-[51%] md:left-[20rem]  bg-[#ff302dc7] p-2  z-0"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 6) ?? null;
              setCurrentItem(item);
            }}
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(6)}
            />
          </div>

          <div
            data-aos="slide-up"
            data-aos-duration="4000"
            className="absolute w-[46%] md:w-[10.9rem] h-[10rem] md:h-[11rem] top-[13rem] md:top-[15.5rem] left-[0rem] md:left-[7.5rem]  bg-[#ff302dc7] p-2  z-0"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 7) ?? null;
              setCurrentItem(item);
            }}
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(7)}
            />
          </div>

          <div
            data-aos="slide-up"
            data-aos-duration="4000"
            className="absolute w-[46%] md:w-[8rem] h-[11rem] md:h-[9rem] top-[25rem] md:top-[26.4rem] left-[0rem] md:left-[20.5rem]  bg-[#ff302dc7] p-2  z-0"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 8) ?? null;
              setCurrentItem(item);
            }}
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(8)}
            />
          </div>

          <div
            data-aos="slide-up"
            data-aos-duration="4000"
            className="absolute w-[100%] md:w-[14rem] 2xl:w-[15rem] 2xl:h-[9rem] top-[52rem] md:top-[26rem] left-[0rem] md:left-[30rem]  bg-[#ff302dc7] p-2  z-0"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 9) ?? null;
              setCurrentItem(item);
            }}
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(9)}
            />
          </div>

          <div
            data-aos="slide-up"
            data-aos-duration="4000"
            className="absolute w-[100%] md:w-[14rem] h-[13rem] 2xl:w-[19rem] 2xl:h-[12rem] top-[37.5rem] md:top-[12.5rem] left-[0rem] md:left-[31.5rem]  bg-[#ff302dc7] p-2  z-0"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 10) ?? null;
              setCurrentItem(item);
            }}
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(10)}
            />
          </div>

          <div
            data-aos="slide-up"
            data-aos-duration="4000"
            className="absolute w-[100%] md:w-[14rem] h-[13rem] 2xl:w-[19.6rem] 2xl:h-[10rem] top-[37.5rem] md:top-[28rem] left-[0rem] md:left-[-1rem]  bg-[#ff302dc7] p-2  z-0"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 11) ?? null;
              setCurrentItem(item);
            }}
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(11)}
            />
          </div>

          <div
            data-aos="slide-right"
            data-aos-duration="4000"
            onClick={() => {
              setOpen(true);
              const item =
                data.find((item: CurrentItem) => item.index === 12) ?? null;
              setCurrentItem(item);
            }}
            className="absolute w-[49%] transition-all duration-150 ease-linear md:w-[16rem] 2xl:w-[17rem] 2xl:h-[10rem] top-[28rem] md:top-[1rem] left-[51%] md:left-[29rem]  bg-[#ff302dc7] p-2  z-0"
          >
            <Image
              className="w-full h-full"
              alt="img"
              width={500}
              height={300}
              src={getImage(12)}
            />
          </div>

          <EditStoriesCardDialog
            handleOpen={handleOpen}
            open={open}
            data={currentItem}
            fetchData={fetchData}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Stories;
