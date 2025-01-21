import Footer from "./components-old/Footer";
import HeroSection from "./components/HeroSection";
import ProjectsMain from "./components/ProjectsMain";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function Home() {
  return (
    <div className="w-full">
      <section id="hero">
        <HeroSection />
      </section>
      <div className="w-full h-full">
        <section id="about">
          <ProjectsMain />
        </section>
      </div>
      <Footer />
    </div>
  );
}
