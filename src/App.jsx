import DesktopHero from "./components/DesktopHero";
import Header from "./components/Header";
import { useState } from "react";
import Background from "./components/Background";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <main className="app">
      <Background showNav={showNav} />
      <Header showNav={showNav} setShowNav={setShowNav} />
      <section className="main__content">
          <DesktopHero />
        <section className="bg-blue-500">
          <h1>About ME</h1>
        </section>
        <section className="bg-slate-500">
          <h1>Projects </h1>
        </section>
        <section className="bg-white">
          <h1>Contact </h1>
        </section>
      </section>
    </main>
  );
};

export default App;
