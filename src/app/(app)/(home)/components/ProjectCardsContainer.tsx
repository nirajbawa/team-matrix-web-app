import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectImage from "@/assets/images/project.webp";
import ProjectSlidingCards from "@/components/cards/ProjectSlidingCards";

interface Data {
  image: unknown;
  name: string;
}

function ProjectCardsContainer() {
  const carouselRef = useRef<Carousel | null>(null); // Carousel reference
  const [activeIndex, setActiveIndex] = useState<number>(0); // Track the active index
  const [data, setData] = useState<Data[]>([
    {
      image: ProjectImage,
      name: "BULL SHARK",
    },
    {
      image: ProjectImage,
      name: "BULL SHARK",
    },

    {
      image: ProjectImage,
      name: "BULL SHARK",
    },

    {
      image: ProjectImage,
      name: "RED SHARK",
    },
    {
      image: ProjectImage,
      name: "RED SHARK",
    },
    {
      image: ProjectImage,
      name: "RED SHARK",
    },
  ]);

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

  return (
    <div className="w-full h-full p-0 flex justify-center flex-col">
      <div className="py-14">
        <Carousel
          ref={carouselRef}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false} // Enable center mode for the middle slide
          className="items-center flex px-24"
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
              className={`w-80 h-[30rem] flex items-center ${activeIndex + 2 === index ? "justify-start" : "justify-end"} text-white  `}
            >
              <ProjectSlidingCards
                name={item.name}
                image={item.image}
                style={`${activeIndex + 1 === index ? "w-80 h-60 mb-[16rem]" : "w-60 h-44 mt-16"}`}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Custom Buttons */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => {
            carouselRef.current?.previous(0);
            setActiveIndex((index) => (index - 1 >= 0 ? index - 1 : index));
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setActiveIndex((index) =>
              index + 1 < data.length - 2 ? index + 1 : index
            );
            carouselRef.current?.next(0);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProjectCardsContainer;
