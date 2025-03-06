"use client";
import TextureBG1 from "@/assets/images/stories-texture-1.png";
import TextureBG2 from "@/assets/images/stories-texture-2.png";
import Image from "next/image";
import { CurrentItem } from "@/app/admin/dashboard/settings/stories/components/Stories";
import NoImage from "@/assets/images/no-image.png";
import { Stories } from "@/models/Stories";

interface OurStoriesLeftProps {
  setCurrentItem: (current: string | null) => void;
  data: Stories[];
}

function OurStoriesLeft({ setCurrentItem, data }: OurStoriesLeftProps) {
  const setCurrentItemAni = (text: string) => {
    setTimeout(() => {
      setCurrentItem(text);
    }, 500);
  };

  const getImage = (index: number) => {
    const item = data.find((item: Stories) => item.index === index) as
      | CurrentItem
      | undefined;
    return item?.images?.[0] || NoImage;
  };

  return (
    <div className="absolute w-full">
      <div
        className="absolute w-[30rem] md:h-[16rem] left-0 md:left-[28rem]"
        style={{
          backgroundImage: `url(${TextureBG1?.src})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div className="absolute w-full md:w-[59rem] h-svh z-40">
        <div
          data-aos="slide-right"
          data-aos-duration="4000"
          className="absolute w-[45%] md:w-[7rem] h-[11rem] md:h-[9rem] bg-[#ff302dc7] p-2 scaleAnimation z-0 md:left-[-1rem] md:top-[1rem]"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 1
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
          }}
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
          className="absolute w-[45%] md:w-[7rem] h-[11rem] md:h-[8rem] bg-[#ff302dc7] p-2 scaleAnimation z-0 md:left-[-1rem] md:top-[11rem]"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 2
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
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
          className="absolute w-[45%] md:w-[7rem] h-[11rem] md:h-[7rem] bg-[#ff302dc7] p-2 scaleAnimation z-0 md:left-[-1rem] md:top-[20rem]"
        >
          <Image
            className="w-full h-full"
            alt="img"
            width={500}
            height={300}
            src={getImage(3)}
            onMouseOver={() => {
              const item =
                (data.find(
                  (item: Stories) => item.index === 3
                ) as unknown as CurrentItem) || null;
              setCurrentItemAni(item?.text);
            }}
          />
        </div>

        <div
          data-aos="slide-right"
          data-aos-duration="4000"
          className="absolute w-[45%] md:w-[10rem] h-[11rem] md:h-[13rem] bg-[#ff302dc7] p-2 scaleAnimation z-0 md:left-[7.5rem] md:top-[1rem]"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 4
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
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
          className="absolute w-[48%] md:w-[8rem] h-[10rem] md:h-[10rem] top-[0rem] md:top-[1rem] left-[52%] md:left-[19.4rem]  bg-[#ff302dc7] p-2 scaleAnimation z-0"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 5
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
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
          className="absolute w-[49%] md:w-[10rem] h-[13rem] md:h-[12rem] top-[12rem] md:top-[12.8rem] left-[51%] md:left-[20rem]  bg-[#ff302dc7] p-2 scaleAnimation z-0"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 6
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
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
          className="absolute w-[46%] md:w-[10.9rem] h-[10rem] md:h-[11rem] top-[13rem] md:top-[15.5rem] left-[0rem] md:left-[7.5rem]  bg-[#ff302dc7] p-2 scaleAnimation z-0"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 7
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
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
          className="absolute w-[46%] md:w-[8rem] h-[11rem] md:h-[9rem] top-[25rem] md:top-[26.4rem] left-[0rem] md:left-[20.5rem]  bg-[#ff302dc7] p-2 scaleAnimation z-0"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 8
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
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
          className="absolute w-[100%] h-[15rem] md:w-[14rem] 2xl:w-[15rem] 2xl:h-[9rem] top-[52rem] md:top-[26rem] left-[0rem] md:left-[30rem]  bg-[#ff302dc7] p-2 scaleAnimation z-0"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 9
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
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
          className="absolute w-[100%] md:w-[14rem] h-[13rem] 2xl:w-[19rem] 2xl:h-[12rem] top-[37.5rem] md:top-[12.5rem] left-[0rem] md:left-[31.5rem]  bg-[#ff302dc7] p-2 scaleAnimation z-0"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 10
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
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
          className="absolute w-[100%] md:w-[14rem] h-[13rem] 2xl:w-[19.6rem] 2xl:h-[10rem] top-[37.5rem] md:top-[28rem] left-[0rem] md:left-[-1rem]  bg-[#ff302dc7] p-2 scaleAnimation z-0"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 11
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
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
          className="absolute w-[49%] h-[10rem] top-[26rem] transition-all duration-150 ease-linear md:w-[16rem] 2xl:w-[17rem] 2xl:h-[10rem] md:top-[1rem] left-[51%] md:left-[29rem]  bg-[#ff302dc7] p-2 scaleAnimation z-0"
          onMouseOver={() => {
            const item =
              (data.find(
                (item: Stories) => item.index === 12
              ) as unknown as CurrentItem) || null;
            setCurrentItemAni(item?.text);
          }}
        >
          <Image
            className="w-full h-full"
            alt="img"
            width={500}
            height={300}
            src={getImage(12)}
          />
        </div>
      </div>
      <div
        className="relative z-10 w-[24rem] h-[14rem] rotate-90 left-[-13rem] bottom-[-35rem] md:bottom-[-10rem] lg:bottom-[-25rem]"
        style={{
          backgroundImage: `url(${TextureBG2?.src})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
    </div>
  );
}

export default OurStoriesLeft;
