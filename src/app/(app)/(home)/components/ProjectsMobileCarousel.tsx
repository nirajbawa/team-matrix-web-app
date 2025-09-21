import ProjectSlidingCards from "@/components/cards/ProjectSlidingCards";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Data } from "./ProjectsCardsContainer";
import { Varela_Round } from "next/font/google";

const varela_round = Varela_Round({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

interface ProjectsMobileCarouselProps {
  data: Data[];
}

function ProjectsMobileCarousel({ data }: ProjectsMobileCarouselProps) {
  const carouselRef = useRef<Carousel | null>(null); // Create a reference for carousel
  const [activeIndex, setActiveIndex] = useState<number>(0); // Track the active index
  const [boxText, setBoxText] = useState<string>(data[activeIndex].text);

  const handleTextChange = (newText: string) => {
    // Fade out the current text
    setBoxText(""); // Trigger the fade-out transition
    setTimeout(() => {
      setBoxText(newText); // Change the text after fade-out is complete
    }, 300); // Match this duration with the fade-out duration
  };

  useEffect(() => {
    handleTextChange(data[activeIndex].text);
  }, [activeIndex, data]);

  // Custom Next button handler
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current?.next(0);
      setActiveIndex((index) => (index + 1 < data.length ? index + 1 : index));
    }
  };

  // Custom Prev button handler
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current?.previous(0);
      setActiveIndex((index) => (index - 1 >= 0 ? index - 1 : index));
    }
  };

  return (
    <div className="h-80 w-full my-20 relative">
      <Carousel
        data-aos="fade"
        data-aos-duration="4000"
        ref={carouselRef} // Attach the reference to the carousel
        additionalTransfrom={0}
        draggable={false}
        focusOnSelect={false}
        infinite={false} // Disable infinite looping
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false} // Prevent rewind
        rewindWithAnimation={false} // Prevent rewind animation
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        slidesToSlide={1}
        swipeable
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
      >
        {data.map((item, index) => (
          <div
            className="h-96 flex justify-center items-center pb-20"
            key={index}
          >
            <ProjectSlidingCards
              name={item.name}
              image={item.image}
              mb={"mb-0 h-96 justify-end  flex-end"}
              isMiddle={activeIndex === index}
              style="w-[19rem] h-[15rem] flex justify-center item-center"
            />
          </div>
        ))}
      </Carousel>

      <div className="w-full flex items-center justify-center">
        <div
          data-aos="slide-up"
          data-aos-duration="4000"
          className={`w-[85%] md:w-2/3 h-full min-h-[22rem] text-lg bg-[#323131] dark:bg-white text-black p-5 justify-center text-center flex  md-xs:hidden ${varela_round.style}`}
        >
          <p
            className={`transition-opacity ${boxText ? "opacity-100" : "opacity-5"} duration-300 ease-in-out text-white dark:text-black`}
          >
            {boxText}
          </p>
        </div>
      </div>

      {/* Custom Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 carousel-glass-bg dark:text-white py-4 px-6 rounded-full"
        onClick={handlePrev}
      >
        &lt; {/* Previous Arrow */}
      </button>
      <button
        className="absolute right-1 top-1/2 transform -translate-y-1/2 carousel-glass-bg dark:text-white py-4 px-6 rounded-full"
        onClick={handleNext}
      >
        &gt; {/* Next Arrow */}
      </button>
    </div>
  );
}

export default ProjectsMobileCarousel;
