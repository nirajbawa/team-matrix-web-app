"use client";
import AlumnisCard from "@/components/cards/AlumnisCard";
import React from "react";

interface MembersProps {
  data: any;
}

function MembersScrollCards({ data }: MembersProps) {
  data = JSON.parse(data);
  const middleIndex = Math.floor(data.length / 2);

  return (
    <>
      <div className="text-center flex justify-center flex-col items-center w-full mb-2 sm:mb-12 mt-5">
        <h1 className="text-4xl text-white mt-20 sm:mt-36 md:text-5xl font-bold  mb-4">
          Our Alumni
        </h1>
        <p className="text-gray-50 max-w-2xl mx-auto px-4">
          Meet the brilliant minds who have been part of our journey
        </p>
      </div>
      <div className="w-full h-full sm:mt-2 my-5 flex-wrap gap-14 gap-x-28 sm:gap-x-28 lg:gap-x-[13rem] flex justify-center sm:justify-between md:justify-evenly">
        {data &&
          data?.map((item: any, index: number) => {
            return (
              <div key={index} className={index === middleIndex ? "mb-10" : ""}>
                <AlumnisCard
                  image={item?.image}
                  name={item?.name}
                  batch={item?.batch}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default MembersScrollCards;
