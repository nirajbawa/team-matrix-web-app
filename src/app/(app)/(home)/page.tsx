import FooterMain from "./components/FooterMain";
import HeroMain from "./components/HeroMain";
import OurStories from "./components/OurStories";
import ProjectsMain from "./components/ProjectsMain";
import Sponsors from "./components/Sponsors";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function Home() {
  return (
    <div className="w-full">
      <section id="hero">
        <HeroMain />
      </section>
      <section id="projects">
        <ProjectsMain />
      </section>
      <section id="our-stories">
        <OurStories />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="footer">
        <FooterMain />
      </section>
    </div>
  );
}
