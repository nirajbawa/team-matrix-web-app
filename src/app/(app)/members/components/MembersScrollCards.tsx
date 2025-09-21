"use client";
import MembersCard from "@/components/cards/MembersCard";
import React from "react";

interface MembersProps {
  data: any;
}

function MembersScrollCards({ data }: MembersProps) {
  data = JSON.parse(data);
  const middleIndex = Math.floor(data.length / 2);

  return (
    <>
      <div className="w-full h-full sm:mt-72 my-10 flex-wrap gap-14 gap-x-28 sm:gap-x-28 lg:gap-x-[13rem] flex justify-center sm:justify-between md:justify-evenly">
        {data &&
          data?.map((item: any, index: number) => {
            return (
              <div key={index} className={index === middleIndex ? "mb-10" : ""}>
                <MembersCard
                  image={item?.image}
                  name={item?.name}
                  position={item?.position}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default MembersScrollCards;
