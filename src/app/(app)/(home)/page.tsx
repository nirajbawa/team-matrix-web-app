import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Login from "./components/Login";
import MembersSection from "./components/MembersSection";
import Projects from "./components/Projects";
import Recruitment from "./components/Recruitment";
import Sponsors from "./components/Sponsors";

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export default async function Home() {
  return (
    <div className="w-full">

      <section id='hero'>
        <HeroSection />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='projects'>
        <Projects />
      </section>

      {/* <section id="members">
        <MembersSection />
      </section> */}

      <section id='sponsors'>
        <Sponsors />
      </section>

      <section id='login' >
        <Login />
      </section>

      <section id='recruitment'>
        <Recruitment />
      </section>

      <Footer />
    </div>
  );
}
