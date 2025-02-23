"use client";
import MembersCard from "@/components/cards/MembersCard";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DownArrow from "@/assets/images/arrow.png";
import useScreenSize from "@/hooks/useScreenSize";
import { useRouter } from "next/navigation";

interface MembersProps {
  data: any;
}

function MembersScrollCards({ data }: MembersProps) {
  data = JSON.parse(data);
  const [showCards, setShowCards] = useState<boolean>(false);
  const [sm, md, lg, xl, xl2] = useScreenSize();
  const router = useRouter();

  const adjustCards = (): void => {
    if (md || lg || xl || xl2) {
      setShowCards(true);
    }
  };

  const showCard = (): void => {
    setShowCards((state) => !state);
  };

  useEffect(() => {
    adjustCards();
    addEventListener("resize", adjustCards);

    () => {
      removeEventListener("resize", adjustCards);
    };
  }, []);

  return (
    <>
      <div className="w-full h-full flex-wrap gap-14 gap-x-28 sm:gap-x-28 lg:gap-x-[13rem] flex justify-center sm:justify-between md:justify-evenly">
        {data &&
          showCards &&
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
        {data && !showCards && (
          <div
            className={`md:hidden read-more z-10 absolute flex items-end pb-5 justify-center bg-black w-full h-52 left-0 bottom-0`}
          >
            <div onClick={showCard} className="w-14 h-14">
              <Image
                className="w-full h-full"
                alt="img"
                width={500}
                height={300}
                src={DownArrow}
              />
            </div>
          </div>
        )}
        {data && showCards && (
          <div
            className={`md:hidden read-more z-10 absolute flex items-end pb-5 justify-center bg-black w-full h-52 left-0 bottom-0`}
          >
            <div
              onClick={() => {
                showCard();
                router.replace("#members");
              }}
              className="w-14 h-14"
            >
              <Image
                className="w-full h-full rotate-180"
                alt="img"
                width={500}
                height={300}
                src={DownArrow}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MembersScrollCards;
