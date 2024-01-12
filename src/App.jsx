import Hero from "./components/Hero";
import Header from "./components/Header";
import { useState } from "react";
import Background from "./components/Background";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// TODO 
//ADD SCROLLING SNAP SO THAT THE PAGE SCROLL TO THE RIGHT SECTION ONCE NAV LINK IS CLICKED ON


const App = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <main className="app scroll-smooth">
      <Background showNav={showNav} />
      <div className="mobile__bg__circle absolute top-[-190px] left-[10px] opacity-50 blur-3xl w-[300px] h-[300px] rounded-full bg-[#8d8dda] -z-20"></div>
      <div className="mobile__bg__circle absolute top-[610px] right-[0px]  opacity-50  blur-3xl w-[150px] h-[150px] rounded-full bg-[#ABD9D9] -z-20 "></div>
      

      <div className="desktop__bg__circle absolute top-[-450px] left-[100px] opacity-50 blur-3xl w-[600px] h-[600px] rounded-full bg-[#ABD9D9] -z-20"></div>
      <div className="desktop__bg__circle absolute top-[510px] right-[0px] opacity-50  blur-3xl w-[200px] h-[200px] rounded-full bg-[#8d8dda] -z-20 "></div>

      <Header showNav={showNav} setShowNav={setShowNav} />

      <section className="main__content">
        <Hero />
        <AboutMe />
        <Skills/>
        <Projects/>
        <Contact/>
      </section>
    </main>
  );
};

export default App;
