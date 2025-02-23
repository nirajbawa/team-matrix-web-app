import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectSlidingCards from "@/components/cards/ProjectSlidingCards";
import ProjectsMobileCarousel from "./ProjectsMobileCarousel";
import { Varela_Round } from "next/font/google";
import { Item } from "@/app/admin/dashboard/settings/projects/components/Projects";

const varela_round = Varela_Round({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

export interface Data {
  image: unknown;
  name: string;
  text: string;
}

interface ProjectCardsContainerProps {
  data: Item[];
}

function ProjectCardsContainer({ data }: ProjectCardsContainerProps) {
  const carouselRef = useRef<Carousel | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [boxText, setBoxText] = useState<string>(data[activeIndex + 1].text);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  const handleTextChange = (newText: string) => {
    // Fade out the current text
    setBoxText(""); // Trigger the fade-out transition
    setTimeout(() => {
      setBoxText(newText); // Change the text after fade-out is complete
    }, 300); // Match this duration with the fade-out duration
  };

  useEffect(() => {
    handleTextChange(data[activeIndex + 1].text);
  }, [activeIndex]);

  return (
    <div className="w-full h-full p-0 justify-center flex-col ">
      <div className="py-0 hidden md-xs:flex">
        <Carousel
          data-aos="fade"
          data-aos-duration="4000"
          ref={carouselRef}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false} // Enable center mode for the middle slide
          className="items-center flexxl:px-[5%] 2xl:px-[6%] 3xl:px-[9%] md-xs:px-[7%] "
          containerClass="container-with-dots"
          itemClass=""
          draggable={false}
          focusOnSelect={false}
          infinite={false} // Disable infinite looping
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false} // Prevent rewind
          rewindWithAnimation={false} // Prevent rewind animation
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          slidesToSlide={1}
          swipeable
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`w-80 h-[30rem] flex flex-row items-center ${activeIndex + 2 === index ? "justify-start" : "justify-end"} text-white`}
            >
              <ProjectSlidingCards
                name={item.name}
                image={item.image}
                mb={`${activeIndex + 1 === index ? "mb-[5rem]" : ""}`}
                style={`${activeIndex + 1 === index ? "w-80 h-[14rem]" : "w-60 h-44 mt-16"}`}
                isMiddle={activeIndex + 1 === index}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div
        data-aos="slide-up"
        data-aos-duration="4000"
        className={`md:w-1/3 h-[18rem] top-[-6rem] text-lg relative z-10 md:left-[40%] lg:left-[50rem] bg-[#323131] dark:bg-white xl:left-[34%] 2xl:left-[34%]   text-white dark:text-black p-10 text-center hidden md-xs:flex ${varela_round.className}`}
      >
        <button
          className="bg-red-800  w-20 absolute animate-bounce h-20 rounded-full top-[6rem] -left-12 dark:text-white  text-black text-4xl carousel-glass-bg"
          onClick={() => {
            console.log("hello");
            carouselRef.current?.previous(0);
            setActiveIndex((index) => (index - 1 >= 0 ? index - 1 : index));
          }}
        >
          &lt; {/* Previous Arrow */}
        </button>
        <p
          className={`transition-opacity ${boxText ? "opacity-100" : "opacity-5"} duration-300 ease-in-out`}
        >
          {boxText}
        </p>
        <button
          className="bg-red-800 w-20 absolute h-20  animate-bounce rounded-full top-[6rem]  -right-12 dark:text-white text-black text-4xl carousel-glass-bg"
          onClick={() => {
            setActiveIndex((index) =>
              index + 1 < data.length - 2 ? index + 1 : index
            );
            carouselRef.current?.next(0);
          }}
        >
          &gt; {/* Next Arrow */}
        </button>
      </div>

      <div className="flex md-xs:hidden min-h-[50rem]">
        <ProjectsMobileCarousel data={data} />
      </div>
    </div>
  );
}

export default ProjectCardsContainer;
