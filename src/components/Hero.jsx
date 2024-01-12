import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero__section ">
      <div>
        <img
          className="hero__image"
          src="/hero-image-4.svg"
          alt="Illustration of a laptop and a mobile phone"
        />
      </div>
      <div className="hero__text ">
        <h1>Hello, I am Bruno Fernandes</h1>
        <p className="mt-6">
          I am a <strong>Junior Software Developer</strong> With a passion for{" "}
          <strong>creating beautiful and functional</strong> web applications
          using modern technology.
        </p>
        <button className="flex items-center gap-2 mt-6 text-md md:text-lg lg:text-xl p-3 px-6 md:p-3 md:px-6 text-slate-100 bg-gradient-to-b from-[#3700ff] to-black rounded-full">
          <strong>
            <a href="#about" className="">
              Find out more
            </a>
          </strong>
          <FaArrowDown />
        </button>
      </div>
    </section>
  );
};

export default Hero;
