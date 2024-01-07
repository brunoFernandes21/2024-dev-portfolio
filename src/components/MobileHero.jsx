import { FaArrowDown } from "react-icons/fa";

const MobileHero = () => {
  return (
    <section id="hero" className="hero__section mt-10 h-full">
      <img src="/src/assets/hero-image-4.svg" alt="" />
      <h1>Hello, I am Bruno Fernandes</h1>
      <p>
        I am a <strong>Junior Software Developer</strong> With a passion for <strong>creating beautiful
        and functional</strong> web applications using modern technology.
      </p>
      <button className="flex items-center gap-2 text-md md:text-lg lg:text-xl p-3 px-6 md:p-3 md:px-6 text-slate-100 bg-gradient-to-b from-[#ABD9D9] to-black rounded-full">
        <strong>
          <a href="#about" className="">
            Find out more
          </a>
        </strong>
        <FaArrowDown />
      </button>
    </section>
  );
};

export default MobileHero;
