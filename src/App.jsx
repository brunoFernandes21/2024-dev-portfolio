import DesktopHero from "./components/MobileHero";
import Header from "./components/Header";
import { useState } from "react";
import Background from "./components/Background";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <main className="app overflow-hidden">
      <Background showNav={showNav} />
      <div className="mobile__bg__circle absolute top-[-190px] left-[10px] opacity-50 blur-2xl w-[300px] h-[300px] rounded-full bg-[#8d8dda] -z-20"></div>
      {/* <div className={`mobile__bg__circle top-[510px] left-[330px]  opacity-50  blur-2xl w-[300px] h-[300px] rounded-full bg-[#ABD9D9] -z-20 ${showNav ? "hidden" : "absolute"}`}></div> */}
      

      <div className="desktop__bg__circle absolute top-[-190px] left-[10px] opacity-50  blur-2xl w-[300px] h-[300px] rounded-full bg-[#8d8dda] -z-20"></div>
      <div className="desktop__bg__circle absolute top-[-150px] left-[10px] opacity-50  blur-2xl   w-[300px] h-[300px] rounded-full bg-[#8d8dda] -z-20"></div>

      <Header showNav={showNav} setShowNav={setShowNav} />

      <section className="main__content">
        <DesktopHero />
        <AboutMe />
        <Skills/>
        <section className="border border-green-500">
          <h1>Projects </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi voluptatibus aut doloremque eveniet ab nulla totam perspiciatis neque repellendus, corporis quaerat quae placeat, cupiditate consequatur. Maxime facere commodi velit!</p>
        </section>
        <section className="bg-white">
          <h1>Contact </h1>
        </section>
      </section>
    </main>
  );
};

export default App;
