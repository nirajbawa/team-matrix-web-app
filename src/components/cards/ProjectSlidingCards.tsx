import ProjectImage from "@/assets/images/project.webp";

interface ProjectSlidingCardsProps {
  name: string;
  image: unknown;
  style: string;
}

function ProjectSlidingCards({ name, image, style }: ProjectSlidingCardsProps) {
  return (
    <div
      className={`${style}`}
      style={{
        backgroundImage: `url(${ProjectImage?.src || ""})`,
        backgroundSize: "100% 100%",
      }}
    ></div>
  );
}

export default ProjectSlidingCards;
