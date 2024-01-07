import DesktopHero from "./components/MobileHero";
import Header from "./components/Header";
import { useState } from "react";
import Background from "./components/Background";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <main className="app overflow-hidden">
      <Background showNav={showNav} />
      <div className="mobile__bg__circle absolute top-[-190px] left-[10px] opacity-50 blur-2xl w-[300px] h-[300px] rounded-full bg-[#8d8dda] -z-20"></div>
      <div className={`mobile__bg__circle absolute top-[610px] right-[0]  opacity-50  blur-2xl w-[150px] h-[150px] rounded-full bg-[#ABD9D9] -z-20 `}></div>
      

      <div className="desktop__bg__circle absolute top-[-190px] left-[10px] opacity-50  blur-2xl w-[300px] h-[300px] rounded-full bg-[#8d8dda] -z-20"></div>
      <div className="desktop__bg__circle absolute top-[-150px] left-[10px] opacity-50  blur-2xl   w-[300px] h-[300px] rounded-full bg-[#8d8dda] -z-20"></div>

      <Header showNav={showNav} setShowNav={setShowNav} />

      <section className="main__content">
        <DesktopHero />
        <AboutMe />
        <Skills/>
        <Projects/>
        <Contact/>
      </section>
    </main>
  );
};

export default App;
