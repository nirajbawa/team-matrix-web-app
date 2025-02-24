"use client";
import MembersCard from "@/components/cards/MembersCard";
import React from "react";

interface MembersProps {
  data: any;
}

function MembersScrollCards({ data }: MembersProps) {
  data = JSON.parse(data);

  return (
    <>
      <div className="w-full h-full my-10 flex-wrap gap-14 gap-x-28 sm:gap-x-28 lg:gap-x-[13rem] flex justify-center sm:justify-between md:justify-evenly">
        {data &&
          data?.map((item: any, index: number) => {
            return (
              <MembersCard
                key={index}
                image={item?.image}
                name={item?.name}
                position={item?.position}
              />
            );
          })}
      </div>
    </>
  );
}

export default MembersScrollCards;
