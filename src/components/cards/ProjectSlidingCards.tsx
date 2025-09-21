import ProjectImage from "@/assets/images/project.webp";
import { Lexend_Giga, Varela_Round } from "next/font/google";

interface ProjectSlidingCardsProps {
  name: string;
  image: unknown;
  style: string;
  mb: string;
  isMiddle: boolean;
}

const lexend_giga = Lexend_Giga({
  display: "swap",
  subsets: ["latin"],
  weight: ["900"],
});

function ProjectSlidingCards({
  name,
  image,
  style,
  mb,
  isMiddle,
}: ProjectSlidingCardsProps) {
  return (
    <div className={`flex flex-col gap-10 items-center lg:gap-y-15 ${mb}`}>
      <div
        className={`${style}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div
        className={`min-w-40  max-w-full z-40 text-center uppercase ${lexend_giga.style} dark:text-white text-gray-900 tracking-wide ${isMiddle ? "font-extrabold text-2xl p-3 lg:p-5 border-2 border-[#ff2c37]" : "text-xl"}`}
      >
        {name}
      </div>
    </div>
  );
}

export default ProjectSlidingCards;
